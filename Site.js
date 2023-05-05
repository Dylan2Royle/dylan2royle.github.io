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
  
  function calculate() {
    const birthday = new Date("2003-09-06");
    const now = new Date();
    
    let nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (nextBirthday < now) {
      nextBirthday = new Date(now.getFullYear() + 1, birthday.getMonth(), birthday.getDate()); }
    let yearsRemaining = nextBirthday.getFullYear() - birthday.getFullYear();
    if (now < nextBirthday) { yearsRemaining--; }
    
    document.getElementById("countdown").innerHTML = yearsRemaining;
    setTimeout(calculate, 1000);} 
    window.onload = calculate;

    
    if (window.history.replaceState) {
      window.history.replaceState(null, null, window.location.href.replace('.html', ''));
  }
  