// scripts.js

// ... (other functions)
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
    // Show the welcome message
    swal({
        title: "Welcome!",
        text: "Welcome to the GTA:SA Mods Collection!",
        icon: "success",
        button: "Let's go!",
    });

    // Set the 'welcomeMessageShown' cookie for 24 hours
    setCookie('welcomeMessageShown', 'true', 24);
}

// Attach click event listeners to all download links and cookie consent logic after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle download links
    var downloadLinks = document.querySelectorAll('a[download]');
    downloadLinks.forEach(function(link) {
        link.addEventListener('click', handleDownloadConfirmation);
    });

    // Cookie consent logic
    var cookieConsentBanner = document.getElementById('cookieConsentBanner');
    if (cookieConsentBanner) { // Check if the element exists
        var acceptButton = document.getElementById('cookieAccept');
        var rejectButton = document.getElementById('cookieReject');
        var closeButton = document.getElementById('cookieClose');

        // Function to hide the consent banner
        function hideConsentBanner() {
            cookieConsentBanner.style.display = 'none';
        }

        // Check if the consent has already been given or rejected
        var cookieConsent = getCookie('cookieConsent');
        if (cookieConsent === 'accepted' || cookieConsent === 'rejected') {
            hideConsentBanner();
        } else {
            // Show the cookie consent banner
            cookieConsentBanner.style.display = 'block';
        }

        // Event listener for "I Accept"
        acceptButton.addEventListener('click', function() {
            setCookie('cookieConsent', 'accepted', 24);
            hideConsentBanner();
        });

        // Event listener for "Reject"
        rejectButton.addEventListener('click', function() {
            setCookie('cookieConsent', 'rejected', 24);
            hideConsentBanner();
        });

        // Event listener for closing the banner
        closeButton.addEventListener('click', function() {
            setCookie('cookieConsent', 'rejected', 24);
            hideConsentBanner();
        });
    }
});
