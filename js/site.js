
/////---FOR NAV---///////
jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });

    $(".lPrint").click(function () {
        var w = window.open();
        var cTnt = $($(this).attr('data-print')).html();
        w.document.write(cTnt);
        w.print();
        w.close();

    });

});

$.fn.extend({
    toggleText: function (a, b) {
        return this.text(this.text() == b ? a : b);
    },
    toggleHtml: function (a, b) {
        return this.toggleHtml(this.text() == b ? a : b);
    }
});