var fotky = $(".gl1 a img");
var fotky2 = $(".gl2 a img");

fotky.addClass("img-thumbnail");
fotky.addClass("thumbnail1");

fotky2.addClass("img-thumbnail");
fotky2.addClass("thumbnail1");
$(".gallery1").not(":first").hide();
var Interval = setInterval(function () {
  $(".gallery1")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery1").fadeIn();
    });
}, 3000);

$(".gallery2").not(":first").hide();
setInterval(function () {
  $(".gallery2")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery2").fadeIn();
    });
}, 3000);

$(".gallery3").not(":first").hide();
setInterval(function () {
  $(".gallery3")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery3").fadeIn();
    });
}, 3000);
$(".gallery4").not(":first").hide();
setInterval(function () {
  $(".gallery4")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery4").fadeIn();
    });
}, 3000);
$(".gallery4").click(function (e) {
  e.preventDefault();
});
$(".gallery5").not(":first").hide();
setInterval(function () {
  $(".gallery5")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery5").fadeIn();
    });
}, 3000);
$(".gallery5").click(function (e) {
  e.preventDefault();
});
$(".gallery6").not(":first").hide();
setInterval(function () {
  $(".gallery6")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery6").fadeIn();
    });
}, 3000);
$(".gallery6").click(function (e) {
  e.preventDefault();
});
$(".gallery7").not(":first").hide();
setInterval(function () {
  $(".gallery7")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery7").fadeIn();
    });
}, 3000);
$(".gallery7").click(function (e) {
  e.preventDefault();
});
$(".gallery8").not(":first").hide();
setInterval(function () {
  $(".gallery8")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery8").fadeIn();
    });
}, 3000);
$(".gallery8").click(function (e) {
  e.preventDefault();
});
$(".gallery9").not(":first").hide();
setInterval(function () {
  $(".gallery9")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery9").fadeIn();
    });
}, 3000);
$(".gallery9").click(function (e) {
  e.preventDefault();
});
$(".gallery10").not(":first").hide();
setInterval(function () {
  $(".gallery10")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery10").fadeIn();
    });
}, 3000);
$(".gallery10").click(function (e) {
  e.preventDefault();
});
$(".gallery11").not(":first").hide();
setInterval(function () {
  $(".gallery11")
    .children(":last")
    .fadeOut(function () {
      $(this).prependTo(".gallery11").fadeIn();
    });
}, 3000);
$(".gallery11").click(function (e) {
  e.preventDefault();
});


$(".gallery1").click(function (e) {
  // $(this).hide(function(){
  //  $(".gl1").fadeIn();
  // });
  e.preventDefault();
});
$("#zavriet1").click(function () {
  $(this).fadeOut();
  $(".gl1").fadeOut();
  $(".gallery1").fadeIn();
  $(".zobrazit1").fadeIn();
});

$(".gallery2").click(function (e) {
  //$(this).hide(function(){
  // $(".gl2").fadeIn();
  // });
  e.preventDefault();
});
$("#zavriet2").click(function () {
  $(this).fadeOut();
  $(".gl2").fadeOut();
  $(".zobrazit2").fadeIn();
});
$(".gallery3").click(function (e) {
  //$(this).hide(function(){
  //  $(".gl3").fadeIn();
  // });
  e.preventDefault();
});
$("#zavriet4").click(function () {
  $(this).fadeOut();
  $(".gl4").fadeOut();
  $(".zobrazit4").fadeIn();
});
$("#zavriet3").click(function () {
  $(this).fadeOut();
  $(".gl3").fadeOut();
  $(".zobrazit3").fadeIn();
});
$("#zavriet5").click(function () {
  $(this).fadeOut();
  $(".gl5").fadeOut();
  $(".zobrazit5").fadeIn();
});
$("#zavriet6").click(function () {
  $(this).fadeOut();
  $(".gl6").fadeOut();
  $(".zobrazit6").fadeIn();
});
$("#zavriet7").click(function () {
  $(this).fadeOut();
  $(".gl7").fadeOut();
  $(".zobrazit7").fadeIn();
});
$("#zavriet8").click(function () {
  $(this).fadeOut();
  $(".gl8").fadeOut();
  $(".zobrazit8").fadeIn();
});
$("#zavriet9").click(function () {
  $(this).fadeOut();
  $(".gl9").fadeOut();
  $(".zobrazit9").fadeIn();
});
$("#zavriet10").click(function () {
  $(this).fadeOut();
  $(".gl10").fadeOut();
  $(".zobrazit10").fadeIn();
});
$("#zavriet11").click(function () {
  $(this).fadeOut();
  $(".gl11").fadeOut();
  $(".zobrazit11").fadeIn();
});



$(".zobrazit1").click(function () {
  $(this).hide(function () {
    $(".gl1").fadeIn();
    $("#zavriet1").fadeIn();
  });
});
$(".zobrazit2").click(function () {
  $(this).hide(function () {
    $(".gl2").fadeIn();
    $("#zavriet2").fadeIn();
  });
});
$(".zobrazit3").click(function () {
  $(this).hide(function () {
    $(".gl3").fadeIn();
    $("#zavriet3").fadeIn();
  });
});
$(".zobrazit4").click(function () {
  $(this).hide(function () {
    $(".gl4").fadeIn();
    $("#zavriet4").fadeIn();
  });
});
$(".zobrazit5").click(function () {
  $(this).hide(function () {
    $(".gl5").fadeIn();
    $("#zavriet5").fadeIn();
  });
});
$(".zobrazit6").click(function () {
  $(this).hide(function () {
    $(".gl6").fadeIn();
    $("#zavriet6").fadeIn();
  });
});
$(".zobrazit7").click(function () {
  $(this).hide(function () {
    $(".gl7").fadeIn();
    $("#zavriet7").fadeIn();
  });
});
$(".zobrazit8").click(function () {
  $(this).hide(function () {
    $(".gl8").fadeIn();
    $("#zavriet8").fadeIn();
  });
});
$(".zobrazit9").click(function () {
  $(this).hide(function () {
    $(".gl9").fadeIn();
    $("#zavriet9").fadeIn();
  });
});
$(".zobrazit10").click(function () {
  $(this).hide(function () {
    $(".gl10").fadeIn();
    $("#zavriet10").fadeIn();
  });
});
$(".zobrazit11").click(function () {
  $(this).hide(function () {
    $(".gl11").fadeIn();
    $("#zavriet11").fadeIn();
  });
});



$("#zavriet1").hide();
$("#zavriet2").hide();
$("#zavriet3").hide();
$("#zavriet4").hide();
$("#zavriet5").hide();
$("#zavriet6").hide();
$("#zavriet7").hide();
$("#zavriet8").hide();
$("#zavriet9").hide();
$("#zavriet10").hide();
$("#zavriet11").hide();


$("#close_news").hide();
$("#article1,#article2,#article3,#article4,#article5,#article6,#article7").hide();
$("#next_news").click(function(){
  $(this).hide(function(){
    $("#article1,#article2,#article3,#article4,#article5,#article6,#article7").fadeIn();
    $("#close_news").fadeIn();
  });
});

$("#close_news").click(function(){
$(this).hide(function(){
$("#article1,#article2,#article3,#article4,#article5,#article6,#article7").fadeOut();
$("#next_news").fadeIn();
});
});

//$("#responsive-donate-button").hide();
//zastavenie intervalu na kliknutie//
/*$(".gallery1").click(function(){
  clearInterval(Interval);
});*/
