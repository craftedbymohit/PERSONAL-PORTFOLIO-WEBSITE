var typed = new Typed('#element', {
    strings: ['Web Developer!!!', 'Graphic Designer!!!', 'Web Designer!!!', 'Video Editor!!!'],
    typeSpeed: 50,
    backSpeed: 30, // Optional: speed of backspacing
    backDelay: 1500, // Optional: delay before deleting
    loop: true
});
// var typed = new Typed('#element1', {
//     strings: [
//         "Build fast, secure, and scalable websites and web applications using modern,technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. From static landing pages to full - stack web platforms I turn ideas into full functional digital products with a focus on performance and user experience."],
//     typeSpeed: 30,
//     backDelay: 0,
//     showCursor: false,
//     loop: false,
//     smartBackspace: false,
// });
// var typed = new Typed('#element2', {
//     strings: [
//         "Design visually appealing graphics and intuitive user interfaces for websites, applications, and brand assets. Skilled in creating wireframes, mockups, logos, and layout designs that are not just beautiful but also aligned with user needs and brand goals."],
//     typeSpeed: 30,
//     backDelay: 0,
//     showCursor: false,
//     loop: false,
//     smartBackspace: false,
// });
// var typed = new Typed('#element3', {
//     strings: [
//         "Optimize websites for speed, responsiveness, and SEO, and deploy them efficiently using platforms like GitHub Pages, Vercel, Netlify, or traditional hosting. I ensure that your site is production-ready, mobile-friendly, and accessible to users across all devices."],
//     typeSpeed: 30,
//     backDelay: 0,
//     showCursor: false,
//     loop: false,
//     smartBackspace: false,
// });

// Trigger typing effect for the first service immediately on page load
new Typed("#element1", {
    strings: [
        "Build fast, secure, and scalable websites and web applications using modern technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. From static landing pages to full-stack web platforms, I turn ideas into fully functional digital products with a focus on performance and user experience."
    ],
    typeSpeed: 50,      // Speed of typing (ms per character)
    showCursor: true    // Show blinking cursor
});


// Flags to make sure second and third service animations trigger only once
let secondServiceTriggered = false;
let thirdServiceTriggered = false;


// Create an Intersection Observer to detect when elements scroll into view
const observer = new IntersectionObserver((entries) => {

    // Loop through all the observed entries (sections)
    entries.forEach(entry => {

        // If the section is currently visible in the viewport
        if (entry.isIntersecting) {

            // Check if the visible section is secondService and hasn't already triggered
            if (entry.target.id === "secondService" && !secondServiceTriggered) {
                secondServiceTriggered = true; // Set flag to true so it doesn't run again

                // Trigger Typed.js for second service
                new Typed("#element2", {
                    strings: [
                        "From social media creatives and marketing banners to website UI assets, I craft visually engaging designs that align with your brand identity. Whether it's logos, posters, or complete branding kits, I bring creativity and clarity to every visual element."
                    ],
                    typeSpeed: 50,
                    showCursor: true
                });
            }

            // Same logic for thirdService section
            if (entry.target.id === "thirdService" && !thirdServiceTriggered) {
                thirdServiceTriggered = true;

                new Typed("#element3", {
                    strings: [
                        "I design intuitive and responsive user interfaces using tools like Figma and Adobe XD. Whether you're prototyping a new app or revamping a product, I ensure every screen is optimized for usability and aesthetics."
                    ],
                    typeSpeed: 50,
                    showCursor: true
                });
            }

        }
    });

}, {
    // Trigger when at least 50% of the section is visible
    threshold: 0.5
});


// Tell the observer which sections to watch for visibility
observer.observe(document.getElementById("secondService"));
observer.observe(document.getElementById("thirdService"));
