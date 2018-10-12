$(function(){
	//控制列表
	$(".bannerLeft li").mouseenter(function(){
		console.log()
		$(".bannerRelative").show()
	})
	$(".bannerLeft li").mouseleave(function(){
		$(".bannerRelative").hide()
	})
	
})
