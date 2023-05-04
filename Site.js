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
  
