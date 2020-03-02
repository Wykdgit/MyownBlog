<template>
	<div>
		<headPic></headPic>
		<div class="twoCol">
			<div class="firstCol">
				<div class="cate">
					<h2>分类:</h2>
					<ul>
						<li><a href="#">健身</a></li>
						<li><a href="#">技术</a></li>
						<li><a href="#">生活</a></li>
					</ul>
				</div>
				<articlesign1></articlesign1>
				
				<article1></article1>
				
				<footer1></footer1>
			</div>
			<div class="secondCol">
				<recommendart1></recommendart1>
				
				<tagwall1></tagwall1>
			</div>
			
		</div>
	</div>
</template>

<script>
	import headPic from "../components/Header.vue"
	import articlesign1 from "../components/articleSign.vue"
	import article1 from "../components/articles.vue"
	import recommendart1 from "../components/recommendArticles.vue"
	import footer1 from "../components/Footer.vue"
	import tagwall1 from "../components/tagswall.vue"
	
	export default{
		name:'categorypage',
		props:{
			
		},
		components:{
			headPic,
			articlesign1,
			article1,
			recommendart1,
			footer1,
			tagwall1
		},
		data(){
			return{
				
			}
		},
		mounted(){
			
		},
		methods:{
			
		},
	}
</script>

<style>
	.cate {position: relative;width: 850px;height:70px;background-color: #808080;}
	.cate h2{float: left;color: black;}
	.cate ul{list-style-type: none;position: absolute;top:-10px;left:20px;}
	.cate ul li{padding: 10px;float: left;background-color: #FA8072;margin: 10px;}
	.cate ul li:hover{background-color: bisque;}
	.cate ul li a{text-decoration: none;color: black;font-size: 17px;}
</style>
