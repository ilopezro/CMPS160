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

  hud = document.getElementById("hud")

  var light = new Light(60,1,60);
  var fog = new Fog(0.5, 0.5, 0.5, 2, 5)

  // Initialize the scene
  var scene = new Scene();
  var camera = new Camera();
  scene.setLight(light);
  scene.addFog(fog)

  // Initialize shader
  shader = new Shader(gl, ASG4_VSHADER, ASG4_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Normal");
  shader.addAttribute("a_TexCoord");

  shader.addUniform("u_Sampler", "sampler2D", new Matrix4().elements);
  shader.addUniform("u_ViewMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ProjectionMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ModelMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_NormalMatrix", "mat4", new Matrix4().elements);

  shader.addUniform("u_LightPosition", "vec3", new Vector3().elements);
  shader.addUniform("u_AmbientColor", "vec3", new Vector3().elements);
  shader.addUniform("u_DiffuseColor", "vec3", new Vector3().elements);
  shader.addUniform("u_SpecularColor", "vec3", new Vector3().elements);

  shader.addUniform("Ka", "float", 1.0)
  shader.addUniform("Kd", "float", 1.0)
  shader.addUniform("Ks", "float", 1.0)
  shader.addUniform("shininessVal", "float", 80.0)

  shader.addUniform("u_Eye", "vec4", new Vector4().elements)
  shader.addUniform("u_FogColor", "vec3", new Vector3().elements)
  shader.addUniform("u_FogDist", "vec2", [1,1])

//sets the view
camera.setDistance()

// Initialize shader
shader2 = new Shader(gl, ASG5_VSHADER, ASG5_FSHADER);

 // Add attibutes
 shader2.addAttribute("a_Position");
 shader2.addAttribute("a_Color");
 shader2.addAttribute("a_Normal");

 shader2.addUniform("u_ModelMatrix", "mat4", new Matrix4().elements);
 shader2.addUniform("u_NormalMatrix", "mat4", new Matrix4().elements);
 shader2.addUniform("u_ViewMatrix", "mat4", new Matrix4().elements);
 shader2.addUniform("u_ProjectionMatrix", "mat4", new Matrix4().elements);

 shader2.addUniform("u_LightPosition", "vec3", new Vector3().elements);
 shader2.addUniform("u_AmbientColor", "vec3", new Vector3().elements);
 shader2.addUniform("u_DiffuseColor", "vec3", new Vector3().elements);
 shader2.addUniform("u_SpecularColor", "vec3", new Vector3().elements);
 shader2.addUniform("u_Eye", "vec4", new Vector4().elements)

 shader2.addUniform("u_FogColor", "vec3", new Vector3().elements)
 shader2.addUniform("u_FogDist", "vec2", [1,1])

 shader2.addUniform("Ka", "float", 1.0)
 shader2.addUniform("Kd", "float", 1.0)
 shader2.addUniform("Ks", "float", 1.0)
 shader2.addUniform("shininessVal", "float", 80.0)

var world = new World(scene, inputHandler, shader, shader2)
var inputHandler = new InputHandler(canvas, scene, camera, hud, world);

// drawWorld(scene, inputHandler, shader, shader2)

// Initialize renderer with scene and camera
renderer = new Renderer(gl, scene, camera);
renderer.start();
}