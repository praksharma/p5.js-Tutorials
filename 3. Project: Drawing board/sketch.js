let widthGlobal=heightGlobal=400
let radius=2.5
function setup() { //executes one time only
  let widthGlobal=heightGlobal=400
  createCanvas(400, 400); //canvas size in pixels
  // Help at https://p5js.org/reference/#/p5/createCanvas
  background(170, 255, 0) // from https://www.w3schools.com/colors/colors_picker.asp
  button = createButton("RESET");
  button.mouseClicked(changeBG);
  let widthButton=80;
  let heightButton=20;
  button.size(widthButton,heightButton);
  button.position((widthGlobal-widthButton)/2, heightGlobal);
  //button.style("font-family", "Comic Sans MS");
  //button.style("font-size", "48px");
  button1 = createButton("size (-)");
  button1.mouseClicked(radiusMinus)
  button1.size(widthButton,heightButton);
  button1.position(0, heightGlobal);
  button2 = createButton("size (+)");
  button2.mouseClicked(radiusPlus)
  button2.size(widthButton,heightButton);
  button2.position(widthGlobal-widthButton, heightGlobal);
}

function draw() {  //executes repeadtedly
  // Adding text
  string='Drawing Board'
  //textSize(20);
  textFont('Helvetica',25);
  widthtext=textWidth(string)
  heighttext=textAscent()
  text(string,(widthGlobal-widthtext)/2, heighttext);
  // Adding line
  clearance=1.2
  line(0,heighttext*clearance,widthGlobal,heighttext*clearance)
     
}

function mousePressed(){
  if (mouseY>heighttext*clearance+radius){ // not allowing drawing to go above the line
  // Adding Brush
  fill(random(0,100),50)
  circle(mouseX,mouseY,radius*2)
  } 
  
}
function changeBG(){
    background(170, 255, 0)
    radius=2.5
}
function radiusMinus(){
    radius-=0.3
}
function radiusPlus(){
    radius+=0.3
}