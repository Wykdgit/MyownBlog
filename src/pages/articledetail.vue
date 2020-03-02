<template>
	<div>
		<headPic2></headPic2>
		<div class="twoCol">
			<div class="firstCol">
				<div class="singleArticle">
					<h1>文章的标题</h1>
					<p class="auhtor">作者/王垚凯  发布于/2020-02-12</p>
					<ul>
						<li>阅读数12</li>
						<li>评论数5</li>
						<li>赞数2</li>
					</ul>
					<p class="context">文章正文
					<br><br><br><br><br><br><br><br><br><br><br><br>
					<br><br><br><br><br><br><br><br><br><br><br><br>
					</p>
					<footer2></footer2>
				</div>
			</div>
			<div class="secondCol">
				<recommendart2></recommendart2>
			</div>
			
		</div>
	</div>
</template>

<script>
	import headPic2 from "../components/Header.vue"
	import recommendart2 from "../components/recommendArticles.vue"
	import footer2 from "../components/Footer.vue"
	export default{
		name:'singleArticlePage',
		props:{
			
		},
		components:{
			headPic2,
			recommendart2,
			footer2
		}
	}
</script>

<style>
	.singleArticle{position: relative;}
	.singleArticle ul{list-style-type: none;}
	.singleArticle ul li{float: right;margin: 10px;}
	.singleArticle .context{position: relative;top:50px;}
</style>
