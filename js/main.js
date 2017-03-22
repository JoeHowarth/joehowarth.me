/*jshint jquery: true*/
$(document).ready(function () {


//  var toIn = $('.bio').children().first();
//  //  toIn.fadeOut().delay.next().fadeOut();
//  toIn.siblings().show();

  function cycleIn(animTime, interTime) {
    // fades in siblings,
    toIn = toIn.fadeIn(animTime).next();
    if (toIn.length !== 0) {
      setTimeout(function () {
        cycleIn(animTime, interTime);
      }, interTime);
    }
  }
  //cycleIn(1000, 1500); // executes above

  $('.bio:first-child').typed({
    strings: ['Hello World!',
             'This is Joe Howarth speaking',
             'hmm, what should I write?',
             'Well, this is MY site after all, <br> so I\'ll talk a little about myself!',
             '...'],
    typeSpeed: 5
  });
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






});
