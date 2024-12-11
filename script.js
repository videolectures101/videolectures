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

    // Show popup when page loads
    window.onload = function() {
        document.getElementById('telegramPopup').style.display = 'block';
    }

    // Close popup function
    function closePopup() {
        document.getElementById('telegramPopup').style.display = 'none';
    }

    // Setup close button
    const closeBtn = document.querySelector('#telegramPopup .close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }

    // Telegram button click handler
    const telegramBtn = document.querySelector('#telegramPopup .join-btn');
    if (telegramBtn) {
        telegramBtn.addEventListener('click', closePopup);
    }

    // Show telegram popup immediately
    document.getElementById('telegramPopup').style.display = 'block';
});
