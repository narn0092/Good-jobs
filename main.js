var a=["pikachu","Squirtle"]
console.log(a);
a.push("magikrab");
console.log(a);
a.unshift("Charmander");
console.log(a);
a.pop();
console.log(a);
a.sort();
console.log(a);

function myFunction(){
    alert("Hello");
}
function myFormFunction(){
    alert("Good job");
    var x = document.forms["myForm"]["firstname"];
    alert(x.value);
}
function pageLoad(){
    var clickbutton=document.getElementById("clickme");
    clickbutton.onclick = myFunction;

    var form = document.getElementById("myForm");
    form.onsubmit=myFormFunction;
}
window.onload=pageLoad                 