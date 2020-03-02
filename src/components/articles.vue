<template>
	<ul class="article">
		<li v-for="item in articles" v-bind:key="item.articleId">
			<div id="articlebody">
				<h2>{{item.articleTitle}}</h2>
				<p>{{item.articleTag}}</p>
				<p>{{item.articleContext}}</p>
			</div>
			<div id="articleExtra">
				<p>评论数{{item.commentNum}}</p>
				<p>阅读数{{item.readNum}}</p>
				<p>赞数{{item.starNum}}</p>
			</div>
			<div id="articleTag">
				<img src="#" alt="tag">
			</div>
		</li>
	</ul>
</template>

<script>
	export default{
		name:'articleshow',
		props:{
			
		},
		data(){
			return {
				articles:[]
			}
		},
		mounted(){
			this.init();
		},
		methods:{
			init(){
				//获取文章的数据
				this.axios.get("/mock/article.json").then((response) => {
					this.articles = response.data.data;
				})
			}
		}
	}
</script>

<style>
</style>
