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
  

  // Social Media 
  const dropdown = document.querySelector('.dropdown');

  dropdown.addEventListener('mouseleave', () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
  });
  
  document.querySelectorAll('.dropdown-content a').forEach((item) => {
    item.addEventListener('click', () => {
      const dropdownContent = document.querySelector('.dropdown-content');
      dropdownContent.style.display = 'none';
    });
  });
  

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
}


// Nav Bar Buttons and Dropdown

function HomePage() {
  window.location.href = "index.html"
  // window.location.href = "About.html"
}

function SocialMedia() {
  window.location.href = "SocialMedia.html"
}

function PreviousWork() {
  window.location.href = "PreviousWork.html"
}

function AboutMe() {
  window.location.href = "About.html"
}

function YoutubeTest() {
  window.location.href = "https://youtube.com"
}