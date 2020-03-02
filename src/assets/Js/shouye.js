
//实现动态切换图片的功能
//window.onload 是保证在所有的元素加载完成之后，才进行函数的执行

//注意这里的window.onload 
//当页面加载完成之后，执行函数 写法如下
//window.onload=function(){fun1(),fun2()}
window.onload=function(){ 
    //1.Get the Elements of the HTLM page
    var oDiv=document.getElementById("pic1");
    var oimg=oDiv.getElementsByTagName("img")[0];
    var ospan=oDiv.getElementsByTagName("span")[0];//1/4 表示第一个数字
    var otxt=oDiv.getElementsByTagName("p")[0];//图片里面的文字面描述
	
	var imgDiv=document.getElementById("pic1Right");
	var imgTitle=imgDiv.getElementsByTagName("h2")[0];
	var imgContent=imgDiv.getElementsByTagName("p")[0];
	var imgHref=imgDiv.getElementsByTagName("a")[0];
	
	

    //2.store the url and names of data
    var urls=["../../public/imgs/pic1.jpg","./../public/imgs/pic2.jpg","./../public/imgs/pic3.jpg","./../public/imgs/pic4.jpg"];
    var names=["图片1","图片2","图片3","图片4"];
    var indexx=0;//这个变量决定了img 元素这个位置上哪张照片来展示
	var imgTitles=["标题1","标题2","标题3","标题4"];
    var imgContents=["图片1的描述","图片2的描述","图片3的描述","图片4的描述"];
	var imgLinks=["link1","link2","link3","link4"];


    var timer=null;//定时器

    function autoPlay(){
        timer=setInterval(function(){//将函数存储在变量中，就可以通过变量来调用函数
            indexx++;
            indexx%=urls.length;
            resetImg();
        },2000);
    }
    //执行函数
    autoPlay();//这个函数写好之后也是必须要执行，为什么？

    //注意点击事件必须紧跟在autoplay()的后面。为什么？？？？
    oDiv.onmouseover=function(){//当鼠标悬浮在div的区域内时，停止轮播，让计时器停掉
        clearInterval(timer);
    }
    oDiv.onmouseout=function(){autoPlay()};//事件调用不用加(),为什么上边的就加了???
    function resetImg(){
        oimg.src=urls[indexx];
        ospan.innerHTML=1+indexx+"/"+urls.length;//注意对于标签内没有属性的,插值要用innerHTML!
        otxt.innerHTML=names[indexx];
		imgTitle.innerHTML=imgTitles[indexx];
		imgContent.innerHTML=imgContents[indexx];
		imgHref.innerHTML=imgLinks[indexx];
		
    }

    resetImg();


}
