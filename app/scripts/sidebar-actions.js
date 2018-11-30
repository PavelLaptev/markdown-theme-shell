const burgerButton = document.querySelector(".sidebar__burger"),
    sidebar = burgerButton.parentNode,
    sidebarMenu = document.querySelector(".sidebar__menu");

burgerButton.addEventListener("click", e => {
    e.target.classList.toggle("burger-close");
    sidebar.classList.toggle("show-sidebar");
});

window.addEventListener("resize", e => {
    if (e.target.innerWidth < 1020) {
        burgerButton.classList.remove("burger-close");
        sidebar.classList.remove("show-sidebar");
    }
});

export { burgerButton };
