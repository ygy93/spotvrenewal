// 1.4초 후 SPOTV 로고 사라짐
setTimeout(function(){
    $(".intro").addClass("off");
},1400);

// 흰색 배경 위로 올리기
$(".slide").delay(1500).slideUp(500);


// 마우스 올리면 배경 색상 변환
$(".select").on("mouseover focusin", function(){
    $(this).addClass("on");
});

$(".select").on("mouseleave focusout", function(){
    $(this).removeClass("on");
});


// 하단에 위치한 이용약관 클릭 시 이용약관창이 뜸
$(".using").click(function(){
    $("#term").css({"visibility":"visible"});
});


// 이용약관창 닫기
$(".btnx").click(function(){
    $("#term").css({"visibility":"hidden"});
});


// 비밀번호 눈동자이미지 클릭 시 이미지 변환
$(".form .pw img").click(function(){
    $(".form .pw img:nth-of-type(2)").toggleClass("on");
});


// 아이디, 비밀번호칸 정보입력 시 버튼 활성화 ( ----------미완성---------- )
$("input").on("input", function(){
    var user_id = $(".user_id").val();
    var user_pw = $(".user_pw").val();

    if ( user_id == "" || user_pw == "" ){
        $(".loginbtn input").css({"opacity":"1"});
    }
});


// 로그인 실패창 닫기
$(".btnf").click(function(){
   $("#fail").css({"visibility":"hidden"});
});


// 가입 시 입력했던 이메일을 적으면 버튼 활성화 ( ----------미완성---------- )
$("input").on("input", function(){
    var user_email = $(".user_email").val();

    if ( user_email == ""){
        $(".idsc-btn input").css({"opacity":"1"});
    }
});


// 이메일을 적으면 이메일란 바닥 선 색상 활성화 ( ----------미완성---------- )
$(".id-sc input").click(function(){
    $(this).toggleClass("on");
});



$("input").on("input", function(){
    var user_email = $(".user_email").val();

    if ( user_email == ""){
        $(".pwsc-btn input").css({"opacity":"1"});
    }
});


$(".pw-sc input").click(function(){
    $(this).toggleClass("on");
});








