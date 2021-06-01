// activate functions when document is ready
$(document).ready(function () {

  //blank hover
  $(".blank").hover(function () {
    $(".light").css("color", "#4e4e4e");
    $(".hiddentext").css("color", "#4e4e4e");
    $(".hiddentext").css("text-decoration", "none")
  })

  // text hover
  $(".hover, .light").hover(function () {
    $(".light").css("color", "#d3d3d3");
    $(".hiddentext").css("color", "#4e4e4e");
    $(".hiddentext").css("text-decoration", "none")
  });

  // show hiking images
  $("#gallery").click(function () {
    if ($("#hikingphotographs").css("display") == "none") {
      $("#hikingphotographs").css("display", "block");
    } else $("#hikingphotographs").css("display", "none")
  });

  // hidden text
  $("#gallery").click(function () {
    if ($(".hiddentext").css("display") == "none") {
      $(".hiddentext").css("display", "block");
    } else $(".hiddentext").css("display", "none")
  });

  // hidden text hover
  $(".hiddentext").hover(function () {
    $(this).css("color", "#ff0000");
    $(this).css("text-decoration", "underline");
    $(".light").css("color", "#4e4e4e")
  });

  // hiking image shake
  $("#hikingphotographs").mouseover(function () {
    $(this).effect("shake", {
      direction: "up",
      times: 1,
      distance: 5
    });
  });

  // hiking image hover
  $("#hikingphotographs").hover(function () {
    $(".light").css("color", "#4e4e4e");
    $(".hiddentext").css("color", "#ff0000");
    $(".hiddentext").css("text-decoration", "none")
  });


  // change hiking images
  // console.log($('#hikingphotographs').attr("src"))
  var x = $('#hikingphotographs').attr("src")
  var y = x.substring(13, 14)
  var photoNumber = Number(y)
  $("#hikingphotographs").click(function () {
    console.log('click')
    if (photoNumber < 3) {
      $(this).attr("src", `./photograph_${photoNumber+1}.jpg`);
      photoNumber = photoNumber + 1
    } else {
      $(this).attr("src", "./photograph_1.jpg");
      photoNumber = 1
    }
    console.log(photoNumber)
  });

  // show landscape images
  $("#galleryhidden").click(function () {
    if ($("#landscapephotographs").css("display") == "none") {
      $("#landscapephotographs").css("display", "block");
    } else {
      $("#landscapephotographs").css("display", "none");
    }
    $("#hikingphotographs").css("display", "none")
  });

  // hide landscape seperate
  $("#galleryhidden").click(function () {
    $("#landscapephotographs").css("display") == "none"
  });

  // Lagging footer
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $("footer").css("height", "50px")
    } else {
      $("footer").css("height", "0px")
    }
    lastScrollTop = st;
  });

});