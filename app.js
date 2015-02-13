

window.topText ="";
window.bottomText = "";
var input1 = document.getElementById('topText');
var input2 = document.getElementById('bottomText');
console.log(input1);

input1.oninput = textListener;
input2.oninput = textListener;
console.log(input1);

function textListener (event) {
    console.log(event);
}

function drawMeme(){
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext("2d");

    //topLine
    ctx.fillText();
    ctx.strokeText();
    //buttomLine
    ctx.fillText();
    ctx.strokeText();
}