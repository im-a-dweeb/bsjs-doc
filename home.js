const dirElement = document.getElementsByClassName("directory");


document.addEventListener("DOMContentLoaded", function(e) {
    console.log("e")
    let genColor = Math.floor(Math.random() * 4)

    if (genColor == 0) {
        dirElement[0].style.borderColor = "red";
    }
    if (genColor == 1) {
        dirElement[0].style.borderColor = "green";
    }
    if (genColor == 2) {
        dirElement[0].style.borderColor = "blue";
    }
    if (genColor == 3) {
        dirElement[0].style.borderColor = "purple";
    }
  
    
})


