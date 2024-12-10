<template>
	<div class="mb-3" :class="{invalid: error}">
        <label :for="id" class="form-label">{{label}}</label>
        <input 
			type="text" 	
			:id="id" 
			:placeholder="placeholder"
			:value="modelValue"
			@input="change"
			class="form-control"
          >
          <small v-if="error">{{ error }}</small>
      </div>
</template>

<script>
export default {
	emits: ['update:modelValue'],
	props: {
		modelValue: String,
		placeholder: String,
		label: String,
		error: String
	},
	data() {
		return {
			id: 'input-' + Math.random()
		}
	}, 
	methods: {
		change(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>