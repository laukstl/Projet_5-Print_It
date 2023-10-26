const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let banner = document.getElementById("banner");
let leftarrow = document.getElementById("leftarrow");
let rightarrow = document.getElementById("rightarrow");

let positionSlide = 0;

leftarrow.addEventListener("mousedown", (event) => slideArrow(event, -1));
rightarrow.addEventListener("mousedown", (event) => slideArrow(event, 1));

function slideArrow(event, direction) {
	event.preventDefault();

	switch (direction) {
		case -1: 
			positionSlide -= 1;
			break;
		case 1:
			positionSlide += 1;
			break;
	}

	if ( positionSlide > slides.length-1 ) { positionSlide = 0 }
	else if ( positionSlide < 0 ) { positionSlide = slides.length - 1 }

	refreshSlide();
}

for ( let i=0; i<slides.length; i++ ) {
	let new_btn = document.createElement("button");
	banner.appendChild(new_btn);
	new_btn.setAttribute("id", "dot" + i);
	new_btn.setAttribute("class", "dot");

	new_btn.addEventListener("click", function(event) {
		refreshSlide(newbtn)
		// let btns = document.querySelectorAll(".dot");
		// btns.forEach( (button) => button.classList.remove("dot_selected") )
		// this.classList.add("dot_selected");

		// let tagLine = document.querySelector("#banner p");
		// tagLine.innerHTML = slides[i].tagLine;

		// let image = document.querySelector(".banner-img");
		// image.setAttribute("src", `./assets/images/slideshow/${slides[i].image}`);
	});
};

function refreshSlide() {
	// console.log(" pos " + positionSlide);
	let btns = document.querySelectorAll(".dot");
	btns.forEach( (button, index) => {
		if ( positionSlide == index ) { button.classList.add("dot_selected"); }
		else { button.classList.remove("dot_selected"); }
	}
	)

	let tagLine = document.querySelector("#banner p");
	tagLine.innerHTML = slides[positionSlide].tagLine;

	let image = document.querySelector(".banner-img");
	image.setAttribute("src", `./assets/images/slideshow/${slides[positionSlide].image}`);
}