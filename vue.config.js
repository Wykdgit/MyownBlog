
//注意,这个配置文件必须配置在freemall 下面,而不是在src下面
module.exports={
	publicPath:'',//静态路径
	devServer:{
		host:'localhost',
		port:9091,
		proxy:{
			'/mock':{
				target:'http://localhost:9091',
				ws:false,
				changeOrigion:false
				
			}
		}
	}
	
	
}