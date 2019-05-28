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
    constructor(canvas, scene, camera, hud) {
      this.canvas = canvas;
      this.scene  = scene;
      this.camera = camera;
      this.hud = hud

      this.isClicked = false; 

      _inputHandler = this;

      this.isMoving = false; 

      this.stepsTaken = 0;
      this.time = 30;

      this.ctx = hud.getContext('2d');

      this.ctx.beginPath()
      this.ctx.font = "20px Arial";
      this.ctx.fillText("You have taken " + this.stepsTaken + " steps.", 50, 50);
      this.ctx.fillText("You have " + this.time + " seconds left.", 50, 75);
      this.ctx.closePath()

      //creates the lavendar layer at the top of the hud
      this.ctx.beginPath()
      this.ctx.rect(0, 0, 400, 400);
      this.ctx.fillStyle = "lavender";
      this.ctx.fill();
      this.ctx.closePath()

      //this is play button
      this.ctx.beginPath()
      this.ctx.rect(150, 300, 75, 25);
      this.ctx.fillText("Play!!", 150, 300)
      this.ctx.fillStyle = "red";
      this.ctx.fill();
      this.ctx.closePath()

    this.timer = null

      // Mouse Events
      this.hud.onmousedown = function(ev) { this.isMoving = true; _inputHandler.mouseClick(ev)};
      this.hud.onmouseup = function() {this.isMoving = false; }
      this.hud.onmousemove = function(ev) {if(this.isMoving) _inputHandler.mouseMove(ev) };
      this.hud.addEventListener('wheel', function(ev) { _inputHandler.mouseZoom(ev)}, false)

      // Keyboard Events
      document.addEventListener('keydown', function(ev) { 
            _inputHandler.keyDown(ev); 
        }, 
        false);
    }

    mouseClick(ev){
        var x = ev.clientX
        var y = ev.clientY

        if(x > 150 && x < 225 && y > 300 && y < 350){
            this.isClicked = true
            this.ctx.beginPath()
            this.ctx.clearRect(0,0,400,400)
            this.ctx.fillText("You have taken " + this.stepsTaken + " steps.", 50, 50);
            this.ctx.fillText("You have " + this.time + " seconds left.", 50, 75);
            this.ctx.closePath()
            _inputHandler.startTimer()
        }
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
        if(moveY > 0){
            this.camera.setZoom(1)
        }else if(moveY < 0){
            this.camera.setZoom(-1)
        }
    }

    keyDown(ev) {
        var keyName = event.key
        if(!this.isClicked){
            return; 
        }else{
            if(keyName == "a" || keyName == "ArrowLeft") {
                this.camera.truck(-1);
                this.stepsTaken++
                _inputHandler.updateStep(); 
            }else if(keyName == "d" || keyName == "ArrowRight") {
                this.camera.truck(1);
                this.stepsTaken++
                _inputHandler.updateStep(); 
            }else if(keyName == "w" || keyName == "ArrowUp"){
                this.camera.dolly(-1)
                this.stepsTaken++
                _inputHandler.updateStep(); 
            }else if(keyName == "s" || keyName == "ArrowDown"){
                this.camera.dolly(1)
                this.stepsTaken++
                _inputHandler.updateStep(); 
            }
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

    updateStep() {
        this.ctx.clearRect(0,0,400,400)
        this.ctx.fillText("You have taken " + this.stepsTaken + " steps.", 50, 50);
  
        if (this.time >0)
          this.ctx.fillText("You have " + this.time + " seconds left.", 50, 75);
        else
          this.ctx.fillText("You have lost.", 50, 75)
      }

      startTimer(){
        this.timer = setInterval(function(){_inputHandler.time--; _inputHandler.updateStep(); }, 1000);
      }
}