
const narutoCharacter = document.getElementById('naruto-character');


const keyboardActions = {
    
    ArrowDown: () => {
        narutoCharacter.classList.add('crouch');
    },
    
    default: () => {
        console.log('Selecciona una tecla válida.');
    }

};


addEventListener("keydown", function ( e ) {
    
    const action = keyboardActions[e.code] || keyboardActions.default;

    action();

});


document.addEventListener('keyup', function ( e ) {
    
    narutoCharacter.classList.remove('crouch');

})