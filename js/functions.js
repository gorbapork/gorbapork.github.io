$(function () {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    if (windowWidth <= 980) {
        $('#titleBox').css('font-size', 45).css('top', '40%');
        if (1300 <= windowHeight && windowHeight <= 1745) {
            $('#phoneBg').fadeIn(1500);
        }
        else {
            $('#smallBg').show();
        }
    }
    else if (windowWidth < 640) {
        $('#titleBox').css('font-size', 35).css('top', '20%');
        if (1300 <= windowHeight && windowHeight <= 1745) {
            $('#phoneBg').fadeIn(1500);
        }
        else {
            $('#smallBg').show();
        }
    }
    else {
        $('#largeBg').show();
    }
    $('nav, #buffer, #home').show();

    sizeSlideshows();
});

function swapScreens(title) {
    var showing = $('article[showing]');
    var selected = $("#" + title);

    if (showing[0].id === title)
        return;

    if (selected[0].id === "gameplay") {
        initSlider1();
    }

    showing.removeAttr("showing").fadeOut();
    selected.attr("showing", "").delay(500).fadeIn();

    selected = 0;
}

function sizeSlideshows() {
    var topSlides = $("#topslideshow").find("iframe");
    alert($(window).width());
    alert(topSlides.width);
    topSlides.attr("width",300);
}