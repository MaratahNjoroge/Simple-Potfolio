$(document).ready(function(){
    $('.header').height($(window).height());
  })

 // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Alex Smith.", "Designer.", "Developer.", "Freelancer.", "Photographer"],
      typeSpeed: 100,
      loop: true,
    });
  });