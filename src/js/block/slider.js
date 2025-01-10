$(() => {

    $(".pog-slider__list").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        autoplay: false,
        fade: true,
        variableWidth: false,
        nextArrow: ".pog-button-nav_next",
        prevArrow: ".pog-button-nav_prev",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: !1
            }
        }]
    });
});