let testAces = () => {

	let cardElems = document.getElementsByClassName("card");
	console.log("cardelems,",cardElems);
	for (card of cardElems) {
		if (cards[card.getAttribute("id")].rank != "ACE" ) {
			card.setAttribute("src",dir+"white.png");
		};
	};

};

let testButton = document.createElement('img');
testButton.setAttribute("src",dir+"ace.png");
testButton.setAttribute("id","test-button");
testButton.addEventListener("click",testAces);

document.getElementById("game-buttons").appendChild(testButton);
