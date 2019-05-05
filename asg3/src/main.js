var shader = null;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  //retrieve buttons from HTML doc
  clearButton = document.getElementById("clearCanvas")
  triangle = document.getElementById("createTriangle")
  square = document.getElementById("createSquare")
  circle = document.getElementById("createCircles")

  //slider for size
  sizeSlider = document.getElementById("sizeSlider")

  //slider value
  size = document.getElementById("sizeSlider").value

  //circleSegmentSlider
  circleSegmentSlider = document.getElementById("circleSegmentCount")
  //circleSegmentValue
  circSegVal = document.getElementById("circleSegmentCount").value

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  var inputHandler = new InputHandler(canvas, scene, clearButton, square, triangle, circle, sizeSlider, size, circleSegmentSlider, circSegVal);
   
  // Initialize shader
  shader = new Shader(gl, ASG2_VSHADER, ASG2_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");

  // Add uniforms
  var idMatrix = new Matrix4();
  shader.addUniform("u_ModelMatrix", "mat4", idMatrix.elements)

  shader2 = new Shader(gl, ASG3_VSHADER, ASG3_FSHADER)

  // Add attibutes
  shader2.addAttribute("a_Position");
  shader2.addAttribute("a_Color");
  shader2.addAttribute("a_TexCoord");

  // Add uniforms
  shader2.addUniform("u_Sampler", "sampler2D", 0);
  shader2.addUniform("u_ModelMatrix", "mat4", idMatrix.elements)


  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, null);
  renderer.start();
}
