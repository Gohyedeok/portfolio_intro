
//스크롤시 해당 메뉴바 색상 변경

$(document).ready(function () {
    var $sec1 = $('#sec1').offset().top - 50;
    var $sec2 = $('#sec2').offset().top - 50;
    var $sec3 = $('#sec3').offset().top - 50;
    var $sec4 = $('#sec4').offset().top - 50;

    $(window).scroll(function () {
        var scrollTopPos = $(window).scrollTop();
        if (scrollTopPos < $sec1) {
            $(".sec1btn").removeClass("on").siblings().removeClass("on");
        }
        else if (scrollTopPos < $sec2) {
            $(".sec1btn").addClass("on").siblings().removeClass("on");
        }
        else if (scrollTopPos < $sec3) {
            $(".sec2btn").addClass("on").siblings().removeClass("on");
        }
        else if (scrollTopPos < $sec4) {
            $(".sec3btn").addClass("on").siblings().removeClass("on");
        }
        else {
            $(".sec4btn").addClass("on").siblings().removeClass("on");
        }
    });
});

//메뉴바 클릭시 해당위치로 이동
$('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $anchor.parent().addClass("on").siblings().removeClass("on");
    

    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');

    event.preventDefault();
});


//스크롤시 헤더 배경 색상 변경
$(window).scroll(function () {
    //스크롤이 될 때마다 위치를 담아라
    var scrollTopPos = $(window).scrollTop();
    if (scrollTopPos > 0) { //스크롤을 아래로 내리는 순간 처리
        $("body").addClass('scroll');
    }
    else { //스크롤이 완전 위에 닿았을때 처리
        $("body").removeClass('scroll');
    }
});

//인터뷰 섹션 자동 플레이
var dtnum = 0;
$("#interview dt").click(function () {
    clearInterval(autoDt);
    dtnum = $(this).data('num');
    interview(dtnum);
});/* 선언함수 */

var autoDt = setInterval(function () { /* 실행함수 */
    dtnum++;
    dtnum = dtnum % 5;
    interview(dtnum);

}, 2000);

function interview(num) {   //선언
    $("#interview dt").eq(num).toggleClass('on').siblings().removeClass("on");
}