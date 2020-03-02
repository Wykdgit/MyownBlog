<template>
	<div>
		<ul class="tagswall">
			<li v-for="item in tags" v-bind:key="item.tagId">
				<p>{{item.tagName}} {{item.articleNum}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'tagswall',
		props:{
			
		},
		data(){
			return {
				tags:[]
			}
		},
		mounted(){
			this.init();
		},
		methods:{
			init(){
				//获取标签数据
				this.axios.get("/mock/tagswall.json").then((response) => {
					this.tags = response.data.data;
				})
			}
		}
	}
</script>

<style>
</style>
