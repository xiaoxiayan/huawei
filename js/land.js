$(function(){
//	左边点击
	$(".landOfZH").click(function(){
		$(".landingLeft").show();
		$(".landingRight").hide();
	})
//	右边点击扫码登录
	$(".landOfEWM").click(function(){
		$(".landingLeft").hide();
		$(".landingRight").show();
	})
	//更多点击
//	设置数值,1的时候盒子出现,2的时候盒隐藏
		var cout = 0;
	$(".more_click").click(function(){
		cout++

		$(".more_onclick").css("display","block");

	if(cout % 2 == 0){	
		$(".more_onclick").css("display","none");
	}
	})
	if(cout >3){
		cout = 0;
	}
	document.onclick=function(e){
		var e =e || event
		var target = e.target
	if(target.className != "more_click"){
		$(".more_onclick").css("display","none");
//		如果点击其他地方关闭盒子,cout 依然是1,所以把他归零,下次点击就可以直接出现
		cout = 0
	}	
	}
//	记住账号
var cc =0;
	$(".dagou").click(function(){
		cc++
		$(".dagou").removeClass("icon-yunxingouxuankuang-");
		$(".dagou").addClass("icon-gouxuankuangyidagou");
		$(".icon-gouxuankuangyidagou").css("color","#0077D2")
	if(cc%2 == 0){
		$(".dagou").removeClass("icon-gouxuankuangyidagou");
		$(".dagou").addClass("icon-yunxingouxuankuang-");
		$(".icon-yunxingouxuankuang-").css("color","black")
	}
	})
//输入框验证
	$("#username").blur(function(){
		var reg = /\w{4,50}/
			if(!reg.test($("#username").val())){
				console.log(1)
			$(".alert").text("华为帐号限制在4~50 个字符");
			$(".alert").css("color","red");
			
		}else{
				$(".alert").text(" ");
			}
	})
})
