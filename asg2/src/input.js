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
    constructor(canvas, scene) {
      this.canvas = canvas;
      this.scene = scene;

      _inputHandler = this;

      // Mouse Events
      this.canvas.onmousedown = function(ev) { _inputHandler.click(ev) };
      this.canvas.onmousemove = function(ev) { };

      // Button Events
      document.getElementById('fileLoad').onclick = function() { _inputHandler.readSelectedFile() };

      // HTML Slider Events
      document.getElementById('exampleSlider').addEventListener('mouseup', function() { console.log(this.value); });
    }

    /**
     * Function called upon mouse click.
     */
    click(ev) {
        // Print x,y coordinates.
        console.log(ev.clientX, ev.clientY);

        var shape = new Triangle(shader);
        this.scene.addGeometry(shape);
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
            //files is ready to use
            alert(fileReader.result);
            var customObj = new CustomOBJ(shader, fileReader.result)
            _inputHandler.scene.addGeometry(customObj)
        }
    }
}
