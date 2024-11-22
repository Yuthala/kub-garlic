<!-- TO DO: перевести дату в нормальный вид при отображении, выровнять слева 
убрать нижний бордер у карточки
сделать лайки для новостей
Сделать стилизацию для Свернуть и Подробнее
-->
<template>
	<section class="news">
		<div class="container pt-1">
			<news-header></news-header>
			<span>Открыто: <strong> {{ openRate }}</strong></span>
			<app-news
				v-for="item in news"
				:key="item.id"
				:title="item.title"
				:details="item.details"
				:id="item.id"
				:is-open="item.isOpen"
				@open-news="openNews"
			></app-news>
		</div>
	</section>
</template>

<script>
import NewsHeader from './news/NewsHeader'
import AppNews from './news/AppNews'
	export default {
		data() {
			return {
				news: [
					{
						title: 'Пшеница подорожала до $260 за тонну',
						details: 'В порту Новороссийска российская пшеница твердых сортов с содержанием белка 12,5% подорожала и теперь стоит $260 за тонну',
						id: 1,
						isOpen: false
					},
					{
						title: 'Аграриям спишут все кредиты',
						details: 'Правительство отчиталось, что спишет аграрным предприятиям кредиты, взятые до 2020 года',
						id: 2,
						isOpen: false
					},
					{
						title: 'Фермеры получат компенсацию за майские заморозки',
						details: '1500 фермерских хозяйств и КФХ получат компансации из регионадьных бюджетов в качестве компенсации за погибший урожай зерновых и плодовых деревьев в мае 2024 года',
						id: 3,
						isOpen: false
					}
				],
				openRate: 0,
			}
		},
		methods: {
			openNews() {
				this.openRate++
			}
		},
		components: {NewsHeader, AppNews}
	}
</script>