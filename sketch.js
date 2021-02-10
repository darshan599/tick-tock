var hours;
var minutes;
var seconds;
var hourAngle;
var secondAngle;
var minuteAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  translate(200,200);
  rotate(-90);
  drawSprites();
  hours=hour();
  minutes=minute();
  seconds=second();

  secondAngle = map(seconds,0,60,0,360);
  hourAngle = map(hours%12,0,12,0,360);
  minuteAngle = map(minutes,0,60,0,360);

 push();
  rotate(secondAngle);
  stroke("orange");
  strokeWeight(5);
  line(0,0,100,0);

pop();

push();
  rotate(minuteAngle);
  stroke("red")
  strokeWeight(5);
  line(0,0,75,0);
 
pop();

push();
  rotate(hourAngle);
  stroke("blue");
  strokeWeight(5);
  line(0,0,50,0);
 
pop();

noFill();
arc(0,0,250,250,0,hourAngle);
arc(0,0,350,350,0,minuteAngle);
arc(0,0,300,300,0,secondAngle);



}