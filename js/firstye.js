$(function(){
	//控制列表
	$(".bannerLeft li").mouseenter(function(){
		console.log()
		$(".bannerRelative").show()
	})
	$(".bannerLeft li").mouseleave(function(){
		$(".bannerRelative").hide()
	})
	var fade = (function(){
		$dotBox = $('.bannerdown');
		$imgBox = $('#box');
		var timer;
		return {
			init(){
				this.events();
				this.autoPlay(0);
			},
			showImg(index){
				$dotBox.children().removeClass();
				$dotBox.children().eq(index).addClass('current');
				$imgBox.children('li').eq(index).fadeIn().siblings().fadeOut();
			},
			autoPlay(index){
				var _this = this;
				clearInterval(timer);
				timer = setInterval(function(){
					index++;
					if (index==$('#box li').length) {
						index = 0;
					}
					_this.showImg(index);
				},2500);
			},
			events(){
				var _this = this;
				$dotBox.find('li').on('mouseenter',function(){
					clearInterval(timer);
					_this.showImg($(this).index());
//					_this.autoPlay($(this).index());
				});
				$("#banner").on('mouseenter',function(){
					clearInterval(timer);
				});
				$("#banner").on('mouseleave',function(){
						_this.autoPlay($(this).index());
				});
			}
		}
	})();
	fade.init()
//	控制精彩推荐
//$(".JPshow").mouseenter(function(event){
//	var width =event.target.parentElement.children.length;
//	var $long = width *217;
//	console.log($long)
//	var target = event.target.parentElement
//	console.log(target)
//	var _this = $(this)
//	$('.JPboxR').on("click" ,function(){
//		var left =Math.abs(parseInt($(".JPshow").css("left")))+1200
//		if(left<$long){
//			$(".JPshow").animate({left:'-=1200px'},'fast',function(){
//			if(left>$long-1200){
//			$(".JPshow").css("left",(-$long+1250))
//			$('.JPboxR').css("background","#03267A")
//			}	
//			});
//		}
//})
//	
//	
//})
//		var width = parseInt($(".box_size").css("width"))
//		console.log(width)
//	
//
//	$('.JPboxL').on("click",function(){
//		var left =parseInt($(".JPshow").css("left"))
//		if(left >= 0){
//			$(".JPshow").css({"left":0,"cursor":"default"})
//			return false
//		}
//		if(left<0){
//			$(".JPshow").animate({left:'+=1200px'},'fast');
//		}
//	})
//    自动小轮播
var fade2 = (function(){
		$dtBox = $('.LBT_dian');
		$igBox = $('.LBT_IMG');
		var timer;
		return {
			init(){
				this.events();
				this.autoPlay(0);
			},
			showImg(index){
				$dtBox.children().removeClass();
				$dtBox.children().eq(index).addClass('current');
				$igBox.children('li').eq(index).fadeIn().siblings().fadeOut();
			},
			autoPlay(index){
				var _this = this;
				clearInterval(timer);
				timer = setInterval(function(){
					index++;
					if (index==$('.LBT_dian li').length) {
						index = 0;
					}
					_this.showImg(index);
				},2500);
			},
			events(){
				var _this = this;
				$dtBox.find('li').on('mouseenter',function(){
					clearInterval(timer);
					_this.showImg($(this).index());
//					_this.autoPlay($(this).index());
				});
				$(".Lbbroung").on('mouseenter',function(){
					console.log(11)
					clearInterval(timer);
				});
				$(".Lbbroung").on('mouseleave',function(){
					console.log(112)
						_this.autoPlay($(this).index());
				});
			}
		}
	})();
	fade2.init()
})
