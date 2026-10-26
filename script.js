let nameLab;
let emailLab;
let messageLab;
document.getElementById("send").onclick = function(){
    nameLab = document.getElementById("name").value;
    document.getElementById("h3").textContent=`hello ${nameLab},`
    emailLab = document.getElementById("email").value;
    document.getElementById("h23").textContent=`your email ${emailLab},`
    messageLab = document.getElementById("message").value;
    document.getElementById("h33").textContent=`Thanks for your replay ${nameLab}.`
}