import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from './router'

//使用css的方法,是在main.js里面将css文件导入进来
import './assets/css/shouye.css'

//导入axios和 vue-axios 是为了将axios和 vue关联起来,可以更简单地发请求
//为什么在这里配置一下Vue.axios 就可以在其他地方不用导入axios也可以用 this.axios.get() 发请求????
Vue.use(VueAxios,axios);



Vue.config.productionTip = false


//main.js 是整个项目的入口函数
// render 函数 render(h){ return createElement(App)} 返回虚拟的Vnode,得到之后,再将之作为真实的dom节点挂载到DOM上
new Vue({
	router:Router,
	render: h => h(App),
}).$mount('#app')
