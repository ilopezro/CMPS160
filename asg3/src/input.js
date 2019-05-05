var _inputHandler = null;
var redColor = null; 
var greenColor = null; 
var blueColor = null; 
var isTriangle = true; 
var isSquare = false; 
var isCircle = false; 
var isCube = false; 
var size = null; 
var circleSegmentValue = null; 

/**
 * Specifies a Input Handler. Used to parse input events from a HTML page.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class InputHandler {
    /**
     * Initializes the event handeling functions within the program.
     */
    constructor(canvas, scene, clearButton, squareButton, triangleButton, circleButton, sizeSlider, shapeSize, circleSegmentSlider, circleSegmentValues) {
      this.canvas = canvas;
      this.scene = scene;
      this.clearButton = clearButton
      this.squareButton = squareButton
      this.triangleButton = triangleButton
      this.circleButton = circleButton
      this.size = shapeSize
      circleSegmentValue = circleSegmentValues
      this.image = null;

      this.cubeButton = document.getElementById("rotatingCube");

      //slider
      this.sizeSlider = sizeSlider
      this.circleSegmentSlider = circleSegmentSlider

      _inputHandler = this;

      var isMoving = false; 
      // Mouse Events
      this.canvas.onmousedown = function(ev) { isMoving = true; _inputHandler.click(ev, redColor, greenColor, blueColor, size, circleSegmentValue) };
      this.canvas.onmousemove = function(ev) {if(isMoving == true) _inputHandler.click(ev, redColor, greenColor, blueColor, size, circleSegmentValue)} 
      this.canvas.onmouseup = function() {isMoving = false; }
      this.clearButton.onclick = function() { _inputHandler.clear(scene)}
      this.squareButton.onclick = function() { isSquare = true; isTriangle = false; isCircle = false; isCube = false; }
      this.triangleButton.onclick = function() {isSquare = false; isTriangle = true; isCircle = false; isCube = false; }
      this.circleButton.onclick = function() {isSquare = false; isTriangle = false; isCircle = true; isCube = false; }
      this.cubeButton.onclick = function() {isSquare = false; isTriangle = false; isCircle = false; isCube = true;}
      this.sizeSlider.onchange = function() { size = document.getElementById("sizeSlider").value}
      this.circleSegmentSlider.onchange = function() {circleSegmentValue = document.getElementById("circleSegmentCount").value}

      //handles file input
      document.getElementById('fileLoad').onclick = function() { _inputHandler.readSelectedFile() };

      //reads textures
      document.getElementById('textureInput').onchange = function() { _inputHandler.readTexture() };
    }

    /**
     * Function called upon mouse click.
     */
    click(ev, rColor, gColor, bColor, size, circleSegmentValue) {
        // Print x,y coordinates.
        console.log(ev.clientX, ev.clientY);

        var g_points = []
        var x = ev.clientX; 
        var y= ev.clientY; 
        var rect = ev.target.getBoundingClientRect(); 

        x = ((x - rect.left) - canvas.height/2)/(canvas.height/2);
        y = (canvas.width/2 - (y-rect.top))/(canvas.width/2)

        g_points.push(x); 
        g_points.push(y); 
        
        if(!isTriangle && isCircle && !isSquare && !isCube){
          var circle = new Circle(shader, g_points, size, circleSegmentValue)
          this.scene.addGeometry(circle)
        }else if(!isTriangle && !isCircle && isSquare){
          var square = new Square(shader, g_points, size)
          this.scene.addGeometry(square)
        }else if(!isTriangle && !isCircle && !isSquare && isCube){
          var cube = new Cube(shader, g_points, size)
          this.scene.addGeometry(cube)
        }else{
          var triangle = new Triangle(shader, g_points, size);
          this.scene.addGeometry(triangle);
        }
    }

    clear(scene){
      console.log("clicked 'clear canvas' button")
      this.scene.clearGeometries()
    }

    /**
     * Function called to read a selected file.
     */
    readSelectedFile() {
      console.log("add obj button pressed")
      var fileReader = new FileReader();
      var objFile = document.getElementById("fileInput").files[0];

      if (!objFile) {
          alert("OBJ file not set!");
          return;
      }

      fileReader.readAsText(objFile);
      
      fileReader.onloadend = function() {
          var customObj = new CustomOBJ(shader, fileReader.result);
          _inputHandler.scene.addGeometry(customObj);
      }
  }

  readTexture() {
    // Create the image object
    var image = new Image();
    if (!image) {
      console.log('Failed to create the image object');
      return false;
    }

    // Register the event handler to be called on loading an image
    image.onload = function() {
        _inputHandler.image = image;
    };

    var imgPath = document.getElementById("textureInput").value;
    var imgPathSplit = imgPath.split("\\");

    // Tell the browser to load an image
    image.src = 'objs/' + imgPathSplit[imgPathSplit.length - 1];
    return true;
}
}
