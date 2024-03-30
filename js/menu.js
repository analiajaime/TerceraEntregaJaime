document.addEventListener('DOMContentLoaded', () => {
    const openMenu = document.querySelector("#open-menu");
    const closeMenu = document.querySelector("#close-menu");
    const aside = document.querySelector("aside");

    if (openMenu && closeMenu && aside) {
        openMenu.addEventListener("click", () => {
            aside.classList.add("aside-visible");
        });

        closeMenu.addEventListener("click", () => {
            aside.classList.remove("aside-visible");
        });
    } else {
        console.log('Alguno de los elementos no se encuentra en el DOM');
    }
});
