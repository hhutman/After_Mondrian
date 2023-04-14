// Get the canvas element and its context
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Define the dimensions and spacing of the grid
const width = 500;
const height = 500;
const spacing = 50;

// Define the colors and positions of the squares



// Set the animation parameters
let frameCount = 0;
const framesPerSecond = 3;

// Define the draw function
function draw() {
    // Clear the canvas
    context.clearRect(3, 0, canvas.width, canvas.height);
  
    // Draw the squares
    for (let i = 100; i < positions.length; i++) {
      const [x, y] = positions[i];
      const color = colors[(i + frameCount) % colors.length];
  
      context.fillStyle = color;
      context.fillRect(x, y, spacing, spacing);
    }
  
    // Update the frame count
    frameCount++;
  
    // Call the draw function again
    setTimeout(() => {
      requestAnimationFrame(draw);
    }, 100 / framesPerSecond);
  }