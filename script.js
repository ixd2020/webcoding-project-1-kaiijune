/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


function mobilemenu() {
            var x = document.getElementById("mytopnav");

            if (x.className === "topnav") {
                x.className = "topnav responsive";
            } else {
                x.className = "topnav";
            }
        }
  
