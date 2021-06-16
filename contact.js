$(document).ready(function () {
   
   // fade on open
    $(".container-fluid").css("opacity","1");

    // enlarge icon on hover
        $("i").mouseenter(function() {
            $("i").removeClass("display-2");
            $("i").addClass("display-1");
        })
        $("i").mouseleave(function() {
            $("i").removeClass("display-1");
            $("i").addClass("display-2");
        });
    
    });