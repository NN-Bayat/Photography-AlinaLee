const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const ScrollOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img",{
    ...ScrollOption,
    origin: "right",
});

ScrollReveal().reveal(".header__content h1",{
    ...ScrollOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content h2",{
    ...ScrollOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__btn",{
    ...ScrollOption,
    delay: 1500,
});


