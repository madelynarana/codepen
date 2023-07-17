
const data = [
    {
        name: "drax",
        image: "././images/drax.png"
    },
    {
        name: "gamora",
        image: "././images/gamora.png"
    },
    {
        name: "groot",
        image: "././images/groot.png"
    },
    {
        name: "rocket",
        image: "././images/rocket.png"
    },
    {
        name: "stardlord",
        image: "././images/star_lord.png"
    },
    {
        name: "yondu",
        image: "././images/yondu.png"
    },
    {
        name: "drax",
        image: "././images/drax.png"
    },
    {
        name: "gamora",
        image: "././images/gamora.png"
    },
    {
        name: "groot",
        image: "././images/groot.png"
    },
    {
        name: "rocket",
        image: "././images/rocket.png"
    },
    {
        name: "stardlord",
        image: "././images/star_lord.png"
    },
    {
        name: "yondu",
        image: "././images/yondu.png"
    }
]

const
    divGrid    = document.querySelector('.grid'),
    btnNewGame = document.getElementById('btnNewGame');

let
    message           = document.getElementById('message'),
    score             = document.getElementById('score'),
    cardsChosenById   = [],
    cardsChosenByName = [],
    cardsWon          = []


score.innerHTML = "00";

const newGame = () => {
    score.innerHTML = "00";
    message.innerHTML = "";
    divGrid.innerHTML = "";
    data.sort(() => 0.5 - Math.random());
}


const createBoard = () => {

    newGame()

    data.map((data, index)=>{
        let img = document.createElement('img');
    
        img.setAttribute('src', './images/blank.png');
        img.setAttribute('data-id', index );
        img.addEventListener('click', flipCard );
        divGrid.appendChild( img );
        
    })
}

const flipCard = function() {

    message.innerHTML = "";

    let cardId = this.getAttribute('data-id');
    this.setAttribute('src', data[ cardId ].image )

    cardsChosenById.push( cardId );
    cardsChosenByName.push( data[cardId ].name )
    
    
    if (cardsChosenById.length === 2) {
        
        setTimeout( checkMatch, 500 )

    }
}

const checkMatch = function() {
    
    const
        cards   = document.querySelectorAll('.grid img'),
        cardOne = cardsChosenById[0],
        cardTwo = cardsChosenById[1];

    if (cardOne == cardTwo) {
        
        cards[ cardOne ].setAttribute('src', './images/blank.png');
        cards[ cardTwo ].setAttribute('src', './images/blank.png');

        setTimeout(() => {  
            message.innerHTML = "Selecciona una carta diferente";
        }, 900);
    
    }
    else if (cardsChosenByName[0] === cardsChosenByName[1]) {
    
        cards[ cardOne ].setAttribute('src', './images/white.png');
        cards[ cardTwo ].setAttribute('src', './images/white.png');
    
        cards[ cardOne ].removeEventListener('click', flipCard);
        cards[ cardTwo ].removeEventListener('click', flipCard);
        
        cardsWon.push(cardsChosenById);

        score.innerHTML = `0${cardsWon.length}`;

        setTimeout(() => {        
            message.innerHTML = "¡Encontrase una coincidencia!";
        }, 900);

    }
    else {
        cards[ cardOne ].setAttribute('src', './images/blank.png');
        cards[ cardTwo ].setAttribute('src', './images/blank.png');
    
    }
    cardsChosenById   = [];
    cardsChosenByName = [];

    if (cardsWon.length === data.length / 2) {
        
        setTimeout(() => {        
            message.innerHTML = "¡Ganaste!";
        }, 900);
    }
}

btnNewGame.addEventListener('click', createBoard);

createBoard();
