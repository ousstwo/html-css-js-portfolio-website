document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    let currentSkill = 0;
    const flashInterval = 250;
    const screenHeightHalf = window.innerHeight / 2;

    // Apply will-change for better performance
    skills.forEach(skill => {
        skill.style.willChange = 'transform, opacity';
    });

    // Function to flash skills one by one
    function flashSkill() {
        skills.forEach((skill, index) => {
            skill.style.display = index === currentSkill ? 'block' : 'none';
        });

        currentSkill++;
        if (currentSkill < skills.length) {
            setTimeout(flashSkill, flashInterval);
        }
    }

    flashSkill();

    // After your flashing sequence ends
    setTimeout(() => {
        const timeline = gsap.timeline();

        // Animate y movement and autoAlpha simultaneously
        timeline.to(".skill, .overlay-text", {
            duration: 1.1, // Duration for y movement
            y: screenHeightHalf * 1.15,
            ease: "power3.inOut" // Easing for y movement
        })
        .to(".skill, .overlay-text", {
            duration: 0.6, // Duration for autoAlpha
            autoAlpha: 0, // Handles both opacity and visibility
            ease: "power4.in" // Easing for autoAlpha
        }, 0); // Start at the same time as the first animation
        // Example using GSAP for animation
         gsap.to("#full-screen-overlay", {
            duration: 1.35, // duration of the animation in seconds
            top: "100%", // animate to slide down out of view
            ease: "power2.inOut", // easing function for a smooth effect
            onComplete: function() {
            document.getElementById("full-screen-overlay").style.display = 'none';
         }
});

// You can trigger this animation based on an event or after a delay

          

    }, skills.length * flashInterval - flashInterval / 1.25);
});

