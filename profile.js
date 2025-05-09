document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
});
emailjs.init("SVv7tKbpi4DUs_4hd"); // Your actual public key
emailjs.send("service_wov5gmg", "template_ov4is2i", params) // Your actual service and template IDs