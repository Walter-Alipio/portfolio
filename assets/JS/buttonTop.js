//Botão voltar ao topo

const buttonTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 600) {
        buttonTop.classList.add("visible");
        return;
    }
    buttonTop.classList.remove("visible");
});
