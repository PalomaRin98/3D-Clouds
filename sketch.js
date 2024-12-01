// variable to hold a reference to our A-Frame world
let world;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	world = new World('VRScene');

	// set a background color for the world
	world.setBackground(135, 206, 235); // Light blue sky

	// Function to create a cloud-like structure
	function createCloud(x, y, z) {
		// Base of the cloud
		let base = new Sphere({
			x: x, y: y, z: z,
			radius: 2,
			red: 255, green: 255, blue: 255
		});
		world.add(base);

		// Add smaller puffs around the base
		for (let i = 0; i < 8; i++) { // Increased puffs for fuller clouds
			let puff = new Sphere({
				x: x + random(-2, 2),
				y: y + random(-1, 1),
				z: z + random(-1, 1),
				radius: random(0.8, 1.5),
				red: 255, green: 255, blue: 255
			});
			world.add(puff);
		}
	}

	// Add multiple clouds at various, more spread-out locations
	createCloud(0, 5, -10);
	createCloud(-10, 7, -25);
	createCloud(15, 9, -20);
	createCloud(-20, 6, -30);
	createCloud(20, 8, -15);
	createCloud(-25, 10, -40);
	createCloud(25, 12, -35);
	createCloud(5, 8, -18);
	createCloud(-15, 9, -28);
	createCloud(10, 11, -22);

	// Create the ground plane
	let ground = new Plane({
		x: 0, y: 0, z: 0,
		width: 100, height: 100,
		red: 0, green: 100, blue: 0, // Dark green ground
		rotationX: -90,
		metalness: 0.25
	});
	world.add(ground);
}

function draw() {
	// Empty draw loop
}
