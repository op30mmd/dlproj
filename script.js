// scripts.js

// Display a SweetAlert welcome message when the page loads
window.onload = function() {
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
            var modName = event.target.innerText;
            swal({
                title: "Are you sure?",
                text: "Do you want to download " + modName + "?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDownload) => {
                if (!willDownload) {
                    event.preventDefault();
                }
            });
        });
    });
};
