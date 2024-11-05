<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Smooth Scroll for Logo Link
        document.querySelector('.logo-link').addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            document.querySelector('#top-section').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Landing Section Slide-Up on Scroll
        document.addEventListener('scroll', () => {
            const landing = document.getElementById('landing');
            if (landing) {
                // Check if the user has scrolled past half the landing section
                if (window.scrollY > landing.offsetHeight / 2) {
                    landing.classList.add('slide-up');
                } else {
                    landing.classList.remove('slide-up');
                }
            }
        });

        // Redirect to Page with Fade-Out Effect on Button
        const button = document.querySelector('.learn-more');
        if (button) {
            button.addEventListener('click', () => {
                button.style.transition = "opacity 0.3s ease";
                button.style.opacity = 0; // Fade out effect

                setTimeout(() => {
                    window.location.href = 'memeventure-paradox.html';
                }, 300); // Redirect after fade-out
            });
        }

        // Set Background Images for Game Entries
        document.querySelectorAll('.game-entry').forEach(entry => {
            const bgUrl = entry.getAttribute('data-bg');
            if (bgUrl) {
                entry.style.backgroundImage = `url(${bgUrl})`;
                entry.style.backgroundSize = 'cover';
                entry.style.backgroundPosition = 'center';
            }
        });
    });
</script>
