const resultlabel = document.getElementById("resultlabel");
const funinput = document.getElementById("funinput");
const funbutton = document.getElementById("funbutton");
funbutton.addEventListener("click", function(event){
    event.preventDefault();
    const value = funinput.value.trim();
    if (value == ""){
        resultlabel.textContent = "Please enter a num !";
        return;
    }
    const num = Number(value);
    if (num  % 2 == 0){
        resultlabel.textContent = "Your num is even";
    } else {
        resultlabel.textContent = "Your num is odd";
    }
});