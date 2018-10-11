$(function() {
	//	左边点击
	$(".landOfZH").click(function() {
		$(".landingLeft").show();
		$(".landingRight").hide();
	})
	//	右边点击扫码登录
	$(".landOfEWM").click(function() {
		$(".landingLeft").hide();
		$(".landingRight").show();
	})
	//更多点击
	//	设置数值,1的时候盒子出现,2的时候盒隐藏
	var cout = 0;
	$(".more_click").click(function() {
		cout++
		$(".more_onclick").css("display", "block");
		if(cout % 2 == 0) {
			$(".more_onclick").css("display", "none");
		}
	})
	if(cout > 3) {
		cout = 0;
	}
	document.onclick = function(e) {
		var e = e || event
		var target = e.target
		if(target.className != "more_click") {
			$(".more_onclick").css("display", "none");
			//		如果点击其他地方关闭盒子,cout 依然是1,所以把他归零,下次点击就可以直接出现
			cout = 0
		}
	}
	//	记住账号
	var cc = 0;
	$(".alert").css("color", "red");
	$(".dagou").click(function() {
		cc++
		$(".dagou").removeClass("icon-yunxingouxuankuang-");
		$(".dagou").addClass("icon-gouxuankuangyidagou");
		$(".icon-gouxuankuangyidagou").css("color", "#0077D2")
		if(cc % 2 == 0) {
			$(".dagou").removeClass("icon-gouxuankuangyidagou");
			$(".dagou").addClass("icon-yunxingouxuankuang-");
			$(".icon-yunxingouxuankuang-").css("color", "black")
		}
	})
	//输入账号框验证
	var reg = /^\w{4,50}$/
	$("#username").blur(function() {
		if($("#username").val() == '') {
			$(".alert").text(" ");
		} else if(!reg.test($("#username").val())) {
			$(".alert").text("华为帐号限制在4~50 个字符");

		} else {
			$(".alert").text(" ");
		}
	})
	$("#username").keydown(function() {
		$(".alert").text(" ");
	})
	//登录
	$("#submit").click(function(){
		if($("#username").val() == '') {
			$(".alert").text("请输入您的账号");
			$("form").submit(function() {
				return false;
			})
		}
	if($(".alert").text() != '') {
			$("form").submit(function() {
				return false;
			})
		} 
	})
	//扫码登录
	$("#img_box").mouseenter(function(){
		$("#img_box").css({"left":30,"transition":"0.5s"})
		$(".noticebox").css({"opacity":1,"transition":"0.5s"})
	})
	$(".EWM").mouseleave(function(){
		$("#img_box").css({"left":100,"transition":"0.5s"})
		$(".noticebox").css({"opacity":0,"transition":"0.5s"})
	})
})
	var username = document.getElementById("username")
	var password =document.getElementById("password")
	var sumbit = document.getElementById("submit")
	var alert = document.querySelector(".alert");
	var reg = /^\w{4,50}$/
	sumbit.onclick = function(){
		if(reg.test(username.value)){
			var params = {
                    method:'post',
                    data: {
                        username: username.value,
                        password:password.value
                    },
                    success:function(data) {
                    	console.log(data)
                       data = JSON.parse(data);
                       loginSuccess(data);	
                    }
                }
			sendAjax('http://localhost:2048/huawei/php/login.php',params)
			var loginSuccess= function(data) {
            if(data.code == 200) {
            	console.log(1)
                document.cookie = "user-id=" + data.data.id;
                document.cookie = "token=" + data.data.token;
                localStorage.userImg = data.data.ataver;
                location.href = 'http://localhost:2048/huawei/firstye.html';
            } else {
               alert.innerHTML ="账号或者密码错误"
			}
            }
		}
		}
	