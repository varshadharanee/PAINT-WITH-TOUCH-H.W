var last_x;
var last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var new_width = screen.width - 70;
var new_height = screen.height - 300;
var width = screen.width;

if (screen.width < 992){
   document.getElementById("myCanvas").width=new_width;
   document.getElementById("myCanvas").height=new_height;
   document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
    console.log(last_y , last_x);
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokStyle = "purple";
    ctx.lineWidth = 1;
    ctx.arc(current_x,current_y,20,0,2*Math.PI);
    ctx.stroke();
    console.log(last_y + " " + last_x );
    console.log(current_y + " " + current_x )


    last_x = current_x;
    last_y = current_y;

}


