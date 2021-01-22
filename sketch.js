function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background(0);
translate(400,200);
rotate(-90);

  hr = hour();
  min = minute();
  sec = second(); 

  strokeWeight(10);
  stroke(0,0,255);
  noFill();
  secAngle = map(sec,0,60,0,360);
  arc(0, 0, 260,260,0,secAngle);

  strokeWeight(10);  
  stroke(0,225,0);
  noFill();
  minAngle = map(min,0,60,0,360);
  arc(0,0,280,280,0,minAngle);

  strokeWeight(10);
  noFill();
  stroke(225,0,0);
  hrAngle  = map(hr%12,0,12,0,360);
  arc(0,0,300,300,0,hrAngle);

  push();
  rotate(secAngle);
  stroke(0,0,255);
  line(0,0,80,0);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  line(0,0,78,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  line(0,0,60,0);
  pop();

  drawSprites();
}
