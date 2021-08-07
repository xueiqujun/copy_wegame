<template>
	<div id="app">
		  <headerTop :flag="flag"/>
		  <wings/>
		  <myfooter/>
	</div>
</template>

<script>
	import headerTop from "@/components/headerTop";
	import wings from '@/out/wings.vue'
	import helpfeedback from '@/out/Helpfeedback.vue'
	// import heraderTop from '@/components/headerTop'
	import myfooter from '@/components/footer.vue'
	
	export default {
	  name: 'App',
	  components: {
		headerTop,
		wings,
		myfooter
	  },
	  data () {
		  return {
			  flag:[false,false,false,true,false]
		  }
	  }
	}
</script>

<style>
</style>