<template>
	<div class="container">
		<form class="card" @submit.prevent="createPerson">
			<h2>Напишите какой сорт вас заинтересовал</h2>

			<div class="form-control">
				<label for="name">Введите сорт</label>
				<input class="form-control" type="text" id="name" v-model.trim="name">
			</div>

			<button class="btn btn-success" :disabled="name.length === 0" >Отправить запрос</button>
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

export default {
	data() {
		return {
			name: '',
			sort: [],
			loading: false
		}
	},
	mounted() {
		this.loadSort()
	},
	methods: {
		async createPerson() {
			//https://vue-kub-garlic-default-rtdb.firebaseio.com/sort.json
			//this.name

			const response = await fetch('https://vue-kub-garlic-default-rtdb.firebaseio.com/sort.json', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					firstName: this.name
				})
			})

			const firebaseData = await response.json()

			this.sort.push({
				firstName: this.name,
				id: firebaseData.name
			}) 
			this.name = ''
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

		}
	},
	components: {AppSortList, AppLoader}
}
</script>

<style scoped>
	.card {
		width: 50%;
		margin: 20px 0;
	}

	button {
		width: 30%;
		border-radius: 10px;
		margin: 10px;
	}
</style>