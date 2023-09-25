// jQuery 문서 준비 이벤트
$(document).ready(function(){

    // 모바일 환경인지 확인하는 함수
    function isMobile() {
        return window.innerWidth <= 1024;
    }

    // 메뉴 버튼 클릭 이벤트
    $('.menu_btn').click(function(){
        // 모바일 환경일 때만 동작
        if (isMobile()) {
            // 메뉴 버튼의 클래스 토글
            $('.menu_btn').toggleClass('lijo');
            // gnb의 클래스 토글
            $('.gnb').toggleClass('surya');
            // 초기화: 서브메뉴 스타일 제거
            $('.sub').removeAttr('style');
        }
    });

    // gnb 메뉴 아이템 클릭 이벤트
    $('.gnb li').click(function(){
        // 클릭된 메뉴 아이템의 하위 메뉴 토글 효과 적용
        $(this).find('.sub').slideToggle(500);
        var t = $(this).find('.sub');
        // 현재 선택된 하위 메뉴 외의 다른 하위 메뉴들은 닫기
        $('.sub').not(t).slideUp(500);
    });

    // 최대 높이값을 저장할 변수 선언
    var max_h = 0;
    // 각 sub 메뉴의 높이를 체크하여 최대 높이값 설정
    $(".sub").each(function () {
        var h = parseInt($(this).css("height"));
        if (max_h < h) {
            max_h = h;
        }
    });



    // gnb 메뉴에 마우스를 올렸을 때의 이벤트
    $('.gnb > li > a').mouseenter(function () {
        // 모바일 환경이 아닐 때만 동작
        if (!isMobile()) {
            var menuHeight = $('#header').outerHeight();
            // slideDown을 사용하여 부드럽게 보여주기
            $('.sub').stop().slideDown(500);
            // sub 메뉴를 보여주는 스타일 적용
            $('.sub').css({
                'opacity': '1',
                'visibility': 'visible',
                'transform': 'translateY(0px)'
            });
            // 하위 메뉴의 배경 설정
            $('.hd_bg').css({
                'top': menuHeight + 'px',
                height: max_h + 30 + 'px',
                'display': 'block'
            }).stop().fadeIn(500);
            // 헤더에 'open' 클래스 추가
            $('#header').addClass('open');
            // 현재 메뉴 아이템에 'active' 클래스 추가
            $(this).parent().addClass('active');
            // 현재 메뉴 아이템을 제외한 다른 메뉴 아이템에서 'active' 클래스 제거
            $(this).parent().siblings().removeClass('active');
        }
    });


    // 마우스가 gnb 메뉴 밖으로 나갔을 때의 이벤트
    $('.gnb').on('mouseleave', function() {
        // 모바일 환경이 아닐 때만 동작
        if (!isMobile()) {
            closeSubmenu();
        }
    });

    // 하위 메뉴를 닫는 함수 정의
    function closeSubmenu() {
        // sub 메뉴를 숨기는 스타일 적용
        $('.sub').css({
            'opacity': '0',
            'visibility': 'hidden',
            'transform': 'translateY(10px)'
        });
        // slideUp을 사용하여 부드럽게 숨기기
        $('.sub').stop().slideUp(500);
        // 부드럽게 흰색 배경 페이드 아웃
        $('.hd_bg').stop().fadeOut(500);
        // 하위 메뉴의 배경 숨기기
        $('.hd_bg').css('display', 'none');
        // 헤더에서 'open' 클래스 제거
        $('#header').removeClass('open');
        // 모든 메뉴 아이템에서 'active' 클래스 제거
        $('.gnb > li').removeClass('active');
    }
});