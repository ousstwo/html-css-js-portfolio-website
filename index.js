// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links li a');

// Add click event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the "active" class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add the "active" class to the clicked link
        link.classList.add('active');
    });
});

// Get the contact button element
const contactButton = document.querySelector('.contact-button');

// Add a click event listener to the contact button
contactButton.addEventListener('click', () => {
    // Redirect to the mailto link when the button is clicked
    window.location.href = 'mailto:tounssi.mograph@gmail.com';
});

document.addEventListener('DOMContentLoaded', () => {
    const repeatingTextElement = document.getElementById('repeating-text');
    let text = '';

    // Significantly increase repetitions for a longer text string
    for (let i = 0; i < 500; i++) {
        text += '<span class="word">PASSION</span><span class="separator">•</span>';
    }

    repeatingTextElement.innerHTML = text; // Use innerHTML instead of textContent
});

function adjustFooterHeight() {
    const welcomeSection = document.getElementById('welcome-section');
    const footer = document.getElementById('footer-section');

    // Calculate the remaining height for the footer
    const remainingHeight = window.innerHeight - welcomeSection.offsetHeight;

    // Set the footer height to fill the remaining space, or to a minimum value
    footer.style.height = `${remainingHeight}px`;
}

// Adjust the footer height on load and when the window is resized
window.addEventListener('load', adjustFooterHeight);
window.addEventListener('resize', adjustFooterHeight);

// Creating a new MutationObserver instance
var observer = new MutationObserver(() => {
    // Your mutation handling logic goes here
    // For now, it's an empty function
});

document.addEventListener('DOMContentLoaded', () => {
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const videoContainer = document.getElementById('video-container');
    const videoElement = document.getElementById('welcome-video');
    const playButton = document.getElementById('play-button');

    thumbnailContainer.addEventListener('click', () => {
        // Hide the thumbnail and show the video
        thumbnailContainer.style.display = 'none';
        videoContainer.style.display = 'block';

        // Autoplay the video when the thumbnail is clicked
        videoElement.play();
    });

    // Show play button when video is paused
    videoElement.addEventListener('pause', () => {
        playButton.style.display = 'block';
    });

    // Hide play button when video is playing
    videoElement.addEventListener('play', () => {
        playButton.style.display = 'none';
    });

    // Play/pause video when play button is clicked
    playButton.addEventListener('click', () => {
        if (videoElement.paused) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    });
});
