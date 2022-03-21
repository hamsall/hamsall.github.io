// the background for this portfolio is based very heavily on the work of Daniel Shiffman - coding legend
// visit his site here http://codingtra.in
// support coding train here http://patreon.com/codingtrain
// Code for this p5 project: https://youtu.be/17WoOqgXsRM
/*
*/
var canvas;
let stars = [];
let speed;

function windowResized() {
  //console.log("resized");
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  for (let i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = 1;
  background('rgba(20,20,20,.1)');
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
