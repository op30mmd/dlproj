// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle download confirmation
    function handleDownloadConfirmation(event) {
        event.preventDefault();
        var modName = event.target.innerText;
        var downloadUrl = event.target.parentElement.href;

        swal({
            title: "Are you sure?",
            text: "Do you want to " + modName + "?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDownload) => {
            if (willDownload) {
                window.location.href = downloadUrl;
            }
        });
    }

    // Attach click event listeners to all download links
    var downloadLinks = document.querySelectorAll('a[download]');
    downloadLinks.forEach(function(link) {
        link.addEventListener('click', handleDownloadConfirmation);
    });

    // Check if the 'welcomeMessageShown' is set in local storage
    if (!localStorage.getItem('welcomeMessageShown')) {
        // Show the welcome message
        swal({
            title: "Welcome!",
            text: "Welcome to the GTA:SA Mods Collection!",
            icon: "success",
            button: "Let's go!",
        });

        // Set the 'welcomeMessageShown' in local storage with the current timestamp
        localStorage.setItem('welcomeMessageShown', Date.now());
    } else {
        // Get the timestamp when the welcome message was last shown
        var lastShown = parseInt(localStorage.getItem('welcomeMessageShown'));
        var now = Date.now();

        // Check if 24 hours have passed since the last time the welcome message was shown
        if (now - lastShown > 24 * 60 * 60 * 1000) {
            // Show the welcome message again
            swal({
                title: "Welcome back!",
                text: "Welcome to the GTA:SA Mods Collection!",
                icon: "success",
                button: "Let's go!",
            });

            // Update the 'welcomeMessageShown' timestamp in local storage
           localStorage.setItem('welcomeMessageShown', now);
        }
    }
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
