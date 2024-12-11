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
    let hasUserDonated = false;

    function showDonationPopup() {
        if (!hasUserDonated) {
            donationPopup.style.display = 'flex';
        }
    }

    // Show initial popup after a short delay
    setTimeout(showDonationPopup, 1000);

    // Show popup every 20 seconds
    setInterval(showDonationPopup, 20000);

    // Handle donation button click
    const donateButton = document.querySelector('.donate-button');
    if (donateButton) {
        donateButton.addEventListener('click', function() {
            hasUserDonated = true;
            donationPopup.style.display = 'none';
        });
    }

    // Add console logs for debugging
    console.log('Donation popup element:', donationPopup);
    console.log('Donate button element:', donateButton);
});
