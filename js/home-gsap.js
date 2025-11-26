document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. TEXT SCRAMBLE EFFECT (Functional Animation) ---
    // Simulates a "decoding" effect on load
    const consoleLines = document.querySelectorAll(".console-text");
    const tl = gsap.timeline();

    // Animate Title
    tl.from(".hero-glitch", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power2.out"
    });

    // Staggered Console Lines with "Typewriter" feel
    consoleLines.forEach((line, index) => {
        tl.to(line, {
            opacity: 1,
            duration: 0.5,
            text: line.innerText, // Requires TextPlugin, simplified fallback here:
            onStart: () => {
                // Simple scramble logic for raw JS fallback
                const originalText = line.innerText;
                let iterations = 0;
                const interval = setInterval(() => {
                    line.innerText = originalText
                        .split("")
                        .map((letter, i) => {
                            if (i < iterations) return originalText[i];
                            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 36)];
                        })
                        .join("");
                    if (iterations >= originalText.length) clearInterval(interval);
                    iterations += 1/2; 
                }, 30);
            }
        }, "-=0.2");
    });

    // Reveal CTA
    tl.to(".hero-cta-group", { opacity: 1, y: 0, duration: 0.5 });


    // --- 2. CUSTOM CURSOR SPOTLIGHT (Dynamic Animation) ---
    const cursor = document.getElementById('cursor-highlight');
    
    // Only active on desktop
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1, // Quick follow
                ease: "power2.out"
            });
        });
    } else {
        if(cursor) cursor.style.display = 'none';
    }


    // --- 3. 3D TILT EFFECT FOR HACKATHON CARD (Interactive) ---
    const tiltCard = document.querySelector('.hack-main-card');
    
    if (tiltCard) {
        tiltCard.addEventListener('mousemove', (e) => {
            const rect = tiltCard.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            const xPct = x / rect.width;
            const yPct = y / rect.height;

            const rotateX = (0.5 - yPct) * 10; // Max 10deg rotation
            const rotateY = (xPct - 0.5) * 10;

            gsap.to(tiltCard, {
                rotationY: rotateY,
                rotationX: rotateX,
                transformPerspective: 1000,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        tiltCard.addEventListener('mouseleave', () => {
            gsap.to(tiltCard, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }

    // --- 4. TERMINAL LOG STAGGER (Simple Scroll Trigger) ---
    gsap.from(".log-entry", {
        scrollTrigger: {
            trigger: ".terminal-window",
            start: "top 80%",
        },
        opacity: 0,
        x: -20,
        stagger: 0.2,
        duration: 0.5
    });
});