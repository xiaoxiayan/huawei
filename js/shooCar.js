$(function(){
//	(function(){
//		if(localStorage.shopList != undefined){
//			$(".sc-empty-middle").hide()
//		}else{
//			$(".sc-empty-middle").show()
//			$(".showShop").hide()
//		}
//	}())
	if(localStorage.shopList == undefined){
	$(".sc-empty-middle").show();
	$(".showShop").hide();
	}else{
	var shopList = localStorage.shopList || '[]';	
	shopList = JSON.parse(shopList);
	$(".sc-empty-middle").hide();
	$(".showShop").show();
	var arr =[]
		for(var i = 0 ; i<shopList.length;i++){
			arr.push(`<div class="shop_box">
      					<div class="shop_details">
        				<a href="###"><img src="img/100_100_1537234343259mp.jpg" alt="" /></a>
        		<ul class="uu">
        			<li class="name">${shopList[i].name}</li>
        			<li>￥2799</li>
        			<li><div class="KZnum">
								<input type="text" name="" class="shu" value="${shopList[i].geshu}"/>
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
   	 $(".KZnum a").on("click",function(event){
//	var target = $(event.target);
	var $shu  = $(this).closest('.KZnum').find('.shu');
//	var num =Number($(this).closest('.KZnum').find('.shu').val());
	var num = Number($shu.val())
	if($(this).is(".add")){
	num++
	}
	if(num > 1){
	if($(this).is(".reduce")){
	num--
	}
	}else{
		$(this).css('cursor','default');
	}
	$shu.val(num)
	$(this).closest('.uu').find('.Tmoney').text(`￥ ${2799*num}`);
})
   	$(".shu").blur(function(){
	var num =Number($(this).closest('.KZnum').find('.shu').val());
   	$(this).closest('.uu').find('.Tmoney').text(`￥ ${2799*num}`);
   	})
	$(".caoz").click(function(){
		for(var i = 0 ; i<shopList.length;i++){
			if($(this).closest('.uu').find('.name').text() == shopList[i].name){
				 var arr = [];
                  		arr = JSON.parse(localStorage.shopList);
                       arr.splice(i,1);
                      localStorage.shopList = JSON.stringify(arr);
                      console.log(localStorage.shopList)
                      break;
			}
			
		}
		
		$(this).closest('.shop_box').remove();
	})
})
