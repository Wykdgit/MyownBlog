<template>
	<div>
		<navheader></navheader>
		<div class="twoCol">
			<div class="firstCol">
				<p>这是一篇自我介绍的文章{{introduce}}<br><br><br><br><br><br><br><br><br><br><br><br>
				<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
				<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
				</p>
				<navfooter></navfooter>
			</div>
			<div class="secondCol">
				<recommendart></recommendart>
				<tagwall></tagwall>
			</div>
			
		</div>
	</div>
	
</template>

<script>
	import navheader from  "../components/Header.vue"
	import navfooter from "../components/Footer.vue"
	import recommendart from "../components/recommendArticles.vue"
	import tagwall from "../components/tagswall.vue"
	export default{
		name:'guanyu',
		data(){
			return{
				introduce:" "
			}
		},
		components:{
			navheader,
			navfooter,
			recommendart,
			tagwall
		},
		mounted(){
			
		},
		methods:{
			init(){
				this.axios.get("/mock/guanyu.json").then((response)=>{
					this.introduce=response.data.data;
				})
			}
		}
	}
</script>

<style>
</style>
