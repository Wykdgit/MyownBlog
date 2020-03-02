<template>
	<div class="header">
		<img src="../../public/imgs/blog_head.jpg" alt="topLeftPic">
		<p>王垚凯的博客</p>
		<ul>
			<li>
				<div class="xialaDown">
					<button>分类</button>
					<div class="xialaContent">
						<a href="/#/category">技术</a>
						<a href="/#/category">生活</a>
						<a href="/#/category">健身</a>
					</div>
				</div>
			</li>
			<li><a href="/" rel="shiguangzhou">时光轴</a></li>
			<li><a href="/#/leaveComment" rel="shiguangzhou">留言</a></li>
			<li><a href="/#/guanyu" rel="shiguangzhou">关于</a></li>
		</ul>
	</div>

</template>

<script>
	export default {
		name: 'nav-header',
		props: {

		}
	}
</script>
<style>

</style>
