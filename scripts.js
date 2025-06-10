document.addEventListener("DOMContentLoaded", function () {
    console.log("Site loaded!");

    const fadeInElements = document.querySelectorAll(".fade-in");
    window.addEventListener("scroll", () => {
        fadeInElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    });

    const awards = document.querySelectorAll(".award");
    awards.forEach((award) => {
        award.addEventListener("click", () => {
            alert(`This award highlights Chef Devin's media appearance: "${award.textContent}"`);
        });
    });
});
