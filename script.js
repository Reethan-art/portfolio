let nameLab;
let emailLab;
let messageLab;
const resultlabel = document.getElementById("resultlabel");
const funinput = document.getElementById("funinput");
const funbutton = document.getElementById("funbutton");
document.getElementById("send").onclick = function(){
    nameLab = document.getElementById("name").value;
    document.getElementById("h3").textContent=`hello ${nameLab},`
    emailLab = document.getElementById("email").value;
    document.getElementById("h23").textContent=`your email ${emailLab},`
    messageLab = document.getElementById("message").value;
    document.getElementById("h33").textContent=`Thanks for your replay ${nameLab}.`
}
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