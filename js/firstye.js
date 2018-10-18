//控制列表
$(".bannerLeft li").mouseenter(function() {
	$(".bannerRelative").show()
})
$(".bannerLeft li").mouseleave(function() {
	$(".bannerRelative").hide()
})
//	轮播大
var fade = (function() {
	$dotBox = $('.bannerdown');
	$imgBox = $('#box');
	var timer;
	return {
		init() {
			this.events();
			this.autoPlay(0);
		},
		showImg(index) {
			$dotBox.children().removeClass();
			$dotBox.children().eq(index).addClass('current');
			$imgBox.children('li').eq(index).fadeIn().siblings().fadeOut();
		},
		autoPlay(index) {
			var _this = this;
			clearInterval(timer);
			timer = setInterval(function() {
				index++;
				if(index == $('#box li').length) {
					index = 0;
				}
				_this.showImg(index);
			}, 2500);
		},
		events() {
			var _this = this;
			$dotBox.find('li').on('mouseenter', function() {
				clearInterval(timer);
				_this.showImg($(this).index());
				//					_this.autoPlay($(this).index());
			});
			$("#banner").on('mouseenter', function() {
				clearInterval(timer);
			});
			$("#banner").on('mouseleave', function() {
				_this.autoPlay($(this).index());
			});
		}
	}
}())
fade.init()
//	控制精彩推荐
//$(".JPbox").mouseenter(function() {
//	var width = $(this).find('li').length;
//	var $MAX = (width * 217);
//	console.log(width)
//	$(this).children('.JPboxR').click(function() {
//		console.log($(this).closest(".JPbox").find('.JPshow'))
//		//		设置初始位置值
//		var le = Math.abs(parseInt($(this).closest(".JPbox").find('.JPshow').css("left"))) + 1200;
//		//		设置可移动距离
//		var maxMove = $MAX - le;
//		if(maxMove > 1200) {
//			$(this).closest(".JPbox").find('.JPshow').animate({
//				left: '-=1200'
//			}, 'fast')
//		}
//		if(maxMove < 1200 && maxMove != 0) {
//			console.log(22)
//			$(this).closest(".JPbox").find('.JPshow').animate({
//				left: `-=${maxMove}px`
//			}, 'fast', function() {
//				$(this).css('cursor', 'not-allowed')
//			})
//		}
//	})
//	$(this).children('.JPboxL').click(function() {
//		//			可移动的值是移动的left
//		var lee = Math.abs(parseInt($(this).closest(".JPbox").find('.JPshow').css("left")));
//		if(lee == 0) {
//			$(this).css('cursor', 'not-allowed');
//		}
//		if(lee >= 1200) {
//		$(this).closest(".JPbox").find('.JPshow').animate({
//				left: '+=1200'
//			}, 'fast')
//		}
//		if(lee<1200){
//				$(this).closest(".JPbox").find('.JPshow').animate({
//				left: `+=${lee}px`
//			}, 'fast', function() {
//				$(this).css('cursor', 'not-allowed')
//			})
//		}
//
//	})
//
//})
//swipt

//    自动小轮播
var fade2 = (function() {
	$dtBox = $('.LBT_dian');
	$igBox = $('.LBT_IMG');
	var timer;
	return {
		init() {
			this.events();
			this.autoPlay(0);
		},
		showImg(index) {
			$dtBox.children().removeClass();
			$dtBox.children().eq(index).addClass('current');
			$igBox.children('li').eq(index).fadeIn().siblings().fadeOut();
		},
		autoPlay(index) {
			var _this = this;
			clearInterval(timer);
			timer = setInterval(function() {
				index++;
				if(index == $('.LBT_dian li').length) {
					index = 0;
				}
				_this.showImg(index);
			}, 2500);
		},
		events() {
			var _this = this;
			$dtBox.find('li').on('mouseenter', function() {
				clearInterval(timer);
				_this.showImg($(this).index());
				//					_this.autoPlay($(this).index());
			});
			$(".Lbbroung").on('mouseenter', function() {
				clearInterval(timer);
			});
			$(".Lbbroung").on('mouseleave', function() {
				_this.autoPlay($(this).index());
			});
		}
	}
}())
fade2.init()