document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for button clicks

    document.getElementById("youtube").addEventListener("click", function () {
        window.open("https://www.youtube.com/@DylanRVods/live", "_blank");
    });

    document.getElementById("kick").addEventListener("click", function () {
        window.open("https://kick.com/DylanRoyleGaming", "_blank");
    });

    document.getElementById("twitch").addEventListener("click", function () {
        window.open("https://www.twitch.tv/DylanRoyleGaming", "_blank");
    });

    document.getElementById("Instagram").addEventListener("click", function () {
        window.open("https://Instagram.com/Dylan_R_Live", "_blank");
    });

    document.getElementById("Twitter").addEventListener("click", function () {
        window.open("https://twitter.com/Dylan_R_Live", "_blank");
    });

    document.getElementById("Tiktok").addEventListener("click", function () {
        window.open("https://www.tiktok.com/@dylan_ryt", "_blank");
    });

    document.getElementById("threads").addEventListener("click", function () {
        window.open("https://www.threads.net/Dylan_R_Live", "_blank");
    });

    document.getElementById("HomePage").addEventListener("click", function () {
        window.location.href = "index.html"
    });

    document.getElementById("Printable").addEventListener("click", function () {
        window.open("https://www.printables.com/@DylanRoyle_397433");
    });

    document.getElementById("Trovo").addEventListener("click", function () {
        window.open("https://www.Trovo.live/@DylanRoyle_397433");
    });

});


// Get the screen width and height
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// Display the screen width and height on the webpage
var screenDimensionsElement = document.getElementById('screenDimensions');
screenDimensionsElement.innerHTML = "Screen Width: " + screenWidth + ", Screen Height: " + screenHeight;
