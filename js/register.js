$(function(){
	$(".SCcenter").click(function(){
		$(".change").toggle("block")
	})
	$(".change").on("click","li", function(){
		$(".SCcenter span").val($("li").val())
	})
	var reg = /^1(3|4|5|7|8)\d{9}$/
	var reg_mima =/^[a-z]$/
	$("#phone").keydown(function(){
		$(".phoneover").css("display","none")
	})
	$(".zc").click(function(){
		if(reg.test($("#phone").val())){
			$(".phoneover").css("display","block")
		}
	})
	$("#password2").blur(function(){
		if($("#password").val() != $("#password2").val()){
			$(".passover").css("display","block")
		}else{
			$(".passover").css("display","none")
		}
	})
})
