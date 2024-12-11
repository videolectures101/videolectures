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

    // Hamburger menu toggle
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Popup functionality - only for telegram
    const telegramPopup = document.getElementById('telegramPopup');

    // Function to show popup
    function showPopup(popup) {
        popup.style.display = 'block';
    }

    // Function to hide popup
    function hidePopup(popup) {
        popup.style.display = 'none';
    }

    // Setup close button
    document.querySelector('.close-btn').addEventListener('click', function() {
        hidePopup(telegramPopup);
    });

    // Telegram button click handler
    document.querySelector('#telegramPopup .join-btn').addEventListener('click', function() {
        hidePopup(telegramPopup);
    });

    // Show telegram popup immediately when page loads
    showPopup(telegramPopup);
});
