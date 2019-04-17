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

        var g_points = []
        var x = ev.clientX; 
        var y= ev.clientY; 
        var rect = ev.target.getBoundingClientRect(); 

        x = ((x - rect.left) - canvas.height/2)/(canvas.height/2);
        y = (canvas.width/2 - (y-rect.top))/(canvas.width/2)

        g_points.push(x); 
        g_points.push(y); 

        var triangle = new Triangle(shader, g_points);
        this.scene.addGeometry(triangle);
    }

    clear(scene){
      console.log("clicked 'clear canvas' button")
      this.scene.clearGeometries()
    }
}
