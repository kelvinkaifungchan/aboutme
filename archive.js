$(document).ready(function () {

    // Random Gallery
    var arr = []
    var i
    for (i = 1; i <= 30; i++) {
        arr.push(i)
    }
    // Changing array order
    let shuffled = arr.sort((a, b) => 0.5 - Math.random());

    // Columns of images
    for (i = 0; i <= 10; i++) {
        $("#column1").append(
            `<img src="Archive/archive_${shuffled[i]}.jpg"class="img-thumbnail border-0 p-5">`
        )
    }

    for (i = 11; i <= 20; i++) {
        $("#column2").append(
            `<img src="Archive/archive_${shuffled[i]}.jpg"class="img-thumbnail border-0 p-5">`
        )
    }

    for (i = 21; i <= 29; i++) {
        $("#column3").append(
            `<img src="Archive/archive_${shuffled[i]}.jpg"class="img-thumbnail border-0 p-5">`
        )
    }

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