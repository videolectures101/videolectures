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
                    break;
                case 'speedTest':
                    console.log('Speed Test selected:', selectedTopic);
                    break;
                case 'resources':
                    console.log('Resource selected:', selectedTopic);
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

    // Donation popup functionality
    const donationPopup = document.getElementById('donationPopup');
    const donateButton = document.querySelector('.donate-button');
    const closeButton = document.getElementById('closePopup');
    let hasUserDonated = false;
    let popupTimeout;

    // Function to show the donation popup
    function showDonationPopup() {
        if (!hasUserDonated && donationPopup) {
            donationPopup.style.display = 'flex';  // Show the popup
            popupTimeout = setTimeout(showDonationPopup, 20000);  // Reset the popup to show again after 20 seconds
        }
    }

    // Initial popup after 1 second
    setTimeout(showDonationPopup, 1000);

    // Handle donation button click
    if (donateButton) {
        donateButton.addEventListener('click', function() {
            hasUserDonated = true;  // Flag to prevent popup from showing again
            donationPopup.style.display = 'none';  // Hide the popup immediately
            clearTimeout(popupTimeout);  // Clear any previous popup timeouts
        });
    }

    // Handle close button click
    if (closeButton) {
        closeButton.addEventListener('click', function(e) {
            e.preventDefault();  // Prevent the default action
            donationPopup.style.display = 'none';  // Close the popup immediately
            clearTimeout(popupTimeout);  // Clear the previous timeout
            popupTimeout = setTimeout(showDonationPopup, 20000);  // Set a new timeout for 20 seconds before showing the popup again
            console.log('Close button clicked');  // Debug log
        });
    } else {
        console.log('Close button not found');  // Debug log if the button isn't found
    }

    // Add console logs for debugging
    console.log('Donation popup element:', donationPopup);
    console.log('Close button element:', closeButton);
});