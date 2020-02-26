$(function(){
    
    
       
    var b_Wd = $("div#banner_R").width();//맞추고 싶은 width 변수 받아오기, 전역변수
    var liLeng = $("ul#imgWrap").length
    
    var b_Atag = ""; //a 태그 생성을 위한 빈공간 변수
    var count = 0 //0부터 시작할 변수 하나 지정 , 데이터 순번, 버튼 활성화 순번으로 이용하기 위함,방향지정을 위함

//    alert(l_Wd)
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ사이즈 지정ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//  $("div#banner_R").width(b_Wd);
  
    $("#imgWrap li").width(b_Wd);//li width에 원하는 넓이 맞추기
    $("#imgWrap li").height(b_Wd/2);//li height에 원하는 높이
    $("#imgWrap").css("margin-left",-b_Wd)
    //롤링할때 어색하지 않도록 마진레프트를 -b_wd만큼 주어서 미리 한칸을 땡겨놓음, 고정 마진레프트로 -값이 되어있음
//    $("ul#imgWrap").width(b_Wd * liLeng)
    
    
    
    


//ㅡㅡㅡㅡㅡㅡㅡ똑딱이 생성 및 클래스추가ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    
   /* for(i=0; i<$("#dataList li").length; i++){
        b_Atag+="<a href=\"\"></a>"; //li 갯수-1만큼 에이태그가 생성됨
    }//for end
    
    $(".btns").html(b_Atag);// btns 안에 에이태그 생성되는 선언
    $(".btns a:eq(0)").addClass("active"); //0번째 a태그에 클래스추가
    */
    

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ슬라이딩ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//    롤링 콜백함수(매개변수-if문에서 사용,콜백함수내에서 변수를 사용하기위하여 변수명을 우선 선언)
    function b_Roll(dir,b_Wd){
        
        var b_Wd =$("div#banner_R").width(); //다시 사이즈
        
        $("ul#imgWrap").stop(true,true).animate({"marginLeft":dir * b_Wd + parseInt($("ul#imgWrap").css("margin-left"))},800,function(){
         if(dir==-1){//왼쪽으로
            $("ul#imgWrap li:first-child").appendTo("ul#imgWrap");
             
            }else{//오른쪽으로
            $("ul#imgWrap li:last-child").prependTo("ul#imgWrap");
                
            }//if end 끊기지 않도록 방향에 따라 계속 li를 앞뒤로 붙여주기위함
           $("ul#imgWrap").css("margin-left",-b_Wd);//animation이 끝나고 다시 ul의 마진레프트를 당겨 놓기 위함 
            
        });//animation end 실제 롤링효과
        
    };//b_roll end
    
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ자동 슬라이딩ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ   
    var autoRoll = setInterval(function(){//계속 작동되게 하기 위한 인터벌
    b_Roll(-1);//기본값에 따라 방향전환됨
        if(count<$("#dataList li").length-1){
        count++; // count < 5작을때  count는  0, 1, 2, 3, 4까지 증감됨
        }else{
        count=0; //count 초기화
        }//if end  btnAct 를 위한 if문
       /* btnAct(count); //count 값에 따른 배열순서에 클래스 추가 됨
        dataLoad(count,"last-child");    */
        pageNum(count);
    },3000) //autoRoll end 자동실행문 변수 선언, 선언만으로도 작동됨
    
    
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ똑딱이버튼ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ  
/*    function btnAct(a){//똑딱이에 클래스 추가됨
        $(".btnWrap a").removeClass("active")
        $(".btnWrap a:eq("+a+")").addClass("active")
        
    }
    
    function dataLoad(a,pos){
        $("ul#imgWrap li:"+pos+"").html($("#dataList li:eq("+a+")").html());
    }
    
    
    $(".btnWrap a").click(function(){
        $("#toggleBtn").addClass("chk")//똑딱이 누르면 재생버튼에 체크가되면서 변함
        toggleChk();
        count = $(this).index();
        btnAct(count);
        dataLoad(count,"last-child")
        autoRoll(-1);
        return false;//a태그 속성무시
    })//click end*/
    
    
    
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ재생버튼ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 
    function toggleChk(){//chk 클래스가 붙어있을때 자동슬라이딩 멈추고 아니면 계속 작동 
        if($("#toggleBtn").hasClass("chk")){
        clearInterval(autoRoll);
        }else{
        autoRoll = setInterval(function(){
        b_Roll(-1,b_Wd);
            if(count<$("#dataList li").length-1){
            count++;
            }else{
            count=0;
            }
       /*     btnAct(count)
            dataLoad(count,"last-child");*/
            pageNum(count);
        },3000)
        }//if end
    }
    
      $("#toggleBtn + label").click(function(){//재생버튼 눌렀을때 chk클래스가 토글됨
                    $("input#toggleBtn").toggleClass("chk")
                    toggleChk();
                });//click end
    
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ화살표버튼ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $(".btnL, .btnR").click(function(){// 화살표 눌렀을때 방향대로 작동하게됨
        $("#toggleBtn").addClass("chk")
        toggleChk();//이부분까지로 인해 화살표를 누르면 자동슬라이딩을 멈춤
        if($(this).hasClass("btnR")){
        b_Roll(-1);
        if(count<$("#dataList li").length-1){
            count++;
        }else{
            count=0;
        }//중첩if 똑딱이가 바뀌기위한 if문 end    
//        dataLoad(count,"last-child");
        }else{
        b_Roll(1);
        if(count>0){
        count--;
        }else{
        count=$("#dataList li").length-1;
        }
//        dataLoad(count,"first-child");
        }//if end
        /*btnAct(count);*/
        pageNum(count);
        return false;//화살표 에인태그 속성 무시
    })//click end
    
        pageNum(count);//콜백호출문
        
        $("#pageNum span:eq(1)").html($("ul#imgWrap li").length);//전체페이지수
        
        function pageNum(c){//페이지 수 
            $("ul#imgWrap li:eq("+c+")").index()
            $("#pageNum span:eq(0)").html(c+1);//현재페이지수

        }
    
 
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ리사이즈ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    
    $(window).resize(function(){
        clearInterval(autoRoll);//리사이즈 될때 멈추게하기 위해
        b_Wd = $("div#banner_R").width();//위에서 선언한 전역변수를 불러옴
//        $("div#banner_R").css('width',b_Wd);
        $("ul#imgWrap li").width(b_Wd);
        $("ul#imgWrap li").height(b_Wd/2);
        $("ul#imgWrap").css("margin-left",-b_Wd);
        
        autoRoll = setInterval(function(){//리사이즈후 자동슬라이딩
        b_Roll(-1,b_Wd);//왜 위디스값이?
            if(count<$("#dataList li").length-1){
            count++;
            }else{
            count=0;
            }
            pageNum(count);
          /*  btnAct(count);
            dataLoad(count,"last-child");*/
        },3000)
    })//resize end
     

})//function end


     






/*    $(function(){
        var aniW = $(window).width();//브라우저 위드스 픽셀 그대로를 받아옴 반응형에 좋을듯
       
            $("#imgWrap li").width(aniW);
            $("#imgWrap li").height(aniW/2.2);
            $("#imgWrap").css("margin-left",-aniW);
        
           
        
//이미지 갯수만큼 버튼 생성하기
        var atags = "";
//        var atags = "<a href=\"\"></a>"
        
        for(var i=0; i<$("#dataList li").length; i++){
            atags+="<a href=\"\"></a>";
//            atags;
            
        }//for end
        
            $(".btns").html(atags);
            $(".btns a:eq(0)").addClass("active");
        
         var count = 0; //데이터 순번과 버튼 활성화 순번으로 이용
//방향지정 할 수 있는 슬라이딩
        
        function aniRoll(dir,aniW){ 
            
//변수가 지정되있더라도 콜백함수안에서는 매개변수에 걸어주어야 한다.
            
             var aniW = $(window).width();
            
//클릭할 때 중요한 것 $("#imgWrap").stop(true,true)
//애니메이션이 중요한 것 $("#imgWrap:not(:animated)")
            
            $("#imgWrap").stop(true,true).animate({"marginLeft":
                dir * aniW + parseInt($("#imgWrap").css("margin-left"))
                },800,function(){
                if(dir==-1){//왼쪽으로
                    $("#imgWrap li:first-child").appendTo("#imgWrap")
                    
                   }else{//오른쪽으로
                   $("#imgWrap li:last-child").prependTo("#imgWrap")
                       
                   }//if end
                 $("#imgWrap").css("margin-left",-aniW);
            });//animated end
            
        };//callback end
//데이터를 초기화하고 넣는 함수
// datalist 의 c순번인 li의 안의 태그를 imgWrap의 pos li에게 초기화하고 넣어라
        function dataLoad(c,pos){
            $("#imgWrap li:"+pos+"").html($("#dataList li:eq("+c+")").html());
        }
//        aniRoll(1);
//버튼활성화 함수
        function btnAct(c){
            $(".btnWrap a").removeClass("active")
            $(".btnWrap a:eq("+c+")").addClass("active")
        }
            
       
       var rollAuto = setInterval(function(){
            aniRoll(-1)
            if(count<$("#dataList li").length-1)count++; else count=0;//if end
            btnAct(count);
            dataLoad(count,"last-child");
        },2000)
        
            function toggleChk(){
                if($("#toggleBtn").hasClass("chk")){
                   clearInterval(rollAuto);
                   }else{
                       
                   rollAuto = setInterval(function(){
            aniRoll(-1)
            if(count<$("#dataList li").length-1)count++; else count=0;//if end
            btnAct(count);
            dataLoad(count,"last-child");
        },2000)
                   }//if end
                }
                $("#toggleBtn + label").click(function(){
                    $("input#toggleBtn").toggleClass("chk")
                    toggleChk();
                });//click end
        
                $(".btnL, .btnR").click(function(){
                    $("#toggleBtn").addClass("chk")
//                    $("#toggleBtn").addClass("chk")
                    
                    toggleChk();
                    if($(this).hasClass("btnR")){
                        aniRoll(-1);
                        if(count<$("#dataList li").length-1) count++; else count=0;
                        dataLoad(count,"last-child");
                    }else{
                        aniRoll(1);
                        if(count>0) count--; else count=$("#dataList li").length-1;
                        dataLoad(count,"first-child");
                    }
                    btnAct(count);
                    return false; //a태그 속성무시
                })
        
                $(".btnWrap a").click(function(){
                    $("#toggleBtn").addClass("chk")
                    toggleChk();
                    count = $(this).index();
                    btnAct(count);
                    dataLoad(count,"last-child")
                    aniRoll(-1);
                    return false;
                })

         $(window).resize(function(){
             clearInterval(rollAuto)
            aniW = $(window).width(); //aniW는 전역변수로 사용 할 수 있도록 var를 생략해야한다.
            $("#imgWrap li").width(aniW);
            $("#imgWrap li").height(aniW/2.2);
            $("#imgWrap").css("margin-left",-aniW);
             rollAuto = setInterval(function(){
            aniRoll(-1,aniW)
            if(count<$("#dataList li").length-1)count++; else count=0;//if end
            btnAct(count);
            dataLoad(count,"last-child");
        },2000)
            });//resize end
    })//function end*/