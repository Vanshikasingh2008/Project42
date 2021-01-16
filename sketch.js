function draw() {
  background(0);  

  angleMode(DEGREES);

  secAngle = map(sec,0,60,0,360,12);
  minAngle = map(min,0,60,0,360,12);
  hrAngle  = map(hr,0,60,0,360,12);

  push();
  translate(800/2,400/2);
  rotate(secAngle);
  strokeWeight(7);
  stroke(0,0,255);
  line(0,0,100,50);
  pop();

  push();
  strokeWeight(7);  
  translate(800/2,400/2);
  rotate(minAngle);
  stroke(0,225,0);
  line(0,0,100,100);
  pop();

  push();
  translate(800/2,400/2);
  rotate(hrAngle);
  strokeWeight(7);
  stroke(225,0,0);
  line(0,0,100,150);
  pop();

  drawSprites();
}
