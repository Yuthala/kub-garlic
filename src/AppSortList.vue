<template>
	<div v-if="sort.length !== 0">
		<div class="card" v-for="item in sort" :key="item.id">
			<h3>{{ item.firstName }}</h3>
		</div>
	</div>
	<div class="card center" v-else>
		<small>Пока ничего не введено</small>
		<button class="btn btn-warning" @click="$emit('load')">Загрузить список</button>
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
	}
	h3 {
		padding-left: 15px;
	}
	button {
		width: 30%;
		border-radius: 10px;
		margin: 10px;
	}
</style>