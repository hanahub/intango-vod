jQuery(document).ready(function($) {
  
  setTimeout(startVideo, 10);
  function startVideo() {

  }

  var counter = 0;
  var width = $(".play-bar-body").width();
  var width1 = 0;
  var width2 = 0;

  move_buffering();

  function move_buffering() {
    var id = setInterval(frame_buffering, 200);
    function frame_buffering() {
      width1 += 2;
      if (width1 > width) {
        clearInterval(id);
      } else {
        width1 += 1;
        $(".play-bar-grey").css("width", width1 + "px");
      }
    }
  }

  move_playing();
  function move_playing() {

    var id = setInterval(frame_playing, 30);
    function frame_playing() {
      counter += 30;
      if (counter == 3000) {
        $(".overlay").fadeIn(800);
      }
      if (counter == 6000) {
        $(".svg-pause").hide();
        $(".svg-play").show();
        clearInterval(id);
      } else {
        width2 += 0.1;
        $(".play-bar-red").css("width", width2 + "px");
      }
    }
  }

  // $(".country_select").select2({});
});