
window.onload = function() {
    $("#display").html(stopwatch.start)
 // $("#display").on("click", stopwatch.start);
//   $("#stop").on("click", stopwatch.stop);
//   $("#reset").on("click", stopwatch.reset);
//   $("#start").on("click", stopwatch.start);
};
var clockRunning = true;

// Our stopwatch object
var stopwatch = {

  time: 0,

  reset: function() {

    stopwatch.time = 0;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");

  },
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
   
      intervalId = setInterval(stopwatch.count, 1000);
     // clockRunning = true;
     
  },
  stop: function() {

    clockRunning = false;
  },
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
    if(converted == "00:30")
     {
         alert("You time is up");
         location.reload();
     }
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
