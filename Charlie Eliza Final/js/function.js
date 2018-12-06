var gameBoard = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
]



function setup() {
  // set canvas size
  createCanvas(606, 606);
};

function draw() {
  // set background color
  background(200, 200, 225);

  // set a fill color (red, green, blue)
  fill(0, 180, 180);

  // set stroke properties
  stroke(0, 0, 255);
  strokeWeight(5);

  // draw a rectangle
  rect(2, 2, 100, 100);
  rect(2, 102, 100, 100);
  rect(2, 202, 100, 100);
  rect(2, 302, 100, 100);
  rect(2, 402, 100, 100);
  rect(2, 502, 100, 100);

  rect(102, 2, 100, 100);
  rect(202, 2, 100, 100);
  rect(302, 2, 100, 100);
  rect(402, 2, 100, 100);
  rect(502, 2, 100, 100);





};
