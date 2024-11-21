<template>
	<main>
		<div class="container">
			<h2>Сорта</h2>
			<app-button class="btn" :class="color" @click="$emit('action')">
				{{ text }}
			</app-button>
		</div>
	</main>
</template>

<script>
	import AppButton from './AppButton'
	export default {
		name: 'TabsMain',
		components: {
			'app-button': AppButton
		},
		emits: ['action'],
		props: {
			text: {
				type: String,
				required: true
			},
			color: {
				type: String,
				default: '',
				validator(value) {
					return ['', 'primary', 'danger'].includes(value)
				}
			}
		}
	}
</script>