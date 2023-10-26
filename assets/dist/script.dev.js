"use strict";

/* jshint esversion: 6 */

/* jshint -W083 */

/* hide du warning: Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (new_btn, positionSlide, refreshSlide) */
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
  var dots = document.querySelector(".dots");
  dots.style.gap = "10px";
  var new_btn = document.createElement("div");
  dots.appendChild(new_btn);
  new_btn.setAttribute("class", "dot");
  /* astuce pour calmer sshint qui n'aime pas l'utilisation du i de for
       dans une fonction interne ( problème Possible de portée )
     i est donc passé en arg à la fonction */

  (function (index) {
    // déclaration
    new_btn.addEventListener("click", function (event) {
      positionSlide = index;
      refreshSlide();
    });
  })(i); // call direct en passant i

};

for (var i = 0; i < slides.length; i++) {
  _loop(i);
} // Refresh de tous les éléments de la banner


function refreshSlide() {
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