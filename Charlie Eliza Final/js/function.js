var gameBoardOutline = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
]

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
  createCanvas(605, 605);
};

function draw() {
  // set background color
  background(200, 200, 225);

  // set a fill color (red, green, blue)
  fill(0, 180, 100);

  // set stroke properties
  stroke(0, 0, 0);
  strokeWeight(5);

// row 1
  rect(2, 2, 100, 100);
  rect(102, 2, 100, 100);
  rect(202, 2, 100, 100);
  rect(302, 2, 100, 100);
  rect(402, 2, 100, 100);
  rect(502, 2, 100, 100);

// row 2
  rect(2, 102, 100, 100);
  rect(102, 102, 100, 100);
  rect(202, 102, 100, 100);
  rect(302, 102, 100, 100);
  rect(402, 102, 100, 100);
  rect(502, 102, 100, 100);

// row 3
  rect(2, 202, 100, 100);
  rect(102, 202, 100, 100);
  rect(202, 202, 100, 100);
  rect(302, 202, 100, 100);
  rect(402, 202, 100, 100);
  rect(502, 202, 100, 100);

// row 4
  rect(2, 302, 100, 100);
  rect(102, 302, 100, 100);
  rect(202, 302, 100, 100);
  rect(302, 302, 100, 100);
  rect(402, 302, 100, 100);
  rect(502, 302, 100, 100);

// row 5
  rect(2, 402, 100, 100);
  rect(102, 402, 100, 100);
  rect(202, 402, 100, 100);
  rect(302, 402, 100, 100);
  rect(402, 402, 100, 100);
  rect(502, 402, 100, 100);

// row 6
  rect(2, 502, 100, 100);
  rect(102, 502, 100, 100);
  rect(202, 502, 100, 100);
  rect(302, 502, 100, 100);
  rect(402, 502, 100, 100);
  rect(502, 502, 100, 100);


  noStroke();
  stroke(255, 255, 255);
  strokeWeight(3);
  fill(0, 0, 0);
  ellipse(52, 52, 85, 85);


  noStroke();
  stroke(0, 0, 0);
  strokeWeight(3);
  fill(255, 255, 255);
  ellipse(152, 152, 85, 85);
};
