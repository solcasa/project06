$(function () {
    $('.mainSlide').slick({
        arrows: false,
        speed: 1000,
        // fade: true,
        // dots: true,
    });


    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev');
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext');
    });


    $('.mainSlide').on('init afterChange', function (e, s, c) {
        const current = $('.mainSlide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.mainVisual .slide_num span').text(c ? (c + 1) : 1);
        $('.mainVisual .slide_num strong').text(s.slideCount);

        console.log(s.slideCount)
    });


    $('.signature_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.signature_content li').eq(idx).addClass('on').siblings().removeClass('on');
    });


    $('.product_slide').slick({
        slidesToShow: 2,
        arrows: false,
    });


    $('.main_dessert_slide .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    });
    $('.main_dessert_slide .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    });


    $(function () {
        $('.to_top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });

    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    });


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.to_top').fadeIn();
        } else {
            $('.to_top').fadeOut();
        }

    });

});

