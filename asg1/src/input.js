var _inputHandler = null;
var redColor = null; 
var greenColor = null; 
var blueColor = null; 
var isTriangle = true; 
var isSquare = false; 
var isCircle = false; 

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
    constructor(canvas, scene, clearButton, redColors, greenColors, blueColors, redColorSlider, greenColorSlider, blueColorSlider, squareButton, triangleButton, circleButton) {
      this.canvas = canvas;
      this.scene = scene;
      this.clearButton = clearButton
      this.squareButton = squareButton
      this.triangleButton = triangleButton
      this.circleButton = circleButton


      //actual color value
      redColor = redColors
      greenColor = greenColors
      blueColor = blueColors
      
      //sliders
      this.redSlider = redColorSlider
      this.greenSlider = greenColorSlider
      this.blueSlider = blueColorSlider

      _inputHandler = this;

      // Mouse Events
      this.canvas.onmousedown = function(ev) { _inputHandler.click(ev, redColor, greenColor, blueColor) };
      this.clearButton.onclick = function() { _inputHandler.clear(scene)}
      this.squareButton.onclick = function() { isSquare = true; isTriangle = false; isCircle = false}
      this.triangleButton.onclick = function() {isSquare = false; isTriangle = true; isCircle = false}
      this.circleButton.onclick = function() {isSquare = false; isTriangle = false; isCircle = true}
      this.redSlider.onchange = function() { _inputHandler.updateRedColor()}
      this.greenSlider.onchange = function() { _inputHandler.updateGreenColor()}
      this.blueSlider.onchange = function() { _inputHandler.updateBlueColor()}
    }

    /**
     * Function called upon mouse click.
     */
    click(ev, rColor, gColor, bColor) {
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
        

        var triangle = new Triangle(shader, g_points, rColor, gColor, bColor);
        this.scene.addGeometry(triangle);
    }

    clear(scene){
      console.log("clicked 'clear canvas' button")
      this.scene.clearGeometries()
    }

    updateRedColor(){
      redColor = document.getElementById("redColor").value; 
    }

    updateGreenColor(){
      greenColor = document.getElementById("greenColor").value; 
    }

    updateBlueColor(){
      blueColor = document.getElementById("blueColor").value; 
    }
}
