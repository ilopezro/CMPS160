var shader = null;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  var camera = new Camera();

  var inputHandler = new InputHandler(canvas, scene, camera);

  // Initialize shader
  shader = new Shader(gl, ASG4_VSHADER, ASG4_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");
  shader.addAttribute("a_TexCoord");

  shader.addUniform("u_Sampler", "sampler2D", new Matrix4().elements);
  shader.addUniform("u_ViewMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ProjectionMatrix", "mat4", new Matrix4().elements);

  // Load texture and add triangle to the scene with that texture.
  inputHandler.readTexture("objs/minion.jpg", function(image) {
      var points = [0,0]
      var shape = new Cube(shader, points, .25, image);
      scene.addGeometry(shape);
  })

  // Initialize shader
  shader2 = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);

  // Add attibutes
  shader2.addAttribute("a_Position");
  shader2.addAttribute("a_Color");

  //create square and add it 
  var square = new Square(shader)
  scene.addGeometry(square)

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, camera);
  renderer.start();
}
