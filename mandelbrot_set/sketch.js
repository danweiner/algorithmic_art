function setup() {
	createCanvas(600, 600);
	background('white');
	noLoop();
}

function draw() {
	
	// visit every pixel on the canvas
	for (var x = 0; x < 600; x++) {
		for (var y = 0; y < 600; y++) {

			// convert canvas (x, y) to complex number c = a + bi
			// var a = map(x, 0, 599, -2.25, 0.75);
			// var b = map(y, 0, 599, 1.5, -1.5);
			// var a = map(x, 0, 599, -1.5, -0.5);
			// var b = map(y, 0, 599, -0.5, 0.5);
			var a = map(x, 0, 599, -0.22, -0.21);
			var b = map(y, 0, 599, -0.69, -0.70);

			// start with z=0+0i and c=a+bi
			// iterate 50 times or until |z|>2
			var z_real = 0;
			var z_imag = 0;

			for (var iter = 1; (iter <= 500) && (dist(0, 0, z_real, z_imag) < 2); iter++) {
				
				// apply z^2 + c function
				var z_real_temp = (z_real * z_real) - (z_imag * z_imag) + a;
				var z_imag_temp = (2 * z_real * z_imag) + b;
				z_real = z_real_temp;
				z_imag = z_imag_temp;
			}

			// if we've reached 50 iterations, color point
			if (iter == 501) {
				// black inside fractal
				stroke(0);
			} else {
				// rate of explosion - alters redness
				var fraction = Math.tanh(iter/200);
				var col_1 = color(0, 0, 50);
				var col_2 = color(255, 255, 255);
				stroke(lerpColor(col_1, col_2, fraction));
			}
			point(x, y);
		}
	}
	noFill(); stroke(0); rect(0, 0, 599, 599);
}