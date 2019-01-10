// JavaScript Document

window.onload = function init() {
    console.log("Init fired.");

    
    var canvas = document.getElementById("canvas");

    canvas.addEventListener("click", function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
    });
    mousePressed = false;
    canvas.addEventListener("mouseleave", (function (e){
        mousePressed = false;
    }));
    canvas.addEventListener("mouseup", (function (e){
        mousePressed = false;
        console.log(mousePressed);
    }));
    canvas.addEventListener("mousemove", (function(e){
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        drawCanvas(x, y, mousePressed);
    }));
    canvas.addEventListener("mousedown", (function(e){
        mousePressed = true;
    }));
};

function drawCanvas(x, y, mousePressed){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    if(!mousePressed)
        return;
    context.beginPath();
    context.lineWidth = "5";
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.moveTo(x-5, y);
    context.lineTo(x, y);
    context.stroke();
}
