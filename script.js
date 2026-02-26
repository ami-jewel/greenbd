document.addEventListener("DOMContentLoaded", function () {

    fetch("data.json")
        .then(response => response.json())
        .then(data => {

            loadHeader(data.header);
            loadSlides(data.home.slides);
            loadServices(data.services);

        })
        .catch(error => console.error("JSON Load Error:", error));
});


/* ================= HEADER ================= */
function loadHeader(header) {

    const headerLeft = document.querySelector(".header-left");
    const nav = document.querySelector(".nav-links");

    if (!headerLeft || !nav) return;

    headerLeft.innerHTML = `
        <img src="${header.logo}" class="logo-img">
    `;

    nav.innerHTML = "";

    header.menu.forEach(item => {
        nav.innerHTML += `<a href="${item.link}">${item.name}</a>`;
    });
}


/* ================= SLIDES ================= */
function loadSlides(slides) {

    const hero = document.querySelector(".hero");
    if (!hero) return;

    hero.innerHTML = "";

    slides.forEach((slide, index) => {

        const div = document.createElement("div");
        div.className = "hero-slide";

        // ✅ SET BACKGROUND IMAGE (not <img>)
        div.style.backgroundImage = `url(${slide.image})`;

        if (index === 0) div.classList.add("active");

        div.innerHTML = `
            <div class="slide-content">
                <h1>${slide.title}</h1>
                <p>${slide.description}</p>
            </div>
        `;

        hero.appendChild(div);
    });

    startSlider();
}


/* ================= SERVICES ================= */
function loadServices(services) {

    const grid = document.querySelector(".services-grid");
    if (!grid) return;

    grid.innerHTML = "";

    services.forEach(service => {

        const card = document.createElement("a");
        card.className = "service-card";
        card.href = service.link;

        card.innerHTML = `
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}


/* ================= SLIDER ================= */
function startSlider() {

    let slides = document.querySelectorAll(".hero-slide");
    let current = 0;

    setInterval(() => {

        slides[current].classList.remove("active");

        current++;
        if (current >= slides.length) current = 0;

        slides[current].classList.add("active");

    }, 4000);
}
