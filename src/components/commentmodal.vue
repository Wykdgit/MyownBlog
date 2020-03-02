<template>
	<div class="top">
		<form name="userComment" action="#" method="get">
			QQ:<input type="text" name="userqq"><br><br>
			昵称:<input type="text" name="nickname"><br><br>
			邮箱:<input type="text" name="youxiang"><br><br>
			<input type="radio" name="isInform" value="inform">邮箱通知<br>
			<input type="radio" name="isInform" value="noInform">不邮箱通知<br><br>
			<textarea placeholder="请输入你的评论"></textarea><br>
			<input type="submit" value="发布 ">
		</form>
	</div>
</template>

<script>
	export default{
		name:'commentmodal',
		props:{
			
		},
		mounted(){
			this.controlButton();//初始的时候就决定是否显示
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	.top form textarea{height: 200px;width: 800px;}
</style>
