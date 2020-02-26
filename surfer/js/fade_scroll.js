$(document).ready(function(){
    
        var w_sct = $(window).scrollTop()
        var win_W = $(window).width();
        var win_H = $(window).height();
        var fz = $("html").css("font-size");
        var section_H = $("#banner").height();
        var shop_H = $("#shop").height();
    
        var art_offset = $("article").offset().top /2
        var len1_offset = $("#learn1").offset().top - 500
        var len2_offset = $("#learn2").offset().top - 500
        var cb_offset = $("#club").offset().top - 500
        var cp_offset = $("#camp").offset().top - 500
        
        var art = $("article")
        var len1 = $("#learn1")
        var len2 = $("#learn2")
        var cb = $("#club")
        var cp = $("#camp")
    
    $(window).scroll(function(){
        w_sct = $(window).scrollTop()

        if(w_sct==0){
           $("header").removeClass("fx")
           $("#gnb").removeClass("gnbR")
            
           }else{
            $("header").addClass("fx")
            $("#gnb").addClass("gnbR")
           }
        
        function sec_Fade(a,b){
        
            if(w_sct > a){
                b.removeClass("fadeOut")
                b.addClass("fadeIn")
              

            }else{
                b.removeClass("fadeIn")
                b.addClass("fadeOut")
            }//if end
        }//callback end
       
        sec_Fade(art_offset,art);      
        sec_Fade(len1_offset,len1);
        sec_Fade(len2_offset,len2);
        sec_Fade(cb_offset,cb);
        sec_Fade(cp_offset,cp);
        
    })//scroll end
    
          $(window).resize(function(){
        $(window).scroll(function(){
       var w_sct = $(window).scrollTop()
        var art_offset = $("article").offset().top /2
        var len1_offset = $("#learn1").offset().top - 500
        var len2_offset = $("#learn2").offset().top - 500
        var cb_offset = $("#club").offset().top - 500
        var cp_offset = $("#camp").offset().top - 500
        function sec_Fade(a,b){
            if(w_sct >= a){
                b.removeClass("fadeOut")
                b.addClass("fadeIn")
            }else{
                b.removeClass("fadeIn")
                b.addClass("fadeOut")
            }//if end
        }//callback end
        sec_Fade(art_offset,art);      
        sec_Fade(len1_offset,len1);
        sec_Fade(len2_offset,len2);
        sec_Fade(cb_offset,cb);
        sec_Fade(cp_offset,cp);
            
    })//scroll end
    })//resize end
 
    })//function end


//        var w_sct = $(window).scrollTop()
//            if(w_sct >= art_offset){
//
//                $('article').removeClass("fadeOut")
//                $('article').addClass("fadeIn")
//
//            }else{
//                $('article').removeClass("fadeIn")
//                $('article').addClass("fadeOut")
//            }//if end
//        }//callback end
//

