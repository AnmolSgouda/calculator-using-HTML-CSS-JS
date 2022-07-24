
function anm() {
    let x = document.getElementById("tb").value = "";
    
}
function see(x) {
    document.getElementById("tb").value += x;
}
function solve() {
    let z = document.getElementById("tb").value;
    let y = eval(z);
    document.getElementById("tb").value = y;
   
}
function fun(){
    setTimeout(function(){alert("Welcome"),6000});
}