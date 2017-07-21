$(document).ready(function(){

	/*主体内容部分车型选区*/
	$('.index_main_car_type').on('click',function() {
		$('.index_main_car_list').show(100);
	});
	/*按下任何地方隐藏*/
	$(document).on('click',function(){
		$('.index_main_car_list').hide();
	});

	/*主体内容部分品牌更多显示*/
	var timeout = '';	
	$('.index_main_cate2').mouseover(function(){
		timeout=setTimeout(function() {
			$('.index_main_csign_more').show();
		}, 400);
	});
	$('.index_main_cate2').mouseout(function(){
		clearTimeout(timeout);   //鼠标不悬停,就清除  
	});
	$(".index_main_csign_xting_jingguo").hover(function(){
		$(".index_main_csign_more").show();//从右边更过列别到左边时，经过这个右边还显示 
	},function(){
	   	  
	}); 
	$(".index_main_cate2").hover(function(){
		//移过不显示，上面显示
	},function(){
	    $(".index_main_csign_more").hide();
	    $(".index_main_csign_xting_jingguo").hide();  
  	});
	$(".index_main_csign_more").hover(function(){
	    $(".index_main_csign_more").show();
	    $(".index_main_csign_xting_jingguo").show();//从右边更过列别到左边时，经过这个右边还显示
	},function(){
        $(".index_main_csign_more").hide();
		$(".index_main_csign_xting_jingguo").hide(); //可以设置为离开右边，进左边它不隐藏                            
    });





});