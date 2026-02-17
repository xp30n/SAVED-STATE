document.addEventListener("DOMContentLoaded", () => {
  buttonWorks();
});

function buttonWorks() {
  // Storing the start button in a variable
  let start = document.getElementById("start-btn");

  // Creates a listener event to tell the DOM to look out for mouse clicks
  start.addEventListener("click", mouseClick);

  // Mouse Click function, storing the info on where to go when the start button is clicked
  function mouseClick() {
    console.log("START BTN CLICKED");

    window.location.href = "/html/newPage.html";
  }
}