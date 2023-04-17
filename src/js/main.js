
const narutoCharacter = document.getElementById('naruto-character');

let xAxis = 0,
    yAxis = 0;



const run = () => {

    xAxis += 4;
    narutoCharacter.style.left = `${xAxis}px`;

    narutoCharacter.classList.add('run');

    setTimeout(() => {

        narutoCharacter.classList.remove('run');

    }, 2000);
}

const control = (e) => {

    switch (e.keyCode) {

        case 39:

            run();

            break;

        case 38:
            console.log('arriba...');
            break;

        case 37: console.log('atrás...');
            break;

        case 40:
            console.log('abajo...');
            break;

        case 90:
            console.log('rasengan');
            break;

        case 88:
            console.log('rasenshuriken');
            break;

        case 67:
            console.log('gamayu_endan');
            break;

        default: console.log('Esta tecla no es válida');
    }
}


document.addEventListener('keydown', control);