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

    // Donation popup functionality
    const donationPopup = document.getElementById('donationPopup');
    let hasUserDonated = false;

    function showDonationPopup() {
        if (!hasUserDonated) {
            donationPopup.style.display = 'flex';
        }
    }

    // Show popup every 60 seconds if user hasn't donated
    setInterval(showDonationPopup, 60000);

    // Handle donation button click
    const donateButton = document.querySelector('.donate-button');
    donateButton.addEventListener('click', function() {
        hasUserDonated = true;
        donationPopup.style.display = 'none';
    });
});
