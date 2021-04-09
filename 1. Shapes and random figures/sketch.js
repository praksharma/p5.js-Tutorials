function setup() {
  
  createCanvas(400, 400); //canvas size in pixels
  // Help at https://p5js.org/reference/#/p5/createCanvas
  

}

function draw() {
  background(100,0,200); // R, G & B integer values
  line(mouseX, 0, mouseX, 400);
  fill(50)
  rect(0,0,mouseX,mouseY);
  fill(25)
  rect(mouseX,mouseY,400,400);
  

  rect(50, 50, 30, 30);
    
 
  
}