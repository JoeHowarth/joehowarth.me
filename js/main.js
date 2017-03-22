/*jshint jquery: true*/
$(document).ready(function () {
  $(".bio").toggle();


  var divs = $('bio').children,
    current = 0;

  myFadeIn($divs.eq(current));

  function myFadeIn(div) {
    $div.toggle(slow, myFadeIn($div.next()));
  }




});
