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

$(".form-info .pw-info img").click(function(){
    $(".form-info .pw-info img:nth-of-type(2)").toggleClass("on");
});

$(".form-info .pw-check img").click(function(){
    $(".form-info .pw-check img:nth-of-type(2)").toggleClass("on");
});


// 비밀번호 눈동자이미지 클릭 시 비밀번호 **** 처리 ON/OFF
$(".form .pw img:nth-of-type(2)").click(function(){
    $(".pw .user_pw").prop("type","text");
});

$(".form .pw img:nth-of-type(1)").click(function(){
    $(".pw .user_pw").prop("type","password");
});


$(".form-info .pw-info img:nth-of-type(2)").click(function(){
    $(".form-info .pw-info input").prop("type","text");
});

$(".form-info .pw-info img:nth-of-type(1)").click(function(){
    $(".form-info .pw-info input").prop("type","password");
});


$(".form-info .pw-check img:nth-of-type(2)").click(function(){
    $(".form-info .pw-check input").prop("type","text");
});

$(".form-info .pw-check img:nth-of-type(1)").click(function(){
    $(".form-info .pw-check input").prop("type","password");
});



// 아이디, 비밀번호칸 정보입력 시 버튼 활성화 ( ----------미완성---------- )
$(".id input, .pw input").on("input", function(){
    var user_id = $(".user_id").val();
    var user_pw = $(".user_pw").val();

    if ( user_id == "" || user_pw == "" ){
        $(".loginbtn button").css({"opacity":"1"});
    } else {
        $(".loginbtn button").css({"opacity":"inherit"});
    }
});






// 로그인 실패창 닫기
$(".btnf").click(function(){
   $("#fail").css({"visibility":"hidden"});
});


// 아이디 찾기 실패창 닫기
$(".btnid").click(function(){
   $("#popid").css({"visibility":"hidden"});
});


// 비밀번호 찾기 실패창 닫기
$(".btnpw").click(function(){
   $("#poppw").css({"visibility":"hidden"});
});


// 모든 체크박스 미체크 시 생성되는 팝업창 닫기
$(".btnck").click(function(){
   $("#check").css({"visibility":"hidden"});
});


// 이메일 인증을 하지 않고 버튼 클릭 시 생성되는 팝업창 닫기
$(".btncert").click(function(){
   $("#certf").css({"visibility":"hidden"});
});





// 가입 시 입력했던 이메일을 적으면 버튼 활성화 ( ----------미완성---------- )
$("input").on("input", function(){
    var user_email = $(".user_email").val();

    if ( user_email == ""){
        $(".idsc-btn button").css({"opacity":"1"});
    }
});





// 이메일을 적으면 이메일란 바닥 선 색상 활성화
$(".id-sc input").click(function(){
    $(this).toggleClass("on");
});

$(".form-cert form > div input").click(function(){
    $(this).toggleClass("on");
});

$(".form-info form > div input").click(function(){
    $(this).toggleClass("on");
});


$(".pw-sc input").click(function(){
    $(this).toggleClass("on");
});




// 회원가입 첫번째 페이지 체크박스 동의
var check = false;

// 체크박스 전체 선택
$("#agcheck").on("click", function(){
	if($(this).is(":checked")){
		// 전체동의를 체크했을 경우 개별동의도 체크
		$(".terms").prop("checked", true);
	}else{
		// 전체동의를 체크하지 않았을 경우 개별동의도 체크해제
		$(".terms").prop("checked", false);
	}
});


// 체크박스 개별 선택
$(".form-in form > div").on("click", ".terms", function() {
    var is_checked = true;

    $(".form-in form > div .terms").each(function(){
        is_checked = is_checked && $(this).is(":checked");
    });

    $("#agcheck").prop("checked", is_checked);
});












