document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const menu = document.getElementById("sideMenu");
    const items = document.querySelectorAll(".menu-items li");

    items.forEach((item, index) => {
        item.style.setProperty("--i", index);
    });

    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        hamburger.classList.toggle("active");
        menu.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove("active");
            menu.classList.remove("open");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            hamburger.classList.remove("active");
            menu.classList.remove("open");
        }
    });

});