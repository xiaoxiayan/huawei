$(function(){
//	(function(){
//		if(localStorage.shopList != undefined){
//			$(".sc-empty-middle").hide()
//		}else{
//			$(".sc-empty-middle").show()
//			$(".showShop").hide()
//		}
//	}())

var shopList = localStorage.shopList || '[]';	
shopList = JSON.parse(shopList);
	if(shopList == undefined){
	$(".sc-empty-middle").show();
	}else{
	$(".sc-empty-middle").hide()
	var arr =[]
		for(var i = 0 ; i<shopList.length;i++){
			arr.push(`<div class="shop_box">
      					<div class="shop_details">
        				<a href="###"><img src="img/100_100_1537234343259mp.jpg" alt="" /></a>
        		<ul>
        			<li class="name">${shopList[i].name}</li>
        			<li>￥2799</li>
        			<li><div class="KZnum">
								<input type="text" name="" id="shu" value="${shopList[i].geshu}"/>
								<p>
									<a href="###" class="add">+</a>
									<a href="###" class="reduce">-</a>
								</p>
						</div></li>
        			<li class="Tmoney">￥ ${shopList[i].money}</li>
        			<li class="caoz">删除</li>
        		</ul>
        		</div>
        	</div>
			`)
		}
		arr = arr.join('');
		$(".tou").after(arr)
	}
//	添加商品
$(".shop_details ul").mouseenter(function(event){
	var target = $(event.target);
	$(this).addClass("index");
	$(".index a").on("click",function(event){
	var target2 = $(event.target);
	var num = Number($("#shu").val())
	if(target2.is(".add")){
		console.log(1)
	num++
	$("#shu").val(num)
	}
	if(target2.is(".reduce")){
		num--
	$("#shu").val(num)
	}
	$('.index .Tmoney').text(`￥ ${2799*Number($("#shu").val())}`)	
})
})
	
   	$(".shop_details ul").mouseleave(function(event){
   		$(this).removeClass("index");
})
   	
})
