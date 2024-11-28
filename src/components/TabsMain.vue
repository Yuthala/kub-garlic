<template>
	<main>
		<section class="tabs">
			<div class="container">
				<h2>Сорта</h2>
				<div>
					<app-button 
						:color="active === 'one' ? 'primary' : ''" 
						@action="active = 'one'"
						text="One">
					</app-button>
					<app-button 
						:color="active === 'two' ? 'primary' : ''" 
						@action="active = 'two'"
						text="Two">
					</app-button>
				</div>
				
				<div>
					<tab-one v-if="active === 'one' "></tab-one>
					<tab-two v-else-if="active === 'two'"></tab-two>
				</div>

				<keep-alive>
					<component :is="componentName"></component>
				</keep-alive>
			</div>
		</section>
	</main>
</template>

<script>
  import AppButton from './AppButton'
  import TabOne from './tabs/TabOne'
  import TabTwo from './tabs/TabTwo'
  
  export default {
    data() {
      return {
        active: 'one'//two
      }
    },
    computed: {
      componentName() {
        // if(this.active === 'one') {
        //   return 'app-text-one'
        // } return 'app-text-two'
        return 'Tab' + this.active
      },
      oneColor() {
        return this.active === 'one' ? 'primary' : ''
      }
    },
    components: {AppButton, TabOne, TabTwo}
  }
  
</script>

<style scoped>
  
</style>