// activate functions when document is ready
$(document).ready(function () {
  // Fade Load
  $("body").css("opacity","1");

      // Lagging footer
      var lastScrollTop = 0;
      $(window).scroll(function (event) {
          var st = $(this).scrollTop();
          if (st > lastScrollTop) {
              $("footer").css("height", "50px");
          } else {
              $("footer").css("height", "0px");
          }
          lastScrollTop = st;
      });
});