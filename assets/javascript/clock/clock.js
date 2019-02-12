


// this file will contain the functions that build the clock based on the current time
let buildClockElements = function(currentTime) {
  // currentTime is a moment.js time object
  // returns the html of the clock stuff
  //console.log(currentTime.format(`HH:mm:ss`));
  let myHtml = `<div id="watch">`;
  myHtml += buildFrameFace();
  myHtml += buildMinuteMarks();
  myHtml += buildDigitalWrap(currentTime);
  myHtml += buildDigits();
  myHtml += buildHands();
  myHtml += `</div>`

  return myHtml;
};

let buildFrameFace = function() {
  return `<div class="frame-face"></div>`;
};

let buildMinuteMarks = function() {
  return `<ul class="minute-marks">
  <li></li><li></li><li></li><li></li><li></li><li></li>
  <li></li><li></li><li></li><li></li><li></li><li></li>
  <li></li><li></li><li></li><li></li><li></li><li></li>
  <li></li><li></li><li></li><li></li><li></li><li></li>
  <li></li><li></li><li></li><li></li><li></li><li></li>
  <li></li><li></li><li></li><li></li><li></li><li></li>
  <li></li><li></li><li></li><li></li><li></li><li></li>
  <li></li><li></li><li></li><li></li><li></li><li></li>
</ul>`;
};

let buildDigitalWrap = function(currentTime) {
  let myReturn = `<div class="digital-wrap">`;
  myReturn += buildDigitHours(currentTime.hour());
  myReturn += buildDigitMinutes(currentTime.minute());
  myReturn += buildDigitSeconds(currentTime.second());
  myReturn += `</div>`;
  return myReturn;
};

let buildDigitHours = function(hour) {
  let myReturn = `<ul class="digit-hours">`;
  for(let i=0; i<24; i++) {
    let tempVar = i + hour;
    if(tempVar > 23) {
      myReturn += `<li>${tempVar - 24}</li>`;
    } else {
      myReturn += `<li>${tempVar}</li>`;
    }
  }
  myReturn += `</ul>`;
  return myReturn;
};

let buildDigitMinutes = function(minute) {
  let myReturn = `<ul class="digit-minutes">`;
  for(let i=0; i<60; i++) {
    let tempVar = i + minute;
    if(tempVar > 59) {
      myReturn += `<li>${tempVar - 60}</li>`;
    } else {
      myReturn += `<li>${tempVar}</li>`;
    }
  }
  myReturn += `</ul>`;
  return myReturn;
};

let buildDigitSeconds = function(second) {
  let myReturn = `<ul class="digit-seconds">`;
  for(let i=0; i<60; i++) {
    let tempVar = i + second;
    if(tempVar > 59) {
      myReturn += `<li>${tempVar - 60}</li>`;
    } else {
      myReturn += `<li>${tempVar}</li>`;
    }
  }
  myReturn += `</ul>`;
  return myReturn;
};

let buildDigits = function() {
  return `<ul class="digits">
  <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li>
  <li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li>
</ul>`;
}

let buildHands = function() {
  return `<div class="hours-hand"></div>
  <div class="minutes-hand"></div>
  <div class="seconds-hand"></div>`;
};