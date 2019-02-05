// this function will execute when the page is done loading
$(function() {
  // start the clock
  clockStart()
});

function clockStart() {
  setInterval(function() {
             date = new Date()
             let hour = date.getHours();
             let minutes = date.getMinutes();
             let seconds = date.getSeconds();
             document.getElementById("time").innerHTML = hour + " : "+ minutes + " : " + seconds;
}, 1000);
}
