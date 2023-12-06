
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

window.onload = function () {
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
window.onclick = function (event) {
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

function AboutMe() {
  window.location.href = "About.html"
}

function PWPCurrentProjects() {
  window.location.href = "PWProjects.html"
}

function LiveStream() {
  alert("Hey I'm Live");
  window.location.href = "google.com"
}

function SiteMap() {
  // window.location.href = "SiteMap.html"
  alert("Whoops Site Map is Not Live yet, Try again Soon");
  alert("Also you can use the /sitemaps.html in the URL Bar");

}

function GithubProject() {
  window.location.href = "Github/GithubProjects.html"
}