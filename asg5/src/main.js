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

  var light = new Light(0, 1, 0);

  // Initialize the scene
  var scene = new Scene();
  var camera = new Camera();
  scene.setLight(light);

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

  //sets the view
  camera.setDistance()

  //draws the map
  var map = [[4,4,4,4,4,4,4,4],
             [4,0,0,0,0,0,0,4],
             [4,0,0,0,0,0,0,4],
             [4,0,0,0,0,0,0,4],
             [4,0,0,0,0,0,0,4],
             [4,0,0,0,0,0,0,4],
             [4,0,0,0,0,0,0,4],
             [4,4,4,4,4,4,4,4]
  ]

  // for(var i = 0; i < map.length; i++){
  //   for(var j = 0; j < map[i].length; j++){
  //     if(map[i][j]!=0){
  //       inputHandler.readTexture("objs/brick.jpg", function(image){
  //         var shape = new Cube(shader)
  //       })
  //     }
  //   }
  // }


  // Load texture and add triangle to the scene with that texture.
  inputHandler.readTexture("objs/brick.jpg", function(image) {
    for (i = 0; i < 1;i = i +.25){
      var shape = new Cube(shader,[i, -.875, 0], .125, image)
      scene.addGeometry(shape)
  }
  for (i = .25; i < 1;i = i +.25){
      var shape = new Cube(shader,[i, -.625, 0], .125, image)
      scene.addGeometry(shape)
  }
  for (i = .5; i < 1;i = i +.25){
      var shape = new Cube(shader,[i, -.375, 0], .125, image)
      scene.addGeometry(shape)
  }
  var shape = new Cube(shader,[.75, -.125, 0], .125, image)
  scene.addGeometry(shape)

  for (i = 0; i < 1;i = i +.25){
    for (j = 0; j < 1;j = j +.25){
      var shape = new Cube(shader,[-1, i-.875, j], .125, image)
      scene.addGeometry(shape)
    }
  }

  for (i = 0; i < 1;i = i +.25){
    for (j = 0; j < 1;j = j +.25){
      var shape = new Cube(shader,[1, i-.875, j], .125, image)
      scene.addGeometry(shape)
    }
  }
  })

  //create square and add it 
  inputHandler.readTexture("objs/snow.jpg", function(image) {
    var square = new Square(shader, image)
    scene.addGeometry(square)
  })

  inputHandler.readTexture("objs/sky.jpg", function(image) {
    var shape = new Sky(shader, image)
    scene.addGeometry(shape)
})



 // Initialize shader
 shader2 = new Shader(gl, ASG5_VSHADER, ASG5_FSHADER);

 // Add attibutes
 shader2.addAttribute("a_Position");
 shader2.addAttribute("a_Color");
 shader2.addAttribute("a_Normal");

 shader2.addUniform("u_ModelMatrix", "mat4", new Matrix4().elements);
 shader2.addUniform("u_NormalMatrix", "mat4", new Matrix4().elements);

 shader2.addUniform("u_LightPos", "vec3", new Vector3().elements);
 shader2.addUniform("u_AmbientColor", "vec3", new Vector3().elements);
 shader2.addUniform("u_DiffuseColor", "vec3", new Vector3().elements);

  var shape = new Sphere(shader2, 13, [1,1,1]);
  scene.addGeometry(shape);

  var shape = new Sphere(shader2, 13, [-1,-1,-1]);
  scene.addGeometry(shape)

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, camera);
  renderer.start();
}
