<template>
	<h3>Актуальные агро-новости</h3>
	<small>{{ now }}</small>
	<hr/>
</template>

<script>
	export default {
		data() {
			return {
				now: new Date().toLocaleDateString()
			}
		}
	}
</script>