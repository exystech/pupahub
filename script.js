document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".btn", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

    gsap.utils.toArray(".feature").forEach(feature => {
        gsap.from(feature, {
            scrollTrigger: {
                trigger: feature,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2
        });
    });

    gsap.from(".cta", {
        scrollTrigger: {
            trigger: ".cta",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.8,
        duration: 1,
    });
});
