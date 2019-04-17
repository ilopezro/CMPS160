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
    constructor(canvas, scene, clearButton) {
      this.canvas = canvas;
      this.scene = scene;
      this.clearButton = clearButton

      _inputHandler = this;

      // Mouse Events
      this.canvas.onmousedown = function(ev) { _inputHandler.click(ev) };
      this.clearButton.onclick = function() { _inputHandler.clear(scene)}
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

    clear(scene){
      console.log("clicked 'clear canvas' button")
      this.scene.clearGeometries()
    }
}
