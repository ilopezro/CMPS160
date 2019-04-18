var shader = null;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  //retrieve buttons from HTML doc
  clearButton = document.getElementById("clearCanvas")

  //retrieve colors for the shapes
  redColor = document.getElementById("redColor").value
  greenColor = document.getElementById("greenColor").value
  blueColor = document.getElementById("blueColor").value
  console.log("in main")
  console.log(redColor)

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  var inputHandler = new InputHandler(canvas, scene, clearButton, redColor, greenColor, blueColor);

  // Initialize shader
  shader = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, null);
  renderer.start();
}
