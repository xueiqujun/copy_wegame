<template>
	<div id="app">
		  <heraderTop :flag="flag"/>
		  <helpfeedback/>
	</div>
</template>

<script>
	import helpfeedback from'@/out/Helpfeedback.vue'
	import heraderTop from'@/components/headerTop.vue'
	
	export default {
	  name: 'App',
	  components: {
		heraderTop,
		helpfeedback
	  }
	  ,data () {
		  return {
			   flag:[false,false,false,false,true]
		  }
	  }
	}
</script>

<style>
</style>