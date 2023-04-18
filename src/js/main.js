
const narutoCharacter = document.getElementById('naruto-character');
    
let xAxis = 0,
    maxleft = 500,
    minLeft = 50;


const AddClassAndSound = ( nameClass, soundById ) => {
    
    narutoCharacter.classList.add( nameClass );
    document.querySelector( soundById ).play();
    
}

const gamayu_endan = () => {
    
    AddClassAndSound('gamayu_endan', '#gamayu-sound');

    setTimeout(() => {
        narutoCharacter.classList.remove('gamayu_endan');
    }, 9000);

}

const rasengan = () => {
    
    AddClassAndSound('rasengan', '#rasengan-sound');

    setTimeout(() => {
        narutoCharacter.classList.remove('rasengan');
    }, 3000);
}

const run = () => {

    xAxis += 10;

    AddClassAndSound('run', '#run-sound');

    if (xAxis <= maxleft) narutoCharacter.style.left = `${xAxis}px`

}

const back = () => {

    xAxis -= 2;

    narutoCharacter.classList.add('jump');

    AddClassAndSound('jump', '#jump-sound');

    if (xAxis > minLeft) narutoCharacter.style.left = `${xAxis}px`;

}


const crouch = () => {

    AddClassAndSound('crouch', '#crouch-sound');
}

const jump = () => {

    AddClassAndSound('jump', '#jump-sound');

}

const rasenshuriken = () => {

    AddClassAndSound('rasenshuriken', '#rasenshuriken-sound');

    setTimeout(() => {

        narutoCharacter.classList.remove('rasenshuriken');

    }, 5000);

}

const keyboardActions = {

    ArrowUp:    () => jump(),
    ArrowDown:  () => crouch(),
    ArrowRight: () => run(),
    ArrowLeft:  () => back(),
    KeyZ:       () => gamayu_endan(),
    KeyX:       () => rasengan(),
    KeyC:       () => rasenshuriken(),
    default:    () => {
        console.log('Presione una tecla válida.');
    }

};


addEventListener("keydown", function (e) {

    console.log(e.code);

    const action = keyboardActions[e.code] || keyboardActions.default;

    action();

});


document.addEventListener('keyup', function (e) {

    narutoCharacter.classList.remove('crouch', 'run', 'jump');

})