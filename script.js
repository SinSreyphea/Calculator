const show = document.querySelector(".showOutput");
const keys = document.querySelectorAll("button"); 

// show all key when we click 
keys.forEach(element => {
    element.addEventListener("click", calculate)
});

function calculate() {
    let buttonText = this.innerText;
    let tempNum = show.textContent;
    // all clear
    if(buttonText == "AC"){
        show.innerText = "";
        return ;
    }
    // delete 
    if(buttonText == "Del"){
        show.innerText = show.textContent.substr(0, show.textContent.length-1);
        return ;
    }
    if(buttonText == "="){
        show.innerText = eval(tempNum);
        return;
    }
    // show number to output
    show.textContent += buttonText;
}