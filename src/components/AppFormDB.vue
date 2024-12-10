<template>
	<div class="container">
		<form class="card" @submit.prevent="createSort">
			<h4>Напишите какой сорт вас заинтересовал,</h4>
			<p class="small">и мы пришлем информацию по наличию и цены. <br/>Не является подпиской на рекламную рассылку.</p>

			<div>
				<label for="name">Введите сорт</label>
				<input class="form-control" type="text" id="name" v-model.trim="name" placeholder="например, Шадейка">
			</div>

			<app-input
			placeholder="example@mail.com"
			:error="errors.email"
			label="Введите адрес электронной почты"
			v-model="email"
			></app-input>

			<app-button class="btn primary" :disabled="name.length === 0" text="Отправить запрос"></app-button>
		</form>

	<app-loader v-if="loading"></app-loader>

	<app-sort-list 
		v-else
		:sort="sort"
		@load="loadSort"
	></app-sort-list>	
	</div>
</template>

<script>
import AppSortList from './../AppSortList.vue'
import AppLoader from './../AppLoader.vue'
import axios from 'axios'
import AppButton from './AppButton'
import AppInput from './AppInput'

export default {
	data() {
		return {
			name: '',
			sort: [],
			email: '',
			errors: {	
				name: null
			},
			loading: false
		}
	},
	mounted() {
		this.loadSort()
	},
	methods: {
		async createSort() {

			const response = await fetch('https://vue-kub-garlic-default-rtdb.firebaseio.com/sort.json', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					firstName: this.name,
					email: this.email
				})
			})

			const firebaseData = await response.json()

			this.sort.push({
				firstName: this.name,
				id: firebaseData.name,
				email: firebaseData.email
			}) 
			this.name = ''
			this.email = ''
		},
		async loadSort() {
			try{
				const {data} = await axios.get('https://vue-kub-garlic-default-rtdb.firebaseio.com/sort.json')
				if (!data) {
					throw new Error ('Список пуст')
				}
				this.sort = Object.keys(data).map(key => {
				return {
					id: key,
					...data[key]
				}
			})
			this.loading = false

			} catch(e){
				this.loading = false
				console.log(e.message)
			}

		},
		
		formIsValid() {
        let isValid = true //isValid изначально true
			if (this.email.length === 0) {
				this.errors.email = 'Введите адрес электронной почты, чтобы мы могли ответить вам'
				isValid = false
			} else {
				this.errors.email = null
			}
			return isValid //возвращаем isValid
        }
      },
		components: {AppSortList, AppLoader, AppButton, AppInput}
	}


</script>

<style scoped>
	.card {
		width: 50%;
		margin: 20px 0;
	}

	button {
		min-width: 30%;
		border-radius: 10px;
		margin: 10px;
	}
	p {
		line-height: 1.1rem;
	}
</style>