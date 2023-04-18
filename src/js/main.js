
const narutoCharacter = document.getElementById('naruto-character');




const gamayu_endan = () => {

    narutoCharacter.classList.add('gamayu_endan');

    setTimeout(() => {
        narutoCharacter.classList.remove('gamayu_endan');
    }, 9000);
}

const rasengan = () => {

    narutoCharacter.classList.add('rasengan');
    
    setTimeout(() => {
        narutoCharacter.classList.remove('rasengan');
    }, 3000);
}

const run = () => {
    console.log('Corriendo');

    narutoCharacter.classList.add('run');
    
}


const keyboardActions = {
    
    ArrowDown: () => {
        narutoCharacter.classList.add('crouch');
    },

    KeyZ: () => gamayu_endan(),
    KeyX: () => rasengan(),
    
    default: () => {
        console.log('Selecciona una tecla válida.');
    }

};


addEventListener("keydown", function ( e ) {
    
    console.log( e.code );
    
    const action = keyboardActions[e.code] || keyboardActions.default;

    action();

});


document.addEventListener('keyup', function ( e ) {
    
    narutoCharacter.classList.remove('crouch');

})