/*jshint jquery: true*/
$(document).ready(function () {

//  var bio = $('.bio');
//  bio.append('<p>before Testing</p>').delay(5000, function() {
//    bio.append('<p>Testing, testing</p>');
//  });

});

//
//  var strings = ['Hello World!',
//     'This is Joe Howarth speaking',
//       'hmm, what should I write?',
//       'Well, this is MY site after all, <br> so I\'ll talk a little about myself!',
//       '...'];
//  
//  var bio = $('.bio');
//  var p = '<p>_ </p>';
//  $('.bio').append('<p>_ _</p>');
//  var line = $('bio :nth-child(1)');
//  line.append('hello-world').after(p);
//  
//  





//
//  function typedCallbackFn() {
//    
//    if (counter++ >= strings.length - 1) {
//      return;      
//    }
////    alert(strings[counter]);
//    bio.append(p);
//    line = bio.children.eq(counter);
//    line.append(strings[counter]);
////    typedCallbackFn();
////    line.typed({
////      strings: [strings[counter]],
////      typeSpeed: 8,
////      callback: typedCallbackFn()
////    });
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








  var toIn = $('.bio').children().first();
  //  toIn.fadeOut().delay.next().fadeOut();
  toIn.siblings().show();

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
