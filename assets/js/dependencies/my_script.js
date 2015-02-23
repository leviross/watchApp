$(document).ready(function(){
  // swal({
  //   title: "Welcome to Levi's personal music favorites!",
  //   text: "Play, pause, or even fade-in 6 of my best tracks, you're going to love this:)",
  //   type: "success",
  //   timer: 7000
  // });
  var newAlert = function(m){
    swal({
      title: "I love this " + m + " track!",
      text: "This message will auto-destruct in 4 seconds...",
      type: "success",
      timer: 4000
    });
  }

  //sweetAlert('Congratulations!', 'Your message has been successfully sent', 'success');

});

