function setup() {
	createCanvas(800, 600);
	background('white');
	noLoop();
	angleMode(DEGREES);
}

function draw() {
	noFill(); stroke(0); rect(0, 0, 799, 599);
	stroke(150, 100, 0, 100);
	// strokeWeight decreased to 2 from 4
	strokeWeight(2);

	// start tree at (400, 500)
	// pointing straight up with a stated depth

	tree(400, 500, 0, 6); 
}

// tree function takes coordinates of tree, angle, and current depth

function tree(x1, y1, angle, depth) {

	// length of branch
	// using tanh/4, for depths of 5 or below, function falls smoothly
	var length = 100 * Math.tanh(depth/4);

	// use angle to calculate endpoint of branch
	var x2 = x1 - (length * sin(angle));
	var y2 = y1 - (length * cos(angle));
	var x3 = x1 - (0.7 * length * sin(angle));
	var y3 = y1 - (0.7 * length * cos(angle));
	var x4 = x1 - (0.4 * length * sin(angle));
	var y4 = y1 - (0.4 * length * cos(angle));

	// this draws the tree trunk - straight up, angle starts at 0
	line(x1, y1, x2, y2);

	// new angles for emerging trees
	var angle1 = angle + 20 + random(-15, 15);
	var angle2 = angle - 20 + random(-15, 15);

	// new trees (branches) at angle +/- 15 degrees 
	// positioned at end of branch
	if(depth > 1) {
		tree(x2, y2, angle1, depth - 1);
		tree(x2, y2, angle2, depth - 1);
		// part way up branch
		tree(x3, y3, angle1, depth - 1);
		tree(x4, y4, angle2, depth - 1);
	}
}