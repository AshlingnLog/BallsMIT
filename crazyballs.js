

for (let index = 60; index < array.length; index++) {
	const element = array[index];
	var positionX = 0;
	var positionY = 0;
	var velocity = 10;
	var reverse = true;
	var ball = document.getElementById("ball1");
	
	var positionX = 0
	var positionY = 0;
	var velocity = 50;
	var reverse = true;
	var ball = document.getElementById("ball2");
	
	var positionX = 0;
	var positionY = 0;
	var velocity = 5;
	var reverse = true;
	var ball = document.getElementById("ball3");
	
	var positionX = 0;
	var positionY = 0;
	var velocity = 15;
	var reverse = true;
	var ball = document.getElementById("ball4");
	
	var positionX = 0;
	var positionY = 0;
	var velocity = 20;
	var reverse = true;
	var ball = document.getElementById("ball5");
	
	var positionX = 0;
	var positionY = 0;
	var velocity = 60;
	var reverse = true;
	var ball = document.getElementById("ball6");
}

function moveBall() {

  var Xmin = 200;
  var Xmax = 800;

  var Ymin = 700;
  var Ymax = 500;

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

setInterval(moveBall, 100);
