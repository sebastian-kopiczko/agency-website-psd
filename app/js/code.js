$(document).ready(function () {
    $(".circle").click(function () {
        $(".circle").removeClass("active");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active")
        }
        else {
            $(this).addClass("active");
        }
    })
    $(".menu-btn").click(function () {
        $(this).toggleClass("open");
        var width = "";
        if ($(this).hasClass("open")) {
            $("#navbar").css("width", "12rem");
            setTimeout(function () {
                $("#side-menu").css("opacity", "1");
            }, 300);
        }
        else {
            $("#side-menu").css("opacity", "0");
            setTimeout(function () {
                $("#navbar").css("width", "0rem");
            }, 100);
        }
    });
});
