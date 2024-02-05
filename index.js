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

    // SET UP
    gsap.set("#right-widget , .paragraph, .o2-paragraph, .heure, .rabat", { y: -window.innerHeight / 10 });

    flashSkill();
    // After your flashing sequence ends, card down
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
        gsap.to("#right-widget, .heure, .rabat", {
            duration: 2,
            y: 0,
            ease: "power2.out",
        });
    }, skills.length * flashInterval - flashInterval / 1.25 + 0);

    setTimeout(() => {
        gsap.to(".paragraph", {
            duration: 2,
            y: 0,
            ease: "power2.out",
        });
    }, skills.length * flashInterval - flashInterval / 1.25 + 200);

    setTimeout(() => {
        gsap.to(".o2-paragraph", {
            duration: 2,
            y: 0,
            ease: "power2.out",
        });
    }, skills.length * flashInterval - flashInterval / 1.25 + 400);


      
    // Function to update Rabat clock
    function updateRabatClock() {
        var now = new Date(); // Get current time
        var utc = now.getTime() + now.getTimezoneOffset() * 60000; // Convert to UTC
        var rabatTime = new Date(utc + (3600000 * 1)); // Rabat is GMT+1

        var hours = rabatTime.getHours();
        var minutes = rabatTime.getMinutes();
        var seconds = rabatTime.getSeconds();

        // Add leading zero if less than 10
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        var timeString = hours + ':' + minutes + ':' + seconds;
        document.querySelector('.heure').innerText = timeString;
    }

    const tl = gsap.timeline({
        scrollTrigger: {
          start: "top top",
          end: "+=1300",
          scrub: 0.5,
          pin: true,
          // markers: true
        }
      });

      // Adjust these animations for your element
      tl.to(".trailer", { yPercent: -20, duration: 1 }); // Moves up 50% of its height
    
    // Update the clock every second
    setInterval(updateRabatClock, 1000);

    // Target the demo reel link
    const demoReelLink = document.getElementById('demoReelLink');

    // Ensure the link and target element exist
    if (demoReelLink) {
        demoReelLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor link behavior

            // Use GSAP to scroll to the demo reel section. Adjust the selector as needed.
            gsap.to(window, {duration:1, scrollTo: ".demo-reel"});
        });
    }
});