$(document).ready(function(){
 
$("audio#wave1")[0].volume = 0.3
$("audio#wave2")[0].volume = 0.4
    
$("nav ul li").click(function(){
      $("audio#wave2")[0].play();
})
    
})//function end  
    


