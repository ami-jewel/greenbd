document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".hero-slide");

    let currentIndex = 0;
    const slideInterval = 4000; // 4 seconds

    function showNextSlide() {

        // remove active from current slide
        slides[currentIndex].classList.remove("active");

        // move to next
        currentIndex++;

        // reset if at end
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        // add active to new slide
        slides[currentIndex].classList.add("active");
    }

    setInterval(showNextSlide, slideInterval);

    /* ==============================
       MOBILE MENU TOGGLE
    =============================== */

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    if (toggle) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    /* ==============================
       MOBILE DROPDOWN CLICK
    =============================== */

    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {
        dropdown.addEventListener("click", () => {
            if (window.innerWidth <= 900) {
                dropdown.classList.toggle("active");
            }
        });
    }

});

