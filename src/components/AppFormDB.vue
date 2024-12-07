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
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: ''
		}
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
			console.log(firebaseData)
			this.name = ''
		}
	}
}
</script>

<style scoped>
	.card {
		width: 50%;
	}

	button {
		width: 30%;
		border-radius: 10px;
		margin: 10px;
	}
</style>