/* 定义加载头部与尾部的模块 */
define(["jquery", "cookie"], function($){
	$(function(){
		/* 加载头部 */
		$("header").load("/html/include/header.html", function(){
			/* 为搜索框绑定键盘弹起事件 */
			 // $(".search .word").on("keyup", function(){
			 // 	let _search = $(this).val(),
			 // 		url = `https://suggest.taobao.com/sug?code=utf-8&q=${_search}&callback=?`;
			 // 	$.getJSON(url, function(data){
			 // 		console.log(data);
			 // 		var html = "";
			 // 		data.result.forEach(function(curr){
			 // 			html += `<div>${curr[0]}</div>`;0
			 // 		});
			 // 		$(".suggest").html(html);
			 // 	});
			 // })
			 // /* 判断 cookie 中是否有用户登录数据的保存 */
			 // $.cookie.json = true;
			 // // $.cookie("loginUser", "xiaoming", {path:"/"});
			 // let user = $.cookie("loginUser");
			 // if (user) {
			 // 	$(".login_register").html(`
			 // 		<a href="#">欢迎您：${user}</a>
			 // 		<a href="#">退出</a>
			 // 		`);
			 // }

			 // 模态框
			$(".login , .register").on("click",function(){
				$("#allScreen").fadeIn(1000);
				$("#allScreen").css({"display":"block","opacity":.9});
				$("#loginRegister").css({"opacity":1,"background":"white"});
				$("#loginRegister").stop().slideDown(1000);
				// console.log("hheh");  
    
		});
				
			$(".register").on("click",function() {
				$(".loginOrRegister").css({"display":"none"});
				$(".threeParties").css({"display":"none"});
				$(".register_box").css({"display":"block"});
			})
			$(".login").on("click",function() {
				$(".loginOrRegister").css({"display":"block"});
				$(".threeParties").css({"display":"block"});
				$(".register_box").css({"display":"none"});
			})


		$("body").on("keydown",function(event){
			var key = event.keyCode;
			// console.log("key")
			if(key == 27){
				$("#allScreen").toggle(1000)
			}
		})	
			$(document).ready(function(){
			$("#register").on("click",function(){
				$(".loginOrRegister").slideUp(500);
				$(".threeParties").slideUp(1000);
				$(".register_box").slideDown(1000);
			});
			$("#login").on("click",function(){
				$(".loginOrRegister").slideDown(500);
				$(".threeParties").slideDown(1000);
				$(".register_box").slideUp(1000);
			})

			$(".close_window").on("click",function(){
				$("#allScreen").slideUp(300)
			});

			var screenHeight = $(window).height() + "px",
				screenWidth = $(document).width() + "px";
			$("#allScreen").css({"height":screenHeight,"width":screenWidth});
		})
			
			// cookie cookie
			var username,password,password2 ,user_info;
		 $(".register_user").on("blur", function(){
		 		 // var username = $(".register_user").val();
		 // console.log(username);
		  // $.cookie('user', username, { expires: 7 });  
		  // aa = $.cookie('user');
		    username = $(".register_user").val(); 
			if(username.length!=0){ 
			var reg=/^[a-zA-Z0-9]+$/; 
			if(reg.test(username) && username.length >= 4){ 
			$(".register_prompt").html("用户名可用");
		 	$(".register_prompt").css("color","blue");	
			}else if(!reg.test(username)){
			$(".register_prompt").html("对不起，您输入的英文字母类型格式不正确!");
			} 
			else {
				$(".register_prompt").html("用户名不可用");
		 	$(".register_prompt").css("color","red");
			}
			} 
		 });
		$(".register_pass").on("blur", function(){
		 	password = $(".register_pass").val();
		 	// $.cookie('pass', password, { expires: 7 });  
		 	//  bb = $.cookie("pass")
		 // console.log(bb);
		 if(password.length >=6 && password.length <=16){
		 	$(".pass_prompt").html("密码格式正确");
		 	$(".pass_prompt").css("color","blue");
		 }else{
		 	$(".pass_prompt").html("密码格式错误");
		 	$(".pass_prompt").css("color","red");
		 }
		 });

		 $(".register_pass2").on("blur", function(){
		 	password2 = $(".register_pass2").val();
		 	// $.cookie('pass2', password2, { expires: 7 });  
		 	//  cc = $.cookie("pass2")
		 // console.log(cc);
		 if( password2 === password && password != null){
		 	$(".pass2_prompt").html("密码一致！");
		 	$(".pass2_prompt").css("color","blue");
		 }else{
		 	$(".pass2_prompt").html("密码不一致,请检查！");
		 	$(".pass2_prompt").css("color","red");
		 }

		 });

		 $(".register_submit").on("click",function(){
		 	if(username != null && password != null && password2 != null && password === password2 ){
		 				alert("注册成功!")
		 		user_info = {
		 		username : username,
		 		password : password,
		 		amount : 1
		 	}

		var coo =  $.cookie('users',user_info,{expires:100 , path:"/"});
		 			}
				


		 	else{
		 		alert("注册失败!")
		 	} 	
		 });
		 
		 $(".register_submit , .submit").on("click",function(e){
		 	var event = event || window.event;
		 		event.preventDefault();

		 })

		 	var tmp = $.cookie("user_info")
		 	// console.log(tmp)
		 $(".submit").on("click",function(){
		 	// for(var  i in user_info){
		 	// 	// username = user_info[i]
		 	// }
		 	// console.log(tmp)
		 	var user = $(".number").val(),
		 		pass = $(".password").val();
		 	if(user == user_info.username && pass == user_info.password){
		 		alert("成功登陆！");
		 		$(".loginRegister").html(`
			  		<a href="#">欢迎您：${user}</a>
			  		<a href="#">退出</a>
			  		`);
		 		 $.cookie.json = true;
		 	}else{
		 		alert("登陆失败！")
		 	}

		 })





		/* 加载尾部 */
		$("footer").load("/html/include/footer.html");
	});
});
});
