$(function () {
    var windowWidth = $(window).width();

    if (windowWidth < 980) {
        $('#titleBox').css('font-size', 35).css('top','25%');
    }
    if (windowWidth < 640) {
        $('#titleBox').css('font-size', 35).css('top', '20%');
    }

    $('#coverScreen').fadeIn(2000).delay(1000);
    $('#coverScreen').fadeOut(1000);
    $('nav, #buffer, #home').delay(4000).fadeIn(1000);
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