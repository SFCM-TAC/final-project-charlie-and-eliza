

var gameBoard = [
  [{x:2, y:2}, {x:102, y:2}, {x:202, y:2}, {x:302, y:2}, {x:402, y:2}, {x:502, y:2}],
  [{x:2, y:102}, {x:102, y:102}, {x:202, y:102}, {x:302, y:102}, {x:402, y:102}, {x:502, y:102}],
  [{x:2, y:202}, {x:102, y:202}, {x:202, y:202}, {x:302, y:202}, {x:402, y:202}, {x:502, y:202}],
  [{x:2, y:302}, {x:102, y:302}, {x:202, y:302}, {x:302, y:302}, {x:402, y:302}, {x:502, y:302}],
  [{x:2, y:402}, {x:102, y:402}, {x:202, y:402}, {x:302, y:402}, {x:402, y:402}, {x:502, y:402}],
  [{x:2, y:502}, {x:102, y:502}, {x:202, y:502}, {x:302, y:502}, {x:402, y:502}, {x:502, y:502}]
];




document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  var mouseX = event.clientX;     // Get the horizontal coordinate
  var mouseY = event.clientY;     // Get the vertical coordinate
  var coor = "X coords: " + mouseX + ", Y coords: " + mouseY;
  console.log(coor);
}



var black = 0
var white = 255
var color = 0


function setup() {
  // set canvas size
  createCanvas(605, 605);
};

// function mousePressed() {
//   if (color === black) {
//     color = white;
//   } else {
//     color = black;
//   }
//   console.log(color)
// }


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

  // noStroke();
  // stroke(255, 255, 255);
  // strokeWeight(3);
  // fill(0, 0, 0);
  // ellipse(52, 52, 85, 85);
  //
  //
  // noStroke();
  // stroke(0, 0, 0);
  // strokeWeight(3);
  // fill(255, 255, 255);
  // ellipse(152, 152, 85, 85);
};

function mouseClicked() {
  ellipse(150, 150, 85, 85);
  draw();
  // prevent default
  // return false;
  console.log();
}
