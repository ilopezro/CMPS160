var _inputHandler = null;

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
    constructor(canvas, scene, camera) {
      this.canvas = canvas;
      this.scene  = scene;
      this.camera = camera;

      _inputHandler = this;

      this.isMoving = false; 

      // Mouse Events
      this.canvas.onmousedown = function(ev) { this.isMoving = true; };
      this.canvas.onmouseup = function() {this.isMoving = false; }
      this.canvas.onmousemove = function(ev) {if(this.isMoving) _inputHandler.mouseMove(ev) };
      this.canvas.addEventListener('wheel', function(ev) { _inputHandler.mouseZoom(ev)}, false)

      // Keyboard Events
      document.addEventListener('keydown', function(ev) { _inputHandler.keyDown(ev); }, false);

      // Button Events
      document.getElementById('fileLoad').onclick = function() { _inputHandler.readSelectedFile() };

      // HTML Slider Events
      document.getElementById('exampleSlider').addEventListener('mouseup', function() { console.log(this.value); });
    }

    mouseMove(ev) {
        var movementX = ev.movementX;
        var movementY = ev.movementY;
        
        if(movementY > 0){
            this.camera.tilt(1)
        }else if(movementY < 0){
            this.camera.tilt(-1)
        }

        if(movementX > 0 ){
            this.camera.pan(1)
        }else if(movementX < 0){
            this.camera.pan(-1)
        }
    }

    mouseZoom(ev){
        
        var moveY = ev.deltaY; 
        console.log(moveY)

    }

    keyDown(ev) {
        var keyName = event.key

        if(keyName == "a" || keyName == "ArrowLeft") {
            this.camera.truck(-1);
        }else if(keyName == "d" || keyName == "ArrowRight") {
            this.camera.truck(1);
        }else if(keyName == "w" || keyName == "ArrowUp"){
            this.camera.dolly(-1)
        }else if(keyName == "s" || keyName == "ArrowDown"){
            this.camera.dolly(1)
        }else if(keyName =='z'){
            this.camera.setDistance();
        }
    }

    /**
     * Function called to read a selected file.
     */
    readSelectedFile() {
        var fileReader = new FileReader();
        var objFile = document.getElementById("fileInput").files[0];

        if (!objFile) {
            alert("OBJ file not set!");
            return;
        }

        fileReader.readAsText(objFile);
        fileReader.onloadend = function() {
            alert(fileReader.result);
        }
    }

    readTexture(src, onTexLoad) {
        // Create the image object
        var image = new Image();
        if (!image) {
          console.log('Failed to create the image object');
          return false;
        }

        // Register the event handler to be called on loading an image
        image.onload = function() {
            _inputHandler.image = image;
            onTexLoad(image);
        };

        // Tell the browser to load an image
        image.src = src
        return true;
    }
}