// scripts.js

// Display a welcome message when the page loads
window.onload = function() {
    alert('Welcome to the GTA:SA Mods Collection!');

    // Attach click event listeners to all download links
    var downloadLinks = document.querySelectorAll('a[download]');
    downloadLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var modName = event.target.innerText;
            var confirmDownload = confirm('Do you want to download ' + modName + '? this will redirects you to another webpage');
            if (!confirmDownload) {
                event.preventDefault();
            }
        });
    });
};
