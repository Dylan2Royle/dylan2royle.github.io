// Pop up and pop down
function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup").classList.add("popup-animation");
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup").classList.remove("popup-animation");
  }

  function openTwitchPopup() {
    document.getElementById("twitch-popup").style.display = "block";
    document.getElementById("twitch-popup").classList.add("popup-animation");
  }
  
  function closeTwitchPopup() {
    document.getElementById("twitch-popup").style.display = "none";
    document.getElementById("twitch-popup").classList.remove("popup-animation");
  }
  
  function resetTwitchPopup() {
    document.getElementById("twitch-popup").style.display = "none";
    document.getElementById("twitch-popup").classList.remove("popup-animation");
  }

  
  // Birthday CountDown 
  function calculateAge(birthday) {
    const now = new Date();
    
    let nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (nextBirthday < now) {
      nextBirthday = new Date(now.getFullYear() + 1, birthday.getMonth(), birthday.getDate());
    }
    let yearsRemaining = nextBirthday.getFullYear() - birthday.getFullYear();
    if (now < nextBirthday) {
      yearsRemaining--;
    }
    
    return yearsRemaining;
  }
  
  function displayAge() {
    const birthday = new Date("2003-09-06");
    const age = calculateAge(birthday);
    document.getElementById("Countdown").textContent = age;
  }
  
  window.onload = function() {
    displayAge();
    startTime();
  };
  

  // Clock 
  function startTime() {
    var today = new Date();
    var timeZoneOffset = today.getTimezoneOffset() / 60;
    var userOffset = -timeZoneOffset; // user's timezone offset from UTC
    var londonOffset = 0; // London timezone offset from UTC
    var bstOffset = 1; // BST offset from UTC is 1 hour ahead
    var londonTime = new Date(today.getTime() + (londonOffset + bstOffset) * 60 * 60 * 1000); // calculate London time
    var userTime = new Date(londonTime.getTime() + userOffset * 60 * 60 * 1000); // calculate user's time
    var hour = userTime.getHours();
    var minute = userTime.getMinutes();
    var second = userTime.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    var gmtOffset = userOffset >= 0 ? '+' + userOffset : userOffset; // format GMT/BST offset
    var bstOrGmt = bstOffset == 1 ? 'BST' : 'GMT';
    document.getElementById('Timeclock').innerHTML = hour + ':' + minute + ':' + second + ' ' + ampm + ' (GMT' + gmtOffset + '/' + bstOrGmt + ')';
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
  }