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

    // Function to get random time between min and max seconds
    function getRandomTime(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
    }

    // Function to schedule next popup
    function scheduleNextDonationPopup() {
        if (!donationClicked) {
            const nextTime = getRandomTime(15, 30); // Random time between 15-30 seconds
            setTimeout(() => {
                showPopup(donationPopup);
                scheduleNextDonationPopup(); // Schedule next popup
            }, nextTime);
        }
    }

    function scheduleNextTelegramPopup() {
        if (!telegramClicked) {
            const nextTime = getRandomTime(15, 30); // Random time between 15-30 seconds
            setTimeout(() => {
                showPopup(telegramPopup);
                scheduleNextTelegramPopup(); // Schedule next popup
            }, nextTime);
        }
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

    // Start the random popup scheduling after initial delays
    setTimeout(() => {
        showPopup(donationPopup);
        scheduleNextDonationPopup();
    }, getRandomTime(5, 10)); // First donation popup between 5-10 seconds

    setTimeout(() => {
        showPopup(telegramPopup);
        scheduleNextTelegramPopup();
    }, getRandomTime(10, 15)); // First telegram popup between 10-15 seconds
});
