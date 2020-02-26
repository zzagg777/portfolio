       $(function(){
             var num = 0;
             var s_Wd = $("#shop_Mask").width();
                $("#shop_Wrap").width(s_Wd * $(".shop_B").length)
                $(".shop_B").width(s_Wd)
//                $("#shop_Wrap").css("margin-left",-s_Wd);
             function gal(c){
                 $("#shop_Wrap").stop(true,true).animate({"marginLeft":c * - s_Wd},300,function(){
                     
                 })
                 //.animate(속성값, 속도, 실행문)메소드는 속성값, 속도, 실행문 순으로 작성하면 된다.
             }
           $("#left, #right").click(function(){
               if($(this).attr("id")=="right"){
                   if(num<$("#shop_Wrap .shop_B").length-1)num++;
                  }else{
                  if(num>0)num--;
                  }
               gal(num);
           })//click end
           $(window).resize(function(){
         s_Wd = $("#shop_Mask").width();
                $("#shop_Wrap").width(s_Wd * $(".shop_B").length)
                $(".shop_B").width(s_Wd)
//                $("#shop_Wrap").css("margin-left",-s_Wd);
             
     
           })
         })//function end