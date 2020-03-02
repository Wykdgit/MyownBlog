<template>
	<div>
		<headPic3></headPic3>
		<div class="twoCol">
			<div class="firstCol">
				<h2>@WykBlog 欢迎你的留言</h2>
				<commentmodal >
					
				</commentmodal>
				<ul class="beforeComment">
					<li v-for="item in comments" v-bind:key="item.commentId">
						<div class="left">
							<img v-bind:src="item.picUrl" alt="userHeadPic">
						</div>
						<div class="right">
							<p id="username">{{item.userName}}</p>
							<p id="commentcontext">{{item.context}}</p>
							<p id="starnum">
								点赞数{{item.starNum}} 
								<button @click="openComment(item)">回复</button>
							</p>
							<form name="userComment" action="#" method="get" v-if="seen">
								QQ:<input type="text" name="userqq"><br><br>
								昵称:<input type="text" name="nickname"><br><br>
								邮箱:<input type="text" name="youxiang"><br><br>
								<input type="radio" name="isInform" value="inform">邮箱通知<br>
								<input type="radio" name="isInform" value="noInform">不邮箱通知<br><br>
								<textarea placeholder="请输入你的评论"></textarea><br>
								<input type="submit" value="发布 ">
								<input type="button" value="合起来" @click="closeComment(item)">
							</form>
						</div>
					</li>
				</ul>
				<footer3></footer3>
			</div>
			<div class="secondCol">
				<recommendart3></recommendart3>
			</div>
		</div>
	</div>
</template>

<script>
	import headPic3 from "../components/Header.vue"
	import footer3 from "../components/Footer.vue"
	import recommendart3 from "../components/recommendArticles.vue"
	import commentmodal from "../components/commentmodal.vue"
	export default{
		name:'commentpage',
		props:{
			
		},
		data(){
			return{
				comments:[],
				clickNum:0,
				seen:false,//默认评论框是不弹出的
			}
		},
		components:{
			headPic3,
			footer3,
			recommendart3,
			commentmodal
		},
		mounted(){
			this.init();
			this.clickNum=0;
		},
		methods:{
			//获取评论区数据
			init(){
				this.clickNum=0;
				this.axios.get("/mock/comments.json").then((response)=>{
					this.comments=response.data.data;
				})
			},
			openComment(itemp){
				this.comments.forEach((item)=>{
					if(itemp.commentId==item.commentId){
						this.seen=true;
					}
				})
			},
			closeComment(itemp){
				this.comments.forEach((item)=>{
					if(itemp.commentId==item.commentId){
						this.seen=false;
					}
				})
			}
		}
	}
</script>

<style>
	
	.beforeComment{position: relative;top:30px;list-style-type: none;left:-40px;}
	.left{width: 60px;float: left;}
	.left img{width: 50px;height: 50px;}
	.right{position: relative;margin-left: 60px;}
	
</style>
