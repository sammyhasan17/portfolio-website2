// Select the HTML element with the class "inner-cursor"
let innerCursor = document.querySelector(".inner-cursor");

// Select the HTML element with the class "outer-cursor"
let outerCursor = document.querySelector(".outer-cursor");

// Add an event listener to the entire document to track the mouse movement
document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  
    let x = e.clientX;
    let y = e.clientY;

    //console.log(x, y); // Check the console to see the x and y values

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;

    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
 

}

  
//todo have my vs code update my gitHub which updates my live website

//hosted on GitHub Pages
// sammyhasan17.github.io/Portfolio/