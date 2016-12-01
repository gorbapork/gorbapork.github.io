$(function () {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    if (windowWidth <= 980) {
        $('#titleBox').css('font-size', 45).css('top', '40%');
        if (1300 <= windowHeight && windowHeight <= 1745) {
            $('#phoneBg').fadeIn(1500);
        }
        else {
            $('#smallBg').fadeIn(1500);
        }
    }
    else if (windowWidth < 640) {
        $('#titleBox').css('font-size', 35).css('top', '20%');
        if (1300 <= windowHeight && windowHeight <= 1745) {
            $('#phoneBg').fadeIn(1500);
        }
        else {
            $('#smallBg').fadeIn(1500);
        }
    }
    else {
        $('#largeBg').fadeIn(1500);
    }
    $('nav, #buffer, #home').fadeIn(1500);


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