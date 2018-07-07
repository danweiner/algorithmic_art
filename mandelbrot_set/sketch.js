function setup() {
	createCanvas(600, 600);
	background('white');
	noLoop();
}

function draw() {
	noFill(); stroke(0); rect(0, 0, 599, 599);
	// visit every pixel on the canvas
	for (var x = 0; x < 600; x++) {
		for (var y = 0; y < 600; y++) {

			// convert canvas (x, y) to complex number c = a + bi
			var a = map(x, 0, 599, -2.25, 0.75);
			var b = map(y, 0, 599, 1.5, -1.5);

			// start with z=0+0i and c=a+bi
			// iterate 50 times or until |z|>2
			var z_real = 0;
			var z_imag = 0;

			for (var iter = 1; (iter <= 50) && (dist(0, 0, z_real, z_imag) < 2); iter++) {
				
				// apply z^2 + c function
				var z_real_temp = (z_real * z_real) - (z_imag * z_imag) + a;
				var z_imag_temp = (2 * z_real * z_imag) + b;
				z_real = z_real_temp;
				z_imag = z_imag_temp;
			}

			// if we've reached 50 iterations, color point
			if (iter == 51) {
				point(x, y);
			}
			
		}
	}

}