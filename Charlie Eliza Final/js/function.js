

var gameBoard = [
  [{x:2, y:2}, {x:102, y:2}, {x:202, y:2}, {x:302, y:2}, {x:402, y:2}, {x:502, y:2}],
  [{x:2, y:102}, {x:102, y:102}, {x:202, y:102}, {x:302, y:102}, {x:402, y:102}, {x:502, y:102}],
  [{x:2, y:202}, {x:102, y:202}, {x:202, y:202}, {x:302, y:202}, {x:402, y:202}, {x:502, y:202}],
  [{x:2, y:302}, {x:102, y:302}, {x:202, y:302}, {x:302, y:302}, {x:402, y:302}, {x:502, y:302}],
  [{x:2, y:402}, {x:102, y:402}, {x:202, y:402}, {x:302, y:402}, {x:402, y:402}, {x:502, y:402}],
  [{x:2, y:502}, {x:102, y:502}, {x:202, y:502}, {x:302, y:502}, {x:402, y:502}, {x:502, y:502}]
];

// stores all the pieces in objects

var blackPieces = [{x:252, y:252}, {x:352, y:352}]
var whitePieces = [{x:352, y:252}, {x:252, y:352}]




// var coor = ""
// document.onmousemove = handleMouseMove;
// function handleMouseMove(event) {
//   var mouseX = event.clientX;     // Get the horizontal coordinate
//   var mouseY = event.clientY;     // Get the vertical coordinate
//   coor = "X coords: " + mouseX + ", Y coords: " + mouseY;
//   // console.log(coor);
// };

var blackScore = blackPieces.length
var whiteScore = whitePieces.length

function calculateScore() {
  blackScore = blackPieces.length
  whiteScore = whitePieces.length
};

var thePieceColor = 0

function mouseClicked() {
  if (thePieceColor === 0) {
    thePieceColor = 255;
  } else {
    thePieceColor = 0;
  }
  // console.log(color)
}

var positionX = ""
var positionY = ""

function mousePressed() {
  positionX = mouseX
  positionY = mouseY

  if (positionX <= 100) {
    positionX = 52;
  } else if (positionX <= 200) {
    positionX = 152;
  } else if (positionX <= 300) {
    positionX = 252;
  } else if (positionX <= 400) {
    positionX = 352;
  } else if (positionX <= 500) {
    positionX = 452;
  } else if (positionX <= 600) {
    positionX = 552;
  } else {
    positionX = positionX
  }

  if (positionY <= 100) {
    positionY = 52;
  } else if (positionY <= 200) {
    positionY = 152;
  } else if (positionY <= 300) {
    positionY = 252;
  } else if (positionY <= 400) {
    positionY = 352;
  } else if (positionY <= 500) {
    positionY = 452;
  } else if (positionY <= 600) {
    positionY = 552;
  } else {
    positionY = positionY
  }

  // var piecePosition = {x:positionX, y:positionY, pieceColor:color}
  var piecePosition = {x:positionX, y:positionY}

  if (thePieceColor === 0) {
    blackPieces.push(piecePosition);
  } else {
    whitePieces.push(piecePosition);
  }
  redraw();
  calculateScore();
  console.log(positionX, positionY);
  // console.log(pieces);
};

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

  gameBoard.forEach(handleRow);
  function handleRow(item) {
    item.forEach(drawSquare);
  };
  function drawSquare(item) {
    rect(item.x, item.y, 100, 100)
  };


  blackPieces.forEach(createBlackPiece);
  function createBlackPiece(item) {
    blackPiece(item.x, item.y)
  };

  whitePieces.forEach(createWhitePiece);
  function createWhitePiece(item) {
    whitePiece(item.x, item.y)
  };

  piece(mouseX, mouseY, thePieceColor);

};

function piece(x, y, assignedColor) {
  noStroke();
  stroke(255, 255, 255);
  strokeWeight(3);
  fill(assignedColor);
  ellipse(x, y, 85, 85);
};

function blackPiece(x, y) {
  noStroke();
  stroke(255, 255, 255);
  strokeWeight(3);
  fill(0);
  ellipse(x, y, 85, 85);
};

function whitePiece(x, y) {
  noStroke();
  stroke(255, 255, 255);
  strokeWeight(3);
  fill(255);
  ellipse(x, y, 85, 85);
};




// noStroke();
// stroke(255, 255, 255);
// strokeWeight(3);
// fill(0, 0, 0);
// ellipse(52, 52, 85, 85);

// noStroke();
// stroke(0, 0, 0);
// strokeWeight(3);
// fill(255, 255, 255);
// ellipse(152, 152, 85, 85);
