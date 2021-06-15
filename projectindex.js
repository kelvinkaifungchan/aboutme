$(document).ready(function () {

    // fade on open
    $("body").css("opacity", "1");

    // change project thumbnails
    
    let photoNumber = 1
    $(document).ready(function() {
        $("img").click(function() {
          console.log('click')
          if (photoNumber < 3) {
            $(this).attr("src",`./Project Thumbnails/ConstructingFriction_${photoNumber+1}.jpg`);
            photoNumber += 1}
          else {
            $(this).attr("src","./Project Thumbnails/ConstructingFriction_1.jpg");
          photoNumber = 1}
          console.log(photoNumber)
        })
      });

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