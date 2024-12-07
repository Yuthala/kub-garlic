<template>
	<div class="container">
		<form class="card" @submit.prevent="createPerson">
			<h2>Работа с базой данных</h2>

			<div class="form-control">
				<label for="name">Введите имя</label>
				<input class="form-control" type="text" id="name" v-model.trim="name">
			</div>

			<button type="button" class="btn btn-success" :disabled="name.length === 0" >Создать человека</button>
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
		createPerson() {
			//this.name
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