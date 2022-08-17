// 메인 최상단 프로모션 이미지 버튼 클릭 시 이미지 슬라이드
    $(".promotion img").click(function(){
        $(".promotion").slideUp(300);
        $("header").css({"position":"fixed"});
        $("section:nth-of-type(1)").css({"padding-top":"80px"});
    });


// 프로모션 이미지가 보이지 않을때까지 스크롤을 내리면 내비게이션바가 고정
    $(window).scroll(function () {
        var sc = $(this).scrollTop();

        if (sc > 321) {
            $("header").addClass("fix");
            $("section:nth-of-type(1)").css({"padding-top":"80px"});
        } else {
            $("header").removeClass("fix");
            $("section:nth-of-type(1)").css({"padding-top":"0px"});
        }
    });



// TOP 버튼을 누르면 스르륵 최상단으로 이동
	$(".topscroll").click(function(){ // top 버튼
		$("html").animate({"scrollTop":0},300);
	});


// 스크롤을 살짝 내리면 TOP 버튼 보이기, 최상단까지 올리면 가리기
    $(window).scroll(function(){
        var sr = $(this).scrollTop();

        if (sr > 10) {
            $(".topscroll").css({"opacity":"1"});
        } else {
            $(".topscroll").css({"opacity":"0"});
        }
    });


// 유저아이콘(정보) 클릭 시 숨겨진 회원정보 내비게이션 온 오프
    $(".user_icon").click(function(){
        $(".user_info").toggleClass("on");
    });


// 이용권 안내창에 마우스를 올리면 선 색상과 버튼 색상 변화
    $(".premium").on("mouseover focusin", function(){
		$(".premium .purchase button").css({"opacity":"1"});
	});

	$(".premium").on("mouseleave focusout", function(){
		$(".premium .purchase button").css({"opacity":"0.3"});
	});


    $(".basic").on("mouseover focusin", function(){
		$(".basic .purchase button").css({"opacity":"1"});
	});

	$(".basic").on("mouseleave focusout", function(){
		$(".basic .purchase button").css({"opacity":"0.3"});
	});


// 이용권 구매 완료 팝업창
    $("#cont2 .purchase button").click(function(){
        $("#selltk").css({"visibility":"visible"});
    });


// 이용권 구매 확인 팝업창 닫기
    $("#selltk .btnck").click(function(){
        $("#selltk").css({"visibility":"hidden"});
    });


// 쿠폰 확인 팝업창 닫기
    $("#sellcp .btncl").click(function(){
        $("#sellcp").css({"visibility":"hidden"});
    });

    $("#sellcp .btnck").click(function(){
        $("#sellcp").css({"visibility":"hidden"});
        $("#notcp").css({"visibility":"visible"});
        // $("#okcp").css({"visibility":"visible"}); 작성한 쿠폰번호가 유효할 시
    });

    $("#notcp .btnck").click(function(){
        $("#notcp").css({"visibility":"hidden"});
    });

    $("#okcp .btnck").click(function(){
        $("#okcp").css({"visibility":"hidden"});
    });


// 회원정보 수정하기 버튼 누르면 수정완료, 취소 버튼이 나타나며 input readonly 비활성화
    $(".Modify").click(function(){
        document.getElementById('profname').readOnly = false;
        document.getElementById('profbirth').readOnly = false;
        document.getElementById('profpre').readOnly = false;

        $(".Modify-end").css({"display":"block"});
        $(".Modify-cancel").css({"display":"block"});
        $(".continput li input").css({"background-color":"#0E2653","color":"#fff"});
    });


// 수정완료를 누르면 적용, 취소를 누르면 초기화되며 input readonly 활성화
    $(".Modify-end, .Modify-cancel").click(function(){
        document.getElementById('profname').readOnly = true;
        document.getElementById('profbirth').readOnly = true;
        document.getElementById('profpre').readOnly = true;

        $(".Modify-end").css({"display":"none"});
        $(".Modify-cancel").css({"display":"none"});
        $(".continput li input").css({"background-color":"#102D61","color":"#888"});
    });


// 문의 주제 선택
//    $(".topic option:eq(1)").click(function(){
//        $(".subtopic").css({"display":"none"});
//        $(".useticket").css({"display":"block"});
//    });

    function optionChange() {
        var a = ['결제취소', '이용권 문의'];
        var b = ['연동계정', '비밀번호찾기'];
        var v = $('.topic').val();
        var o;

        if (v == '이용권') {
            o = a;
        } else if (v == '계정') {
            o = b;
        } else {
            o = [];
        }

        $( '.subtopic' ).empty();
        $('.subtopic').append('<option selected>세부주제</option>');
        for (var i = 0; i < o.length; i++) {
            $('.subtopic').append('<option>' + o[i] + '</option>');
        }
    }




















