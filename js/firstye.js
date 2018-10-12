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
	
//	控制精彩推荐


		var width = parseInt($(".JPshow").css("width"))
	$('.JPboxR').on("click",function(){
		var left =Math.abs(parseInt($(".JPshow").css("left")))+1200
		if(left<width){
			
			$(".JPshow").animate({left:'-=1200px'},'slow');
		}
			if(left>width){
				$(".JPshow").css("left",(-width))
			}
})
	$('.JPboxL').on("click",function(){
		$(".JPshow").animate({left:'+=1200px'},'slow');
		if(parseInt($(".JPshow").css("left"))<=0){
			
		}
	
})
})
