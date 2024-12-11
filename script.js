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

    // Popup functionality
    let donationClicked = false;
    let telegramClicked = false;
    const donationPopup = document.getElementById('donationPopup');
    const telegramPopup = document.getElementById('telegramPopup');

    // Function to show popup
    function showPopup(popup) {
        popup.style.display = 'block';
    }

    // Function to hide popup
    function hidePopup(popup) {
        popup.style.display = 'none';
    }

    // Setup close buttons
    document.querySelectorAll('.popup-close').forEach(button => {
        button.addEventListener('click', function() {
            hidePopup(this.parentElement);
        });
    });

    // Donation button click handler
    document.getElementById('donateButton').addEventListener('click', function() {
        donationClicked = true;
        hidePopup(donationPopup);
    });

    // Telegram button click handler
    document.querySelector('#telegramPopup .popup-button').addEventListener('click', function() {
        telegramClicked = true;
        hidePopup(telegramPopup);
    });

    // Show donation popup every 20 seconds if not donated
    setInterval(function() {
        if (!donationClicked) {
            showPopup(donationPopup);
        }
    }, 20000);

    // Show telegram popup 10 seconds after page load and every 20 seconds thereafter
    setTimeout(function() {
        if (!telegramClicked) {
            showPopup(telegramPopup);
        }
        setInterval(function() {
            if (!telegramClicked) {
                showPopup(telegramPopup);
            }
        }, 20000);
    }, 10000);
});
