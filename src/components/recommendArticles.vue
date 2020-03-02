<template>
	<div>
		<ul class="recommendArticles">
			<li v-for="item in recommends" v-bind:key="item.artilcId">
				<h3><a href="#">{{item.articleName}}</a></h3>
				<p>阅读数{{item.readNum}}</p>
				<p>评论数{{item.commenrNum}}</p>
				<p>点赞数{{item.starNum}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'recommend-article',
		props:{
			
		},
		data(){
			return {
				recommends:[]
			}
		},
		mounted(){
			this.init();
		},
		methods:{
			init(){
				//获取推荐文章的数据
				this.axios.get("/mock/recommendArticles.json").then((response) => {
					this.recommends = response.data.data;
				})
			}
		}
	}
</script>

<style>
</style>
