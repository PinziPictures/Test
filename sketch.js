function setup() {
  createCanvas(800,800);
  background(0,0,0);
  
}

function draw() {
  
  //ellipse(width/2,height/2,800,800);
  stroke(255,255,0);
  fill(255,255,0,800);
  //ellipse(mouseX,mouseY,20,20);
  line(pmouseX,pmouseY,mouseX,mouseY); //Indica le coordinate in cui è avvenuto un click del mouse
}