// scripts.js

// Function to handle download confirmation
function handleDownloadConfirmation(event) {
  event.preventDefault();
  var modName = event.target.innerText;
  var downloadUrl = event.target.parentElement.href;

  swal({
    title: "Are you sure?",
    text: "Do you want to download " + modName + "?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDownload) => {
    if (willDownload) {
      window.location.href = downloadUrl;
    }
  });
}

// Check if the 'welcomeMessageShown' cookie is set
if (!getCookie('welcomeMessageShown')) {
  // Show the welcome message (assuming you still want this functionality)
  swal({
    title: "Welcome!",
    text: "Welcome to the GTA:SA Mods Collection!",
    icon: "success",
    button: "Let's go!",
  });

  // Set the 'welcomeMessageShown' cookie for 24 hours
  setCookie('welcomeMessageShown', 'true', 24);
}

// Attach click event listeners to all download links after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded!");

  var downloadLinks = document.querySelectorAll('a[download]');
  downloadLinks.forEach(function(link) {
    link.addEventListener('click', handleDownloadConfirmation);
  });
});

// Functions for cookie handling and user consent
function setCookie(name, value, hours) {
  var expires = "";
  if (hours) {
    var date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function getUserIP(onNewIP) {// callback function to pass IP
  // Use an external service to fetch the IP address (consider privacy implications)
  // Replace with your preferred method of fetching IP address
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => onNewIP(data.ip));
}

function handleConsentChoice(choice) {
  setCookie('cookieConsent', choice, 24); // Set cookie for 24 hours
  cookieConsentBanner.style.display = 'none'; // Hide the banner
}

// Get the cookie consent banner element
var cookieConsentBanner = document.getElementById('cookieConsentBanner');

// Check if the cookie consent banner should be shown
if (!getCookie('cookieConsent')) {
  cookieConsentBanner.style.display = 'block';

  // Attach event listeners to cookie consent banner buttons outside DOMContentLoaded
  var acceptButton = document.getElementById('cookieAccept');
  acceptButton.addEventListener('click', function() {
    var rejectButton = document.getElementById('cookieReject');
  rejectButton.addEventListener('click', function() {
    handleConsentChoice('rejected');
  });
  });

  var rejectButton = document.getElementById('cookieReject');
  rejectButton.addEventListener('click', function() {
    var rejectButton = document.getElementById('cookieReject');
  rejectButton.addEventListener('click', function() {
    handleConsentChoice('rejected');
  });
  });

  var closeButton = document.getElementById('cookieClose');
  closeButton.addEventListener('click', function() {
    var closeButton = document.getElementById('cookieClose');
  closeButton.addEventListener('click', function() {
    handleConsentChoice('rejected');
  });
});
}