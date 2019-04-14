// console.log("Successfully Linked");
//
// ===== Used to fill deck when not using API
//
// let suits = ["diamonds","hearts","spades","clubs"];
// let ranks = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
// let cards = [];
//
// let fillDeck = () => {
// 	for (suit of suits) {
// 		for (rank of ranks) {
//
// 			let newCard = {
// 				rank: rank,
// 				suit: suit,
// 				cardImage: "images/playing-cards-front/"+rank+"_of_"+suit+".png"
// 			};
// 			cards.push(newCard);
//
// 		}
// 	}
// };

// fillDeck(); //fills cards array full of the 52 unique playing cards (in order)

let cardsInPlay=[];
let board = document.getElementById("game-board");
let dir = "/images/";
let checkForMatch = () => {

    if (cardsInPlay.length>=2)
    {
			let card1elem = document.getElementById(cards.indexOf(cardsInPlay[0]));
			let card2elem = document.getElementById(cards.indexOf(cardsInPlay[1]));

			if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
				setTimeout( () => {
					// alert ("You found a match!")
					card1elem.setAttribute("src",dir+"white.png");
					card2elem.setAttribute("src",dir+"white.png");

				},500);
			}
			else {
				setTimeout( () => {
					// alert ("Sorry, try again. ")
					card1elem.setAttribute("src",dir+"playing-card-back.png");
					card2elem.setAttribute("src",dir+"playing-card-back.png");

				},500);

			}
			cardsInPlay.length=0;

	}
};
function flipCard() {

	// console.log("attempting to flip card",this);

	let cardId= this.getAttribute("id");
	let cardSrc = this.getAttribute("src");
	// console.log("User flipped"+ cards[cardId]);

	if (cardSrc ===( dir+"white.png") ) {
		// console.log("card already removed");
	}
	else {
		if (this.getAttribute("src")=== (dir+"playing-card-back.png"))
		{
			this.setAttribute("src",cards[cardId].cardImage);
			cardsInPlay.push(cards[cardId]);
			checkForMatch();
		}
		else{
			if (cardsInPlay.length==1) {
				cardsInPlay.length = 0;
				this.setAttribute("src",dir+"playing-card-back.png");
			}
		}
	}
};

let makeDeck = async () => {
	cards = [];
	let newCards = await getDeck();

	for (card of newCards) {
		let newCard = {
			rank: card.value,
			suit: card.suit,
			cardImage: "images/playing-cards-front/"+card.value+"_of_"+card.suit+".png"
		};
		cards.push(newCard);
	};
};

let createBoard = async () => {

	await makeDeck();
	let board = document.getElementById("game-board")
	board.innerHTML="";
	// console.log(cards);
	for (let i = 0;i<cards.length;i++)
	{

		let cardElement = document.createElement('img');
		cardElement.setAttribute("class","card");
		cardElement.setAttribute("src",dir+"playing-card-back.png");
		cardElement.setAttribute("id",i);
		cardElement.addEventListener("click",flipCard);
		board.appendChild(cardElement);

	}
};


let startButton = document.createElement('img');
startButton.setAttribute("src",dir+"start.png");
startButton.setAttribute("id","start-button");
startButton.addEventListener("click",createBoard);

let gameButtons = document.getElementById("game-buttons")
gameButtons.appendChild(startButton);
