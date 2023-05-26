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


// Create a new IntersectionObserver object, which takes a callback function as its argument
const observer = new IntersectionObserver((entries) => {
    // The callback function is called whenever the observed elements intersect with the viewport
    entries.forEach((entry) => {
      console.log(entry); // Print information about the intersection to the console
      // If the observed element is intersecting with the viewport, add the 'show' class to it
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        // Otherwise, remove the 'show' class from it
        entry.target.classList.remove('show');
      }
    });
  });
  
  // Find all elements on the page with the class 'hidden'
  const hiddenElements = document.querySelectorAll('.hidden');
  
  
  // For each hidden element, observe it with the IntersectionObserver object we created earlier
  hiddenElements.forEach((el) => observer.observe(el));
  