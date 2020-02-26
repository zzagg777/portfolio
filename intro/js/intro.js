$(document).ready(function(){
    var m=0;
//    $("#main_Wrap").hide();
//    $("#main_Wrap").css("display","none");
    $("#btn button:eq(1)").click(function(){
           alert("why not?");
    })//click end
    $("#btn button:first-child").click(function(){
        
        $("#door").addClass("dn");
        $("#word_Wrap").addClass("db");
        
        if($("#word_Wrap").hasClass("db")){
            
            $("#word_1").addClass("show_");
            $("#word_2_L").addClass("move_T");
            $("#word_2_R").addClass("move_B");
            $("#word_3_L").addClass("move_LB");
            $("#word_3_R").addClass("move_RB");
            $("#word_4_L").addClass("move_L");
            $("#word_4_R").addClass("move_R");
            $("#img_4").addClass("show_");
            $("#word_5").addClass("show_"); 
            
        }else{}//if end

        
        
            setTimeout(function(){
                
//              $("#main_Wrap").trigger("click");
//              $("#main_Wrap").get(0).click();
                $("#intro_Wrap").fadeOut("slow");
                $("header").removeClass("dn");
                $("body").removeClass("ovh100");
//                $("#main_Wrap").show("slow");
//                $("#main_Wrap").css("display","block");
//               $("#main_Wrap").removeClass("op0");
                $("#main_Wrap").css({transform:"translateY(0vh)"},"slow")
                $("#main_Wrap").css({opacity:"1"})
            },12000)
    })//click end
//            if($("body").removeClass("ovh")){

//            }

    
    
})//function end