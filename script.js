document.addEventListener('scroll', () => {
    const landing = document.getElementById('landing');
    const gamesSection = document.getElementById('games-section');
    
    // Check if the user has scrolled past the landing section
    if (window.scrollY > landing.offsetHeight / 2) {
        landing.classList.add('slide-up');
    } else {
        landing.classList.remove('slide-up');
    }
});
