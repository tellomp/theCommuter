// this function will execute when the page is done loading
$(function() {
  // start the clock
  //clockStart();
  let now = moment();
  $("#clock-div").html(buildClockElements(now));

  // attach the weather button to the weather api function
  $("#weatherSearch").on("click", function(event) {
    //console.log(event);
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing weather info
    var weatherInput = $("#weather-input")
      .val()
      .trim();
    searchZipCode(weatherInput);
  });

  searchNewsApi("", "#news-display");

  //============================================
  // attach the news search button to the news api function
  $("#newsSubmit").on("click", function(event) {
    event.preventDefault();

    searchNewsApi(
      $("#news-input")
        .val()
        .trim(),
      "#news-display"
    );
    $("#news-display").empty();
  });

  //=============================================
});


//We turned off function to stop Sam clock from pushing to the DOM
function clockStart() {
  // setInterval(function() {
  //   date = new Date();
  //   let hour = date.getHours();
  //   let minutes = date.getMinutes();
  //   let seconds = date.getSeconds();
  //   document.getElementById("time").innerHTML =
  //     hour + " : " + minutes + " : " + seconds;
  // }, 1000);
}
