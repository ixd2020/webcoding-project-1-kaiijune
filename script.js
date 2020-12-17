/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

/*Mobile reponsive*/
function mobilemenu() {
  var x = document.getElementById("mytopnav");

  if (x.className === "topnav") {
    x.className = "topnav responsive";
  } else {
    x.className = "topnav";
  }
}

function myHam(x) {
  x.classList.toggle("change");
}

/*loading page*/
function loadingfinished() {
  setTimeout(showpage, 2000);
}

function showpage() {
  document.getElementById("loader").style.display = "none";
}

(function() {
  "use strict";
  $("i").click(function() {
    $(this)
      .next()
      .animate({
        width: "250px"
      });
  });
});

/*change color modes*/
function myFunction() {
  document.querySelector(".topnav").style.backgroundColor = "#699a9f";
  document.querySelector("footer").style.backgroundColor = "#699a9f";
}

/*Pond ripples*/

$(".full-landing-image").ripples({
  resolution: 256,
  perturbance: 0.04
});

/*test*/
