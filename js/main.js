/*jshint jquery: true*/



$(window).on('load', function () {
  $('#cobble').append('<img id="img_cobble" class="img_highres" src="assets/dark_cobble1920.jpg">');
  $(".img_highres").off().on("load", function () {
    $("body").css({
      "background-image": "url(../assets/dark_cobble1920.jpg)"
    });
  });
});

$(function () {
  var title_span = $('.title span');

  title_span.typed({
    strings: ['ARTH'],
    startDelay: 1000,
    typeSpeed: 60,
    showCursor: false,
  });

//  var toIn = $('.bio').children().first();
//  //  toIn.fadeOut().delay.next().fadeOut();
//  toIn.siblings().show();
//
//  function cycleIn(animTime, interTime) {
//    // fades in siblings,
//    toIn = toIn.fadeIn(animTime).next();
//    if (toIn.length !== 0) {
//      setTimeout(function () {
//        cycleIn(animTime, interTime);
//      }, interTime);
//    }
//  }




});




//  function typedCallbackFn() {
//    
//    if (counter++ >= strings.length - 1) {
//      return;      
//    }
//    bio.append(p);
//    line = bio.children.eq(counter);
//    line.append(strings[counter]);
//    line.typed({
//      strings: [strings[counter]],
//      typeSpeed: 8,
//      callback: typedCallbackFn()
//    });
//    
//  }
//  typedCallbackFn();
//    $('.bio:first-child').append('<span></span>').children('span').typed({
//        strings: [strings[counter++]],
//        typeSpeed: 5,
//        callback: typedCallbackFn
//      }
//    });
//  $("#type-area").typed({
//    strings: ["First sentence."],
//    typeSpeed: 10
//  });


//  function type(string, element) {
//    (function writer(i) {
//      if (string.length <= i++) {
//        element.value = string;
//        return;
//      }
//      element.value = string.substring(0, i);
//      if (element.value[element.value.length - 1] != " ") element.focus();
//      var rand = Math.floor(Math.random() * (100)) + 140;
//      setTimeout(function () {
//        writer(i);
//      }, rand);
//    })(0);
//  }
//  
//  var elem = $('#type-area')[0];
//  type("testing", elem);
//  alert('past type');









//cycleIn(1000, 1500); // executes above
