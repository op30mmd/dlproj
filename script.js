// scripts.js

// Display a SweetAlert welcome message when the page loads
document.addEventListener('DOMContentLoaded', function() {
    swal({
        title: "Welcome!",
        text: "Welcome to the GTA:SA Mods Collection!",
        icon: "success",
        button: "Let's go!",
    });
});

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

// Attach click event listeners to all download links
document.querySelectorAll('a[download]').forEach(function(link) {
    link.addEventListener('click', handleDownloadConfirmation);
});
