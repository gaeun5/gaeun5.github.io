$(function () {
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    });

    $('.main_slider').on('init relnit afterChange', function (e, s, c) {
        console.log(e, s, c);
        var TG = $('.slick-current');
        TG.addClass('xxx').siblings().removeClass('xxx');
        //h3 글자 날라오는거
        $('.num').text((c ? c + 1 : 1) + '/' + s.slideCount);
    });

    $('.main_slider').slick({
        //arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        dots: true,
    });

    $('.product_slider').slick({
        arrows: false,
        slidesToShow: 5,
        dots: true,
    });


    $('.product_list .arrows .left').on('click', function () {
        $('.product_slider').slick('slickPrev')
    });

    $('.product_list .arrows .right').on('click', function () {
        $('.product_slider').slick('slickNext')
    });

    $("#bgndVideo").YTPlayer();
    /*유튜브 동영상 넣기*/

    $('.utb_movie .left').on('click', function () {
        $('#bgndVideo').YTPPause()
    });

    $('.utb_movie .right').on('click', function () {
        $('#bgndVideo').YTPPlay()
    });


})

