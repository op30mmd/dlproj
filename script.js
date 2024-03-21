// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Display a SweetAlert welcome message when the page loads
    swal({
        title: "Welcome!",
        text: "Welcome to the GTA:SA Mods Collection!",
        icon: "success",
        button: "Let's go!",
    });

    // Attach click event listeners to all download links
    var downloadLinks = document.querySelectorAll('a[download]');
    downloadLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default download action
            var modName = event.target.innerText;
            var downloadUrl = event.target.parentElement.href;

            // Show the SweetAlert confirmation dialog
            swal({
                title: "Are you sure?",
                text: "Do you want to " + modName + "?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDownload) => {
                if (willDownload) {
                    // If confirmed, redirect to the download URL
                    window.location.href = downloadUrl;
                }
            });
        });
    });
});
