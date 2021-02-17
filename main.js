
var last_position_of_x,last_position_of_y;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="green";
width_of_line=1;
var width=screen.width;
new_width=screen.width-70
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("touchstart");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    console.log("touchmove");
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("x last= "+last_position_of_x+", y last= "+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("x current= "+current_position_of_touch_x+", y current= "+current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);

    ctx.stroke();
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}