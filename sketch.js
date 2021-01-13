function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  hr = hour();
  min = minute();
  sec = second();

}

function draw() {
  background(225,225,225);

  angleMode(DEGREES);

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle  = map(hr,0,60,0,360);

  push();
  rotate(hrAngle);
  translate(0,0);
  strokeWeight(7);
  stroke(0,0,255);
  line(400,200,30,0);
  pop();

  push();
  strokeWeight(7);
  rotate(minAngle);
  translate(0,0);
  stroke(0,225,0);
  line(400,200,50,0);
  pop();

  push();
  rotate(secAngle);
  translate(0,0);
  strokeWeight(7);
  stroke(225,0,0);
  line(400,200,100,0);
  pop();

  drawSprites();
}