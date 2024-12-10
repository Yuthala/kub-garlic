<template>
	<div v-if="sort.length !== 0">
		<div class="card">
			<h5>Последние запросы:</h5>
			<div class="badge-wrapper">
				<span class="badge text-bg-light"  v-for="item in sort" :key="item.id">
					{{ item.firstName }}
				</span>
			</div>
		</div>

	</div>
	<div class="card center" v-else>
		<small>Пока ничего не введено</small>
		<button class="btn btn-warning" @click="$emit('load')"><small>Загрузить список</small></button>
	</div>
</template>

<script>
	export default {
		emits:['load'],
		props: ['sort']
	}
</script>

<style scoped>
	.card {
		margin: 10px 0;
		width: 40%;
	}
	h3 {
		padding-left: 15px;
	}
	button {
		width: 30%;
		border-radius: 10px;
		margin: 10px;
	}
	span.badge {
		margin: 5px;
		border: 1px solid limegreen;
	}
	.badge-wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, auto);
		grid-auto-flow: row;
	}
</style>