window.onload = () => {

setTimeout(() => {

document.getElementById("intro").style.display = "none";

document.getElementById("main-content").style.display = "block";

}, 2500);

};

function copyCA(){

const ca =
document.getElementById("contract").innerText;

navigator.clipboard.writeText(ca);

alert("Contract copied!");

}