// Update the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Track link clicks (for analytics purposes)
document.addEventListener('DOMContentLoaded', function() {
    const trackClick = (id, linkType) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function() {
                console.log(`${linkType} link clicked`);
                // Here you could add actual analytics tracking code
            });
        }
    };

    // Track the main contact links
    trackClick('linkedin-link', 'LinkedIn');
    trackClick('email-link', 'Email');
    trackClick('resume-link', 'Resume');

    // Add smooth scrolling animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add subtle hover effect to the profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        profileImage.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Optional: Add typing animation for the bio if desired
    // Uncomment the following code to enable it
    /*
    const bioElement = document.querySelector('.bio p');
    if (bioElement) {
        const bioText = bioElement.textContent;
        bioElement.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < bioText.length) {
                bioElement.textContent += bioText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 30);
    }
    */
});

// Optional: Add a dynamic greeting based on time of day
function setGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    
    // Uncomment the following code to enable dynamic greeting
    /*
    const titleElement = document.querySelector('.title');
    if (titleElement) {
        const originalTitle = titleElement.textContent;
        titleElement.textContent = `${greeting}! I'm a ${originalTitle}`;
    }
    */
}

// Uncomment to enable the greeting
// setGreeting();