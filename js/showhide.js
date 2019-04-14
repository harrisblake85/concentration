let ibutton = document.getElementById("i-button");
let gbutton = document.getElementById("g-button");

let swapInstructions = () => {
	let elements = document.getElementsByClassName("instruct");

	for (element of elements) {
		if (element.getAttribute("hidden")==1) {
			element.removeAttribute("hidden");
			ibutton.innerHTML="Hide Instructions";
		}
		else {
			element.setAttribute("hidden",1)
			ibutton.innerHTML="Show Instructions";
		}
	}
};

let swapGame = () => {
	let elements = document.getElementsByClassName("game");

	for (element of elements) {
		if (element.getAttribute("hidden")==1) {
			element.removeAttribute("hidden");

			gbutton.innerHTML="Hide Game";
		}
		else {
			element.setAttribute("hidden",1)
			gbutton.innerHTML="Show Game";
		}
	}
};

ibutton.addEventListener("click",swapInstructions);
gbutton.addEventListener("click",swapGame);
