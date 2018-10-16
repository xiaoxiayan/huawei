//放大镜
var glass = (function () {
    return {
        // x为放大倍数
        init: function (x) {
            this.Multiple = x || 2;
            // 获取最大的盒子
            this.$box = document.querySelector('.magnifying');
            // 获取展示图片的盒子
            this.$showImage = this.$box.querySelector('.BIG');
            // 获取放大图片的盒子
            this.$showBigImage = this.$box.querySelector('.MAX');
            // 获取小图片的盒子
            this.$ulbox = this.$box.querySelector('.img-box');
            // 获取每一张图片的li集合
            this.$liAll = this.$ulbox.children;
            // 获取移动的小黑块(放大镜)
            this.$filter = this.$showImage.querySelector('.fig');
            // 给每一li添加索引， 方便获取
            for (var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].index = i;
            }
            this.event();
        },
        event: function () {
            var _this = this;
            // 利用事件委托，给每一个li添加点击事件
            this.$ulbox.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                console.log(target.nodeName);
                // 点击时，真正触发的为图片。
                if (target.nodeName === 'IMG') {
                    // 获取li的索引 =》target.parentNode.index
                    // 点击触发更换图片
                    _this.showImage(target.parentNode.index)
                }
                }
            // 这里用onmouseenter： 子元素不触发事件
            this.$showImage.onmouseenter = function () {
                // 放大镜显示
                _this.$filter.style.display = 'block';
                // 展示大图片显示
                _this.$showBigImage.style.display = 'block';
                // 如果展示盒子的尺寸不变， 需要修改放大镜的尺寸，和图片的尺寸，保持等比关系
                // 获取展示盒子的宽度高度
                _this.bigWidth = _this.$showBigImage.clientWidth;
                _this.bigHeight = _this.$showBigImage.clientHeight;
                // 设置小盒子宽高
                _this.$filter.style.width = _this.bigWidth / _this.Multiple + 'px';
                _this.$filter.style.height = _this.bigHeight / _this.Multiple + 'px';
                // 设置大图片宽度
                _this.$showBigImage.querySelector('img').style.width = this.offsetWidth * _this.Multiple + 'px';
            }
            this.$showImage.onmouseleave = function () {
                _this.$filter.style.display = 'none';
                _this.$showBigImage.style.display = 'none';
            }
            this.$showImage.onmousemove = function (ev) {
                ev = ev || window.event;
                // 计算小方块定点坐标
                var x = ev.clientX - this.offsetLeft - _this.$filter.offsetWidth ;
                var y = ev.clientY - this.offsetTop - _this.$filter.offsetHeight ;
                // 获取小方块移动的最大坐标
                var maxL = this.clientWidth - _this.$filter.offsetWidth,
                    maxT = this.clientHeight - _this.$filter.offsetHeight;
                if (x >= maxL) {
                    x = maxL
                } else if (x <= 0) {
                    x = 0;
                }
                if (y >= maxT) {
                    y = maxT;
                } else if (y <= 0) {
                    y = 0;
                }
                _this.$filter.style.left = x + 'px';
                _this.$filter.style.top = y + 'px';

                var img = _this.$showBigImage.querySelector('img');
                img.style.left = -_this.Multiple * x + 'px';
                img.style.top = -_this.Multiple * y + 'px';
            }
        },
        showImage: function (index) {
            console.log(index);
            for (var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].className = ''
            }
            this.$liAll[index].className = 'active';
            // 修改对应的图片地址
            var src = this.$liAll[index].querySelector('img').getAttribute('src');
            this.$showImage.querySelector('img').src = src.replace('78_78', '428_428');
            this.$showBigImage.querySelector('img').src = src.replace('78_78', '800_800');
            console.log(src);
        }
    }
}())

$(function(){
//	鼠标滑过导航,出现盒子推荐,
$(".headerCenter a").mouseenter(function(event){
		$("#showOfheader").slideDown("fast")
})
$(".headerCenter").mouseleave(function(){
	
	$("#showOfheader").slideUp("fast")
})
var txt = ''
$(".XZ p").click(function(event){
	var target = $(event.target);
	$(this).parent().find("p").removeClass("CL");
	$(this).addClass("CL");
	var s1 =$(".chooselog .CL").text();
	var s2 =$(".chooseColor .CL").text();
	var s3 =$(".chooseTC .CL").text()
	$(".chooseshop span").text(`${s2} / ${s1} / ${s3}`)
	$(".headline h2").text(`荣耀Note10 ${s1} ${s2} AMOLED全面屏手机 AI智能 GT游戏加速 双卡双待 长续航`)
})
$(".addShopCar a").click(function(event){
	var target = $(event.target);
	var num = Number($("#shu").val())
	if(target.is(".add")){
	num++
	$("#shu").val(num)
	}
	if(target.is(".reduce")){
		num--
	$("#shu").val(num)
	}
})
var shopList = localStorage.shopList || '[]';
shopList = JSON.parse(shopList);
$(".adds").click(function(){
//购物车功能
var add = true;	
	var obj ={
		Cp:($(".chooseshop span").text()),
		geshu:Number($("#shu").val()),
	}
	for(var i = 0;i<shopList.length;i++){
		if(obj.Cp == shopList[i].Cp){
			add = false
			shopList[i].geshu += obj.geshu;
			break;
		}
	}
	if(add){
		shopList.push(obj);
	}
	localStorage.shopList = JSON.stringify(shopList);
	console.log(localStorage.shopList);
	$(".minbox p").text(`${$(".headline h2").text()}成功加入购物车`)
	$(".successAdd").show()
	$(".minbox").show()
})
$(".close,.tomore,.toshopCar").click(function(){
	$(".successAdd").hide()
	$(".minbox").hide()
})
})
