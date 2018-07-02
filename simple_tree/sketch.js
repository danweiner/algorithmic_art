function setup() {
	createCanvas(800, 600);
	background('white');
	noLoop();
	angleMode(DEGREES);
}

function draw() {
	noFill(); stroke(0); rect(0, 0, 799, 599);
	stroke(0, 200, 0);
	strokeWeight(4);

	// start tree at (400, 500)
	// pointing straight up with a depth of 3

	tree(400, 500, 0, 4); 
}

// tree function takes coordinates of tree, angle, and current depth

function tree(x1, y1, angle, depth) {

	// use angle to calculate endpoint of branch
	var x2 = x1 - (100 * sin(angle));
	var y2 = y1 - (100 * cos(angle));

	// this draws the tree trunk - straight up, angle starts at 0
	line(x1, y1, x2, y2);

	// new trees (branches) at angle +/- 15 degrees 
	// positioned at end of branch
	if(depth > 1) {
		tree(x2, y2, angle + 15, depth - 1);
		tree(x2, y2, angle - 15, depth - 1);
	}
}