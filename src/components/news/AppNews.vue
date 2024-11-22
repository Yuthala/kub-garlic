<template>
	<div class="card mt-3">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p v-if="isNewsOpen" class="card-text">{{ details }}</p>
			<button class="btn btn-primary" @click="open">
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
			details: {
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