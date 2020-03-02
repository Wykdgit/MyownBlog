import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/pages/shouye.vue'
import Fenlei from '@/pages/fenlei.vue'
import SingleArticle from "@/pages/articledetail.vue"
import Comment from "@/pages/comment.vue"
import Guanyu from "@/pages/guanyu.vue"
//让路由生效
Vue.use(Router);
export default new Router({
	routes:[
		{
			path:'/',//当访问'/'时,加载什么组件
			name:'shouye',
			component:Shouye
		},
		{
			path:'/category',//当访问文章类别页面时
			name:'fenlei',
			component:Fenlei
		},
		{
			path:'/article',//访问单个文章时
			name:'singleArticle',
			component:SingleArticle
		},
		{
			path:'/leaveComment',//访问评论页面时
			name:'userComment',
			component:Comment
		},
		{
			path:'/guanyu',
			name:'guanyu',
			component:Guanyu
		}
	]
})

	
	
