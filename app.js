window.imgSrc = null;

function textListener (event) {
    var id = event.srcElement.id;
    var text = event.srcElement.value;
    if(id == 'topText'){
        window.topText = text;
        console.log(window.topText)
    }
    else {
        window.bottomText = text;
    }
    drawMeme(window.imgSrc, window.topText, window.bottomText);
}

function drawMeme(image, topText, bottomText){
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext("2d");
    canvas.width = 480;
    canvas.height = 480;

    if(image !=null){
        ctx.drawImage(image,0,0, canvas.width, canvas.height);
    }

    ctx.font = "42px Impact";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;

    //topLine
    if(topText !=null){
        ctx.fillText(topText, canvas.width/2,canvas.height -400);
        ctx.strokeText(topText, canvas.width/2,canvas.height -400);
    }
    //bottomLine
    if(bottomText !=null){
        ctx.fillText(bottomText,canvas.width/2,canvas.height -50);
        ctx.strokeText(bottomText,canvas.width/2,canvas.height -50);
    }
}

function fileSelect(event){
    var file = event.target.files[0];

    var reader = new FileReader();
    reader.onload = function(fileObject){
        console.log(arguments);
        var data = fileObject.target.result;

        var img = new Image();
        img.onload = function(){
           window.imgSrc = this;
            drawMeme(window.imgSrc, null, null)
        };
        img.src = data;
    };
    reader.readAsDataURL(file);
}

function saveImage (){
    window.open(document.querySelector('canvas').toDataURL());
}

window.topText ="";
window.bottomText = "";
var input1 = document.getElementById('topText');
var input2 = document.getElementById('bottomText');
input1.oninput = textListener;
input2.oninput = textListener;

document.getElementById('file').addEventListener('change',fileSelect,false);
document.getElementById('save').addEventListener('click', saveImage, false);