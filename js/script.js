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


