document.addEventListener('DOMContentLoaded', () => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
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

    // SET UP
    gsap.set(".paragraph, .o2-paragraph, .container, .red-overlay-container, .button-wrapper", { y: -window.innerHeight / 10 });

    flashSkill();

    // Insert the animation for the .button-wrapper to move up and disappear here
    const buttonWrapper = document.querySelector('.button-wrapper');

    ScrollTrigger.create({
      trigger: buttonWrapper,
      start: 'top 100px',
      end: '+=100',
      scrub: true,
      onEnter: () => gsap.to(buttonWrapper, { y: -100, opacity: 0 }),
      onLeaveBack: () => gsap.to(buttonWrapper, { y: 0, opacity: 1 }),
      markers: false // Optional: for debugging purposes
    });

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
    /////

    // Hover effect for the SVG inside .rounded-square using GSAP
    const roundedSquareImg = document.querySelector('.rounded-square img');
    const roundedSquare = document.querySelector('.rounded-square');
    const underline = document.querySelector('.start-text .underline'); // Ensure we're targeting the right element

    // Ensure the image element exists
    if (roundedSquareImg) {
        roundedSquareImg.addEventListener('mouseenter', () => {
            gsap.to(roundedSquareImg, { scale: 1.25, duration: 0.2 });
        });

        roundedSquareImg.addEventListener('mouseleave', () => {
            gsap.to(roundedSquareImg, { scale: 1, duration: 0.2 });
        });


        // Hover effect for the rounded square and underline using GSAP
        roundedSquare.addEventListener('mouseenter', () => {
            gsap.to(roundedSquare.querySelector('img'), { scale: 1.25, duration: 0.3 });
            gsap.to(underline, { width: '100%', duration: 0.3 }); // Animate the underline to full width
        });
    
        roundedSquare.addEventListener('mouseleave', () => {
            gsap.to(roundedSquare.querySelector('img'), { scale: 1, duration: 0.3 });
            gsap.to(underline, { width: '0%', duration: 0.3 }); // Animate the underline back to 0 width
        });
    }

    

    
    //////
    setTimeout(() => {
        gsap.to(".container", {
            duration: 1.75,
            y: 0,
            ease: "power2.out",
        });
    }, skills.length * flashInterval - flashInterval / 1.25 + 0);

    setTimeout(() => {
        gsap.to(".o2-paragraph", {
            duration: 1.75,
            y: 0,
            ease: "power2.out",
        });
    }, skills.length * flashInterval - flashInterval / 1.25 + 200);

    setTimeout(() => {
        gsap.to(".paragraph", {
            duration: 1.75,
            y: 0,
            ease: "power3.out",
        });
    }, skills.length * flashInterval - flashInterval / 1.25 + 400);

    setTimeout(() => {
        gsap.to(".button-wrapper", {
            duration: 1.75,
            y: 0,
            ease: "power3.out",
        });
    }, skills.length * flashInterval - flashInterval / 1.25 + 600);

    setTimeout(() => {
        gsap.to(".red-overlay-container", {
            duration: 1.75,
            y: 0,
            ease: "power3.out",
        });
    }, skills.length * flashInterval - flashInterval / 1.25 + 800);
 
    // USED Ease-Out Cubic in all 3
    // Target the demo reel link
    const demoReelLink = document.getElementById('demoReelLink');
    if (demoReelLink) {
        demoReelLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor link behavior
            lenis.scrollTo('.red-overlay', {
                offset: -115, // Replace offsetY with offset if needed
                duration: 1, // Duration of the scroll animation in seconds
                easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            });
        });
    }

    const watchReelLink = document.getElementById('watchReelLink');
    if (watchReelLink) {
        watchReelLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor link behavior
    
            // Use Lenis to scroll to the target section
            lenis.scrollTo('.red-overlay', {
                offset: -115, // Adjust this value as needed
                duration: 1, // Scroll animation duration in seconds
                easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            });
        });
    }

    const workLink = document.getElementById('workLink');
    if (workLink) {
        workLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor link behavior
            lenis.scrollTo('.work-sections', {
                offset: 0, // Offset from the top of the target section
                duration: 1, // Duration of the scroll animation in seconds
                easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            });
        });
    }
});