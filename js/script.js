
document.addEventListener("DOMContentLoaded", () => {
    buttonWorks();
})

function buttonWorks() {
    let start = document.getElementById("start-btn");

    start.addEventListener("click", mouseClick);
    
    function mouseClick() {
        console.log("START BTN CLICKED");

        window.location.href = "/html/newPage.html"
    }
}