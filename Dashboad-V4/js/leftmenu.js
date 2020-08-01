"use strict";
$(function() {
    //hide menu in small screens
    if ($(window).width() <= 992) {
        $(".wrapper").addClass("hide_menu");
    }
    //Enable sidebar toggle
    var sidebar_toggle = $("[data-toggle='offcanvas'].sidebar-toggle");
    sidebar_toggle.on('click', function(e) {
        e.preventDefault();
        //Toggle Menu
        $(".wrapper").toggleClass("hide_menu");
        $(".collapse-button").toggleClass("close1");
    });
    //leftmenu init
    $('#menu').metisMenu();
    // INIT popovers
    $("[data-toggle='popover']").popover();

    // fullscreen initialization
    $('#full-screen').on('click',function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    });
    // lock screen script

    $("#lockdscreen").on("click", function(){
        $('body').addClass('screen_locked');
        $('.screen-center').show();
    });

    // color switcher
    $('.color-picker').find('div[class^="color"]').on('click', function () {
        var myClass = $(this).attr("class");
        $('body').removeClass().addClass(myClass);
        if($(this).hasClass('color-4')){
            $('#full-screen').find('img').attr("src","img/screen_dark.png");
        }else {
            $('#full-screen').find('img').attr("src","img/screen.png");
        }
    });
});
/*END DEMO*/