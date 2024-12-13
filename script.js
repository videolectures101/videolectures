document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all select elements
    const selects = document.querySelectorAll('.dropdown-select');
    
    selects.forEach(select => {
        select.addEventListener('change', function(e) {
            const selectedTopic = e.target.value;
            const selectId = e.target.id;
            
            // Handle the selection based on which dropdown was used
            switch(selectId) {
                case 'videoLectures':
                    console.log('Video Lecture selected:', selectedTopic);
                    // Add your video lecture logic here
                    break;
                case 'speedTest':
                    console.log('Speed Test selected:', selectedTopic);
                    // Add your speed test logic here
                    break;
                case 'resources':
                    console.log('Resource selected:', selectedTopic);
                    // Add your resources logic here
                    break;
            }
        });
    });

    // Add upgrade to pro message
    const mainContent = document.querySelector('main') || document.body;
    const upgradeDiv = document.createElement('div');
    upgradeDiv.className = 'upgrade-banner';
    upgradeDiv.innerHTML = `
        <p>🌟 Want unlimited access to all video lectures and resources? 
           <a href="https://videolectures101.github.io/videolectures/" class="upgrade-link">
             Upgrade to Pro now!
           </a>
        </p>
    `;
    mainContent.insertBefore(upgradeDiv, mainContent.firstChild);

    // Hamburger menu toggle
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Debugging: Check if telegramPopup exists
    const telegramPopup = document.getElementById('telegramPopup');
    if (telegramPopup) {
        console.log('Telegram Popup Element Found');
        telegramPopup.style.display = 'block';
    } else {
        console.error('Telegram Popup Element Not Found');
    }
});

// Close popup function
function closePopup() {
    const telegramPopup = document.getElementById('telegramPopup');
    if (telegramPopup) {
        telegramPopup.style.display = 'none';
    }
}
