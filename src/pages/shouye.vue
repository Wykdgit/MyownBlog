<template>
	<div>
		<navheader></navheader>
		<div class="twoCol">
			<div class="firstCol">
				<div class="headPic" @mouseenter="stopTimer" @mouseleave="setTimer">
					<img v-bind:src="headPic[picIndex].picUrl">
					<p id="num">{{headPic[picIndex].picTopNum}}</p>
					<button id="up" @click="switchPic('up')">上一张</button>
					<button id="down" @click="switchPic('down')">下一张</button>
				</div>
				<articlesign></articlesign>
				
				<articlek></articlek>
				
				<navfooter></navfooter>
			</div>
			
			<div class="secondCol">
				<div class="headPicDescribe">
					<div class="headPicDescribe_down">
						<h2>{{headPic[picIndex].picTitle}}</h2>
						<p>{{headPic[picIndex].picBriefContex}}</p>
						<a href="/#/article">详情</a>
					</div>
				</div>
				<div class="myself">
					<img src="../assets/imgs/pic1.jpg" alt="myselfPic">
					<p id="name">王垚凯</p>
					<p id="des">Blog</p>
				</div>
				<recommendart></recommendart>
				
				<tagwall></tagwall>
			</div>
		</div>
		
	</div>

</template>

<script>
	import navheader from "../components/Header.vue"
	import navfooter from "../components/Footer.vue"
	import recommendart from "../components/recommendArticles.vue"
	import articlesign from "../components/articleSign.vue"
	import articlek from "../components/articles.vue"
	import tagwall from "../components/tagswall.vue"
	export default {
		name: "shouye",
		components: {
			navheader,
			navfooter,
			recommendart,
			articlesign,
			articlek,
			tagwall
		},
		//将数据封装成一个函数，避免数据的污染.如果是一个对象，那么这个data就是公用的
		data() {
			return {
				headPic: [],
				picIndex: 0,
				tags:[],
				timer:null
			}
		},
		computed: {
			picTop(){
				return this.headPic[this.picIndex].picTopNum;
			},
			headPicTitle(){
				return this.headPic[this.picIndex].picTitle;
			},
			headPicContext(){
				return this.headPic[this.picIndex].picBriefContex;
			}
			
		},
		mounted() {
			this.init();
		},
		created(){
			//先清除之前的timer
			clearInterval(this.timer);
			this.timer=null;
			//重启timer
			this.setTimer();
		},
		destroyed(){
			clearInterval(this.timer);
			this.timer=null;
		},
		methods: {
			init: function() {
				//获取切换图片的数据
				this.axios.get("/mock/headPic.json").then((response) => {
					this.headPic = response.data.data;
				})
			},
			switchPic:function(type){
				if(type=='up'){
					if(this.picIndex==0){
						this.picIndex=this.headPic.length-1;
					}else{
						this.picIndex--;
					}
				}else{
					if(this.picIndex==this.headPic.length-1){
						this.picIndex=0;
					}else{
						this.picIndex++;
					}
				}
				
			},
			//设置定时器
			setTimer(){
				this.timer=setInterval(()=>{
					this.picIndex++;
					if(this.picIndex==this.headPic.length){
						this.picIndex=0;
					}
				},2000)
			},
			//当鼠标放到图片上方的时候，停止计时器
			stopTimer(){
				clearInterval(this.timer);
			}
			
		}
	}
</script>
