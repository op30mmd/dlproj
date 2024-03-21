// scripts.js

// Function to set a cookie
function setCookie(name, value, hours) {
  var expires = "";
  if (hours) {
    var date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
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
