/* 클라이언트 ui 스크립트 */
/*var sessionUserId = '';

if(sesseionUserId == ""){
   //로그인 안했을때
	console.log("로그인x");
} else {
   //로그인 했을때
	console.log("로그인o");
}*/

// 헤더 메뉴 반응형
function responsiveStyle() {

	//gnb 메뉴용
	var windowWidth = $(window).outerWidth();

	// 더보기 버튼 추가
	$('.gnb_2depth > li').each(function(){
		var target = $(this);
		target.children('a').children('.gnb_more').hide();
		if ( target.find('.gnb_3depth').length ) {
			$('<span class="gnb_more">펼쳐보기</span>').appendTo( target.children('a') );
		}
	});

	if (windowWidth < 1025) {
		//console.log('모바일,태블릿');

		// 기본 설정
		$('.gnb_wrap').appendTo('.header_wrap');
		$('.btn_menu').removeClass('on');
		$('.gnb_1depth').off();
		$('.gnb_1depth').removeClass('on');
		$('.select_lang').prependTo('.gnb_wrap');
		//$('.gnb_2depth li').off();
		//$('.gnb_2depth').removeAttr('style');
		//$('.gnb_3depth').removeAttr('style');
		//$('.gnb_2depth').removeClass('on');
	

		// gnb
		$('.btn_menu').on('click', function(e){
			e.stopImmediatePropagation();
			$('body').addClass('on');
			//$('.gnb_1depth').removeClass('on');
			//$('.gnb_2depth').slideUp();
			//$('.gnb_3depth').slideUp();
			//if( $(this).hasClass('on') ){
			//	$('body').removeClass('on');
			//	$(this).removeClass('on');
			//} else {
			//	$('body').addClass('on');
			//	$(this).addClass('on');
			//}
		});

		$('.btn_close').on('click', function(e){
			e.stopImmediatePropagation();
			$('body').removeClass('on');
		});

		//2depth 아코디언메뉴
		$(".gnb_1depth a").unbind("click");
		$('.gnb_1depth a').click(function () {
			$('body').removeClass('on');

			//$('.gnb_1depth').removeClass("on");
			//if ($(this).next().children().is(':hidden')) {
			//	$(this).parent().parent().find('.gnb_2depth').slideUp();
			//	$(this).next().slideDown();
			//	$(this).parent().addClass("on");
            //     $(".gnb_3depth").slideUp();
			//} else {
			//	$(this).next().slideUp();
			//	$(this).parent().removeClass("on");
            //    $('.gnb_2depth > li').removeClass("on");
			//}
		});

		// 3depth
		//$('.gnb_2depth > li > a').on('click', function(e){
		//	e.stopImmediatePropagation();
		//	if( $(this).next('ul').is(':visible') ){
		//		$(this).parent().removeClass('on').children('ul').stop().slideUp(300);
		//	} else {
		//		$('.gnb_2depth').children().removeClass('on').children('.gnb_3depth').stop().slideUp(300);
		//		$(this).parent().addClass('on').children('ul').stop().slideDown(300);
		//	}
		//});


		
	} else {
		//console.log("PC");

		// 기본 설정
		$('.gnb_wrap').appendTo('.header_wrap > .grid_content');
		$('.gnb_1depth').removeClass('on');
		$('.select_lang').prependTo('.function_area');
		//$('.gnb_2depth').removeClass('on');
		//$('.gnb_2depth').removeAttr('style');
		//$('.gnb_3depth').removeAttr('style');

		//2depth 메뉴
		$(".gnb_1depth").on({
			'mouseenter focusin' : function(){
				$(this).addClass('on');
				//$(this).find(".gnb_2depth").stop().slideDown('fast');
			},
			'mouseleave focusout' : function(){
				$(this).removeClass('on');
				//$(this).find(".gnb_2depth").stop().slideUp('fast');
			}
		});

		//3depth 메뉴
		//$(".header_bottom .gnb_2depth li").on({
		//	'mouseenter focusin' : function(){
		//		if($(this).children("ul").length) {
		//			$(this).find(".gnb_3depth").stop().slideDown('fast');
		//		}
		//	},
		//	'mouseleave focusout' : function(){
		//		$(this).find(".gnb_3depth").stop().slideUp('fast');
		//	}
		//});
		
		// header 스크롤시
		$(window).on('scroll', function(){
			var scr = $(this).scrollTop();
			if ( scr > 0) {
			} else {
			}
			return false;
		});

	}

}

var resizeTimer;
$( window ).on( 'resize', function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(resizeEnd, 1000);
} );

function resizeEnd() {
	responsiveStyle();
}

// toggle class 'on'
function toggleOn(){
	$('.on_js').on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('on');
	});
}

//페이지 상단 이동
function moveTop() {
	var windowWidth = $(window).outerWidth();
	$('.move_top').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.move_top').fadeIn();
		} else {
			$('.move_top').fadeOut();
		}
	});
	$('.move_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
}

// 언어선택 셀렉트박스
function selectLangBox(){

	//var windowWidth = $(window).outerWidth();
	var select = $('.select_lang').children('p');
	var selectList = select.next().children('li');

	//select.on('click',function(e){
	//	e.stopImmediatePropagation();
	//	$(this).next().stop().slideToggle('fast');
	//});

	//selectList.on('click',function(){
	//	selectList.not($(this)).removeClass('on');
	//	$(this).addClass('on');
	//	selectList.parent().slideUp(400);
	//});
	select.on('click',function(){
		select.toggleClass('on');
		if ($(this).hasClass('on')) {
			select.html('EN');
		} else {
			select.html('KR');
		}
	});

	// 클릭시 변환
	//$('.lang_kr').parent().on('click',function(){
	//	select.html('KR');
	//});
	//$('.lang_us').parent().on('click',function(){
	//	select.html('EN');
	//});
	//$('.lang_cn').parent().on('click',function(){
	//	select.html('CN');
	//});
	//$('.lang_vn').parent().on('click',function(){
	//	select.html('VN');
	//});
}

// tab : '.tab_js' 안에 '.tab_list_js' 와 '.tab_cnt_js'로 구분지어 사용.
function tab(){
	$('.tab_js').each(function(){
		var tabs = $(this).children('.tab_list_js').children('li');
		var panels = $(this).children('.tab_cnt_js').children('div');
		var lastTab = tabs.filter('.on');
		var lastPanel = $(lastTab.children('a').attr('href'));
		panels.hide();
		lastPanel.show();
		tabs.on('click',function(e){
			e.preventDefault();
			var thisTab = $(this);
			var thisPanel = $(thisTab.children('a').attr('href'));
			lastTab.removeClass('on');
			thisTab.addClass('on');
			lastPanel.hide();
			thisPanel.show();
			lastTab = thisTab;
			lastPanel = thisPanel;
		});
	})
}

// tab 모양만
function tabSwitch(){
	$('.tab_switch_js').each(function(){
		var tab = $(this).children('li');

		tab.on('click',function(e){
			e.preventDefault();
			tab.removeClass('on');
			$(this).addClass('on');
		})
	})
}

// 클릭한 영역으로 이동
function gotoin() {
	$('.goto_js').each(function(){
		var gotoTit = $(this).find('a');

		gotoTit.on('click',function(e){
			e.preventDefault();

			var target = $(this).attr('href');

			if (target.length) {
				$('html,body').animate({
					scrollTop: $(target).offset().top - 100
				}, 'slow');
			}
		})
	})
}

// accordion : '.accordion_js' 안에 '.acd_list_js' 와 '.acd_cnt_js'로 구분지어 사용.
function accordion(){
	$('.accordion_js').each(function(){
		var tabs = $(this).find('.acd_list_js');

		$(this).find('.acd_cnt_js').hide();

		// '.on'이 붙은 아이는 페이지 진입시 열어놓기
		tabs.filter('.on').next('.acd_cnt_js').show();

		tabs.on('click',function(e){
			e.preventDefault();

			var thisTab = $(this);
			var thisPanel = thisTab.next('.acd_cnt_js');
			var notThisTab = tabs.not(thisTab);
			var notThisPanel = notThisTab.next();

			if(notThisTab){
				notThisTab.removeClass('on');
				notThisPanel.slideUp(300);
			}

			thisTab.toggleClass('on');
			thisPanel.stop().slideToggle(300);
		});
	})
}

//토글 체크박스 검색버튼 (check_col)
/*function checkToggle(){
	$('.search_toggle_row').each(function () {
		// 최초 로드시 선택된 체크박스가 없으면 전체 체크박스 checked
		if($(".searchtoggle_left input:checked").length == 0){
			$(".check_all").prop("checked", true);
			$(".check_all").parent().addClass("on");
		}
		// 체크박스 선택시 스타일 변경 및 전체 체크박스인지 여부 확인
		$(".searchtoggle_left .btn_check_form input[type='checkbox']").change(function() {
			if($(this).is(":checked")){
				if($(this).hasClass("check_all")){
					$(".searchtoggle_left input[type='checkbox']").prop("checked", false);
					$(".searchtoggle_left input[type='checkbox']").parent().removeClass("on");
					$(".check_all").prop("checked",true);
					$(".check_all").parent().addClass("on");
				} else {
					$(".check_all").prop("checked", false);
					$(".check_all").parent().removeClass("on");
					$(this).prop("checked",true);
					$(this).parent().addClass("on");
				}

			} else {
				$(this).parent().removeClass("on");
				if($(".searchtoggle_left input:checked").length == 0){
					$(".check_all").prop("checked",true);
					$(".check_all").parent().addClass("on");
				}
			}
		});

		//찜목록, 추천교과
		$(".searchtoggle_right .btn_check_form input[type='checkbox']").change(function () {
			if ($(this).is(":checked")) {
				$(this).parent("label").addClass("on");
			} else {
				$(this).parent().removeClass("on");
			}
		});
	});
}*/

// selectbox
function selectBox() {
	$('.select_form').each(function(){
		var label = $(this).children('label');
		var target = $(this).children('.select_custom');
		var targetName = target.children('option:selected').text();

		label.text(targetName);
		target.on('change',function(){
			var targetName = $(this).children('option:selected').text();
			label.text(targetName);
		});
	});
}

// 글자수 표기
function letterCount(){
	$('#letter_count').keyup(function(){
		var content = $(this).val();
		$('#letter_counter').html(content.length + '/100');
	});
	$('#letter_count').keyup();
}

//체크박스 토글(col) : 체크박스 버튼
function checkToggleCol(){
	$('.check_col_wrapper').each(function(){
		var checkAll = $(this).find('.check_all').children('input');
		var check = checkAll.parent().siblings('.check_col').children('input');
		var checkTotalCnt = check.length;

		checkAll.on('change',function(){
			check.prop('checked',false);
			$(this).prop('checked',true);

		})

		check.on('change',function(){
			var checkSelected =  check.filter(':checked');
			checkAll.prop('checked',false);

			if(checkSelected.length >= checkTotalCnt){
				checkAll.prop('checked',true);
				check.prop('checked',false);
			}

		})
	})
}

//라디오 토글
function radioToggle() {
	$(".radio_toggle>input[type='radio']").click(function () {
		var previousRadio = $(this).data('storedRadio');
		if (previousRadio) {
			$(this).prop('checked', !previousRadio);
			$(this).data('storedRadio', !previousRadio);
		} else {
			$(this).data('storedRadio', true);
			$(".radio_toggle>input[type=radio]:not(:checked)").data("storedRadio", false);
		}
		if ($(this).is(":checked")){
			$(".radio_toggle").removeClass("on");
			$(this).parent().addClass("on");
		} else {
			$(this).parent().removeClass("on");
		}
	});
}

// 테이블 스크롤 커스텀
function tableScroll() {
	// 모바일 기기 접속 여부 체크 후 PC일때만 스크롤 mCustomScrollbar 실행
	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
			//alert('모바일');
			//테이블 스크롤  커스터마이징 해제
			$(".scrollx_tbl_xxl, .scrollx_tbl_xl, .scrollx_tbl_lg, .scrollx_tbl_md, .scrollx_tbl_sm, .scrollx_tbl_xs").mCustomScrollbar("destroy");
		} else {
			//alert('PC');
			//테이블 스크롤  커스터마이징
			$(".scrollx_tbl_xxl, .scrollx_tbl_xl, .scrollx_tbl_lg, .scrollx_tbl_md, .scrollx_tbl_sm, .scrollx_tbl_xs").mCustomScrollbar({
				axis: "x",
				theme: "dark",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				}
			});
		}
	}
}

// 페이징버튼 클릭시 페이지 상단부분으로 이동
function up(){
	$('.up_js').each(function(){
		var windowWidth = $(window).outerWidth();

		if(windowWidth < 1025) {
			$('.testlist_move').click(function(e){
				e.preventDefault();
				$('body,html').animate({scrollTop: 150 }, 300);
			});
		}else {
			$('.testlist_move').click(function(e){
				e.preventDefault();
				$('body,html').animate({scrollTop: 200 }, 300);
			});
		}

	});
}

// 스크롤 패럴럭스
function setScrollEffect(selector, extra) {
	checkVisibility();
	$(window).on('scroll resize', function() {
		checkVisibility();
	});

	function checkVisibility() {
		$(selector).each(function(){
			var target = $(this);
			var scrollTop = $(document).scrollTop();
			var minShow = target.offset().top - $(window).height() * extra;

			if ( scrollTop >= minShow ){
				target.addClass('on');
			}
		});
	}
}

// 브라우저 알림창
function browserAlert(){
	$(".browseralert_close").on("click", function() {
		$("#browseralert").slideUp();
	});
}


//swiper 슬라이드팝업
function swiperSlide1() {
	var swiper1 = new Swiper('.slidepop_container', {
		slidesPerView: 1,
		speed: 1000,
		loop: true,
		navigation: {
			nextEl: '.btn_navi.next',
			prevEl: '.btn_navi.prev',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		  },
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},    
	});
}

//swiper 메인 슬라이드
function swiperSlide2() {
	var swiper1 = new Swiper('.main_container', {
		slidesPerView: 1,
		speed: 1500,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		  },
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},    
	});
}

//캠퍼스 분양 sidebar detail
function sidebarDetail() {
	var sidebar = $('.sidebar_detail');
	var btn = $('.btn_sideopen');

	if(sidebar.hasClass('on')){
		btn.addClass('on');
	}else {
		btn.removeClass('on');
	}

	btn.on('click', function(){
		if(btn.hasClass('on')){
			sidebar.addClass('on');
		}else {
			sidebar.removeClass('on');
		}
	});

} 

//전체 검색
function searchToggle() {
	var searchWrap = $('.search_toggle');
	var search = $('.btn_allsearch');

	search.on('click', function(){
		if(searchWrap.hasClass('on')){
			searchWrap.removeClass('on');
		}else {
			searchWrap.addClass('on');
		}
	});

}

// IE 버전 체크 (UserAgent)
var ua = navigator.userAgent.toLowerCase();
// IE7엔 브라우저 엔진명인 Trident가 없고 IE11엔 MSIE란 문자열이 없으므로 두 가지 경우를 모두 체크.
if( ua.indexOf( 'msie' ) != -1 || ua.indexOf( 'trident' ) != -1 ) {
	var version = 11;
	ua = /msie ([0-9]{1,}[\.0-9]{0,})/.exec( ua );
	if( ua )
	{
		version = parseInt( ua[ 1 ] );
	}
	var classNames = '';
	// 기존 방식에 is-ie 라는 클래스 추가
	classNames += ' is-ie';
	// 기존 방식에 현재 버전 클래스 추가
	classNames += ' ie' + version;
	for( var i = version + 1; i <= 11; i++ ) {
		classNames +=  ' lt-ie' + i;
	}
	// html 태그에 클래스 추가
	document.getElementsByTagName( 'html' )[ 0 ].className += classNames;
}

$(document).ready(function () {

	// toggle class 'on'
	toggleOn();

	// 페이징버튼 클릭시 페이지 상단부분으로 이동
	up();

	//gnb 메뉴 반응형 동작
	responsiveStyle();

	//페이지 상단으로 이동
	moveTop();

	// 언어선택 셀렉트박스
	selectLangBox();

	//tab
	/*tabList();*/

	// tab 기본
	tab();

	// tab 모양만
	tabSwitch();

	// 클릭한 영역으로 이동
	gotoin();

	// accordion
	accordion();

	//토글 체크박스 검색버튼
	/*checkToggle();*/

	//tab 연동
	/*tabgoto();*/

	// selectbox
	selectBox();

	// 글자수 표기
	letterCount();
	
	//체크박스 토글(col) : 체크박스 버튼
	checkToggleCol();

	//라디오 토글
	radioToggle();

	// 스크롤 패럴럭스
	setScrollEffect('.fadeup', 0.9);
	setScrollEffect('.fadein', 0.9);

	// 브라우저 알림창
	browserAlert();

	//swiper 슬라이드팝업
	swiperSlide1();
	//swiper 메인 슬라이드
	swiperSlide2();
	
	//캠퍼스 분양 sidebar detail
	sidebarDetail();

	//전체 검색
	searchToggle();

	// select2 설정
	$(".sel_search_row select").select2({
		formatNoMatches: function() {
			return '결과가 없습니다.';
		},
	});
	$(".sel_search_row.all select").select2({
		placeholder: "전체",
	});
	$(".sel_search_row.campus select").select2({
		placeholder: "캠퍼스 혹은 주소 검색",
	});
	$(".sel_search_row.choice select").select2({
		placeholder: "선택",
	});

	// 이미지 라이트박스
	$('.openimg').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		callbacks: {
			resize: changeImgSize,
			imageLoadComplete: changeImgSize,
			change: changeImgSize
		}
	});

	function changeImgSize() {
		var img = this.content.find('img');
		img.css('max-height', '100%');
		img.css('height', 'auto');
		img.css('width', 'auto');
		img.css('max-width', '810px');
	}

});

$(window).on("load", function () {
	tableScroll();
});

// outline 설정 - 키보드로 접근시엔 아웃라인을 보여주고 마우스로 접근할때는 아웃라인을 없애줌
(function (d) {
	var style_element = d.createElement('STYLE'),
		dom_events = 'addEventListener' in d,
		add_event_listener = function (type, callback) {
			// Basic cross-browser event handling
			if (dom_events) {
				d.addEventListener(type, callback);
			} else {
				d.attachEvent('on' + type, callback);
			}
		},
		set_css = function (css_text) {
			// Handle setting of <style> element contents in IE8
			!!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
		};

	d.getElementsByTagName('HEAD')[0].appendChild(style_element);

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	/*add_event_listener('mousedown', function () {
		set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
	});*/
	add_event_listener('keydown', function () {
		set_css(':focus{outline:dotted 1px #193296}::-moz-focus-inner{border:dotted 1px #193296;}');
	});
})(document);


