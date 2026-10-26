let nameLab;
document.getElementById("send").onclick = function(){
    nameLab = document.getElementById("name").value;
    document.getElementById("h2").textContent=`hello ${nameLab}`
}