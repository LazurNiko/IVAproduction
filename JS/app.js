$(function() {

    let header = $("#header");
    let introH = $('#intro').innerHeight();
    scrollOffset = $(window).scrollTop();


 /*Fixed_Header*/

    checkScroll(scrollOffset);

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop()

        checkScroll(scrollOffset);
});
    function checkScroll(scrollOffset) {    
    if( scrollOffset >= introH ) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed")
}
}
});

/*Smooth_nav*/

$("[data-scroll").on("click", function(event) {
    event.preventDefault();

    let $this = $(this);

    let blockid = $(this).data('scroll');
    let blockOffset = $(blockid).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
        scrollTop: blockOffset
    }, 400);
});

/*Toggle*/

    $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});

/*Collapse*/

    $("[data-collapse]").on("click", function(event) {
    event.preventDefault();
      
    let $this = $(this);
    blockid = $this.data("collapse");
    $this.toggleClass("active");
});

/*feedback*/

$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});
