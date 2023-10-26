"use strict";

var slides = [{
  "image": "slide1.jpg",
  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
}, {
  "image": "slide2.jpg",
  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
}, {
  "image": "slide3.jpg",
  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
}, {
  "image": "slide4.png",
  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
}];
var banner = document.getElementById("banner");
var leftarrow = document.getElementById("leftarrow");
var rightarrow = document.getElementById("rightarrow");
var positionSlide = 0; // création des flèches de direction

leftarrow.addEventListener("mousedown", function (event) {
  return slideArrow(event, -1);
});
rightarrow.addEventListener("mousedown", function (event) {
  return slideArrow(event, 1);
});

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

  if (positionSlide > slides.length - 1) {
    positionSlide = 0;
  } else if (positionSlide < 0) {
    positionSlide = slides.length - 1;
  }

  refreshSlide();
} // création des boutons dots


var _loop = function _loop(i) {
  var new_btn = document.createElement("button");
  banner.appendChild(new_btn); // new_btn.setAttribute("id", "dot" + i); // inutilisé, sadly

  new_btn.setAttribute("class", "dot");
  new_btn.addEventListener("click", function (event) {
    positionSlide = i;
    refreshSlide();
  });
};

for (var i = 0; i < slides.length; i++) {
  _loop(i);
}

function refreshSlide() {
  // A chaque refresh on recheck TOUTES les classes dot
  var btns = document.querySelectorAll(".dot");
  btns.forEach(function (button, index) {
    if (positionSlide == index) {
      button.classList.add("dot_selected");
    } else {
      button.classList.remove("dot_selected");
    }
  });
  var tagLine = document.querySelector("#banner p");
  tagLine.innerHTML = slides[positionSlide].tagLine;
  var image = document.querySelector(".banner-img");
  image.setAttribute("src", "./assets/images/slideshow/".concat(slides[positionSlide].image));
}

refreshSlide();