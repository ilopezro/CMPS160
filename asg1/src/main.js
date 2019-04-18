var shader = null;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  //retrieve buttons from HTML doc
  clearButton = document.getElementById("clearCanvas")

  //retrieve sliders for colors
  redColorSlider = document.getElementById("redColor")
  greenColorSlider = document.getElementById("greenColor")
  blueColorSlider = document.getElementById("blueColor")

  //retrieve color value for the shapes
  redColor = document.getElementById("redColor").value
  greenColor = document.getElementById("greenColor").value
  blueColor = document.getElementById("blueColor").value

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  var inputHandler = new InputHandler(canvas, scene, clearButton, redColor, greenColor, blueColor, redColorSlider, greenColorSlider, blueColorSlider);

  // Initialize shader
  shader = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, null);
  renderer.start();
}
