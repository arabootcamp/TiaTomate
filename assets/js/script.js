$(function () {
  // Handler for .ready() called.

  //Smooth Scrolling
  $("a").on('click', function (event) {

    widthDevice = $(window).width();
    let delta = 60;

    if (widthDevice >= 767.98)
      delta = 83;

    event.preventDefault();
    let hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - delta,
    }, 800);
  })
});