const smallMenu = document.querySelector('#small-menu');
const hiddenMenu = document.querySelector('#hidden-menu');
const header = document.querySelector('#header');
const container = document.querySelector('#container');
const footer = document.querySelector('#footer');
const close = document.querySelector('#close');

smallMenu.addEventListener("click", () => {
    
    hiddenMenu.classList.toggle('push-menu');
    hiddenMenu.classList.remove('d-none');
    header.classList.toggle('d-none');
    header.classList.remove('header');
    container.classList.toggle('d-none');
    container.classList.remove('container');
    footer.classList.toggle('d-none');
    footer.classList.remove('footer');
    close.classList.remove('d-none');
});

close.addEventListener("click", () => {
    hiddenMenu.classList.toggle('d-none');
    hiddenMenu.classList.remove('push-menu');
    header.classList.toggle('header');
    header.classList.remove('d-none');
    container.classList.toggle('container');
    container.classList.remove('d-none');
    footer.classList.toggle('footer');
    footer.classList.remove('d-none');
    close.classList.toggle('d-none');
})