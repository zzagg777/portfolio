$(document).ready(function(){
var win_Sct = $(window).scrollTop();
var win_W = $(window).width();
var s_Wd = $("div#sec_4_Wrap").width();
//var uiL = $(".uiux").length    
var num = 0;    
    $("#bgm")[0].play();
    $("#design").width(s_Wd * $(".uiux").length);
    $(".uiux").width(s_Wd);
    
    function gal(c){
        $("#design").stop(true,true).animate({"marginLeft":c * - s_Wd},300,function(){
            
        })//animate end
    }//callback end
    
    $("#left, #right").click(function(){
        if($(this).attr("id")=="right"){
            
            if(num<$(".uiux").length-1)num++;
            
        }else{
            
            if(num>0)num--;
            
        }//if else end
            gal(num);
        
    })//click end
    
    if(win_W>1023){  
        
        $(".portfolio figure>a").addClass("dn");
        $(".portfolio figure").addClass("on");            
        
    }else{
        
        $(".portfolio figure>a").removeClass("dn")
        $(".portfolio figure").removeClass("on")        
        
    }//if end
    
    $(window).resize(function(){
    s_Wd = $("#sec_4_Wrap").width();
    win_W = $(window).width();        
    
    
        
    $("#design").width(s_Wd * $(".uiux").length);
    $(".uiux").width(s_Wd)
        
    if(win_W>1023){  
        
        $(".portfolio figure>a").addClass("dn");
        $(".portfolio figure").addClass("on");    
        
    }else{
        
        $(".portfolio figure>a").removeClass("dn")
        $(".portfolio figure").removeClass("on")
        
        }//if else end
             
    })//resize end
    
})//function end