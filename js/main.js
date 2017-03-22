/*jshint jquery: true*/
$(document).ready(function () {


  var toIn = $('.bio').children().first();
  //  toIn.fadeOut().delay.next().fadeOut();


  function cycleIn(animTime, interTime) {
    // fades in siblings,
    toIn = toIn.fadeIn(animTime).next();
    if (toIn.length !== 0) {
      setTimeout(function () {
        cycleIn(animTime, interTime);
      }, interTime);
    }
  }
  cycleIn(1000, 1500); // executes above

  function type(string, element) {
    (function writer(i) {
      if (string.length <= i++) {
        element.value = string;
        return;
      }
      element.value = string.substring(0, i);
      if (element.value[element.value.length - 1] != " ") element.focus();
      var rand = Math.floor(Math.random() * (100)) + 140;
      setTimeout(function () {
        writer(i);
      }, rand);
    })(0);
  }
  
  $type("testing", $('#type-area')[0]);
  alert('past type');






});
