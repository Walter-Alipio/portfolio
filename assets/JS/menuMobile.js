const menuButton = document.querySelector('[data-menu="button"]');
const menuItem = document.querySelectorAll("[data-item]");

const menuActive = () => {
    const menu = document.querySelector('[data-menu="menu"]');
    menu.classList.toggle("active");
    menuButton.classList.toggle("button-active");
};

menuButton.addEventListener("click", menuActive);

menuItem.forEach((item) => {
    item.addEventListener("click", menuActive);
});
