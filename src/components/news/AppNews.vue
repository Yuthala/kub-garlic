<template>
	<div class="card mt-3">
		<div class="card-body">
			<p class="text-body-secondary small">{{ date }}</p>
			<h5 class="card-title">{{ title }}</h5>
			<div v-if="isNewsOpen" >
				<h6 class="card-text text-body-secondary small pt-3">{{ source }} пишет:</h6>
				<p class="card-text">{{ details }}</p>
			</div>

			<button class="badge details-btn" @click="open">
				{{ isNewsOpen ? 'Свернуть' : 'Подробнее' }}
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			date: {
				type: Date,
				required: true
			},
			details: {
				type: String,
				required: true
			},
			source: {
				type: String,
				required: true
			},
			id: {
				type: Number,
				required: true
			}, 
			isOpen: {
				type: Boolean,
				required: false,
				default: false
			}
		},
		emits: ['open-news'],
		data() {
			return {
				isNewsOpen: this.isOpen
			}
		},
		methods: {
			open() {
				this.isNewsOpen = !this.isNewsOpen
				if(this.isNewsOpen) {
					this.$emit('open-news')
				}
			}
		}
	}
</script>

<style scoped>
	.details-btn {
		background-color: transparent;
		border: none;
		border-bottom: 1px dashed gray;
		border-radius: 0;
		color: tomato;
		padding-left: 0;
		padding-right: 0;
	}
</style>