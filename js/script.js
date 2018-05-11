$(document).ready(function () {
  $("#menu").click(function (e) {
            e.preventDefault();
            var func = $(".nav-items").hasClass('is-visible') ? 'removeClass' : 'addClass';
            $(".nav-items").removeClass("is-visible");
            $(".nav-items")[func]("is-visible");
        });
        $(window).resize(function () {
            var viewportWidth = $(window).width();
            if (viewportWidth > 400) {
                    $(".nav-items").removeClass("is-visible");
            }
        });
});
