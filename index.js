document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    const overlayText = document.querySelector('.overlay-text');
    let currentSkill = 0;
    const flashInterval = 250;
    const screenHeightHalf = window.innerHeight / 2;

    // Make overlay text visible immediately
    overlayText.style.visibility = 'visible';

    // Apply will-change for better performance and set initial visibility
    skills.forEach(skill => {
        skill.style.willChange = 'transform, opacity';
        skill.style.visibility = 'hidden'; // Set initial visibility for skills
    });

    // Function to flash skills one by one
    function flashSkill() {
        skills.forEach((skill, index) => {
            skill.style.display = index === currentSkill ? 'block' : 'none';
            if (index === currentSkill) {
                skill.style.visibility = 'visible'; // Make the skill visible when it's about to be displayed
            }
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
            duration: 1.1,
            y: screenHeightHalf * 1.15,
            ease: "power3.inOut",
        })
        .to(".skill, .overlay-text", {
            duration: 0.6,
            autoAlpha: 0,
            ease: "power4.in"
        }, 0);

        gsap.to("#full-screen-overlay", {
            duration: 1.35,
            top: "100%",
            ease: "power2.inOut",
            onComplete: function() {
                document.getElementById("full-screen-overlay").style.display = 'none';
            }
        });

    }, skills.length * flashInterval - flashInterval / 1.25);
});
