
window.addEventListener('load', () => {

    const loader = document.getElementById('loader');
    const message = document.getElementById('message');


    setTimeout(() => {
        message.innerHTML = '¡Listo!';
        clearInterval(this);
    }, 1500);

    setTimeout(() => {
        loader.transition = 'opacity 0.9 ease-out';
        loader.opacity = '0';
        clearInterval(this);
    }, 2000);

    setTimeout(() => {
        loader.style.display = 'none';
        clearInterval(this);
    }, 3000);
});
