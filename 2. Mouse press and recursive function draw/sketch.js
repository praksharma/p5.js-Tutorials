function setup() { //executes one time only
  
  createCanvas(400, 400); //canvas size in pixels
  // Help at https://p5js.org/reference/#/p5/createCanvas
  background(0)

}
var x=30;//global variable
function draw() {  //executes repeadtedly
  //background(mouseX,0,mouseY); // R, G & B integer values
  line(mouseX, 0, mouseX, 400);
  fill(50)
  rect(0,0,mouseX,mouseY);
  fill(mouseX,50)
  
  rect(mouseX,mouseY,400,400);
  stroke(100)
  
  rect(50, 50, 30, x,5);
  x+=20;
    
 
  
}
function mousePressed(){
    background(0)
}