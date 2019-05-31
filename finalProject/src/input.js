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
    constructor(canvas, scene, camera, hud, world) {
      this.canvas = canvas;
      this.scene  = scene;
      this.camera = camera;
      this.hud = hud
      this.isClicked = false; 
      this.world = world

      this.difficulty = "easy"
      this.worldSetting = "Snow"

      _inputHandler = this;

      this.isMoving = false; 

      this.stepsTaken = 0;
      this.time = 30;

      this.ctx = hud.getContext('2d');

      this.createFrontPage()    

    this.timer = null

      // Mouse Events
      this.hud.onmousedown = function(ev) { this.isMoving = true; _inputHandler.mouseClick(ev)};
      this.hud.onmouseup = function() {this.isMoving = false; }
      this.hud.onmousemove = function(ev) {if(this.isMoving) _inputHandler.mouseMove(ev) };
      
      // Keyboard Events
      document.addEventListener('keydown', function(ev) { _inputHandler.keyDown(ev); }, false);
    }

    createFrontPage(){
        this.ctx.beginPath();
      this.ctx.font = "20px Arial";
      this.ctx.fillText("You have taken " + this.stepsTaken + " steps.", 50, 50);
      this.ctx.fillText("You have " + this.time + " seconds left.", 50, 75);
      this.ctx.closePath();

      //creates the lavendar layer at the top of the hud
      this.ctx.beginPath();
      this.ctx.rect(0, 0, 400, 400);
      this.ctx.fillStyle = 'lavender';
      this.ctx.fill();
      this.ctx.closePath();

        //The Maze Game
        this.ctx.beginPath();
        this.ctx.font = "20pt Georgina";
        this.ctx.fillStyle = 'red';
        this.ctx.strokeStyle = 'black';
 
         this.ctx.font = '20pt Verdana'; 
         this.ctx.fillText('The Maze Game', 75, 50);
         this.ctx.strokeText('The Maze Game', 75, 50);
         this.ctx.fill(); 
         this.ctx.stroke(); 
         this.ctx.closePath();

        //this is Difficulty text
      this.ctx.beginPath();
      this.ctx.font = "20px Comic Sans MS";
      this.ctx.fillStyle = 'Blue';
      this.ctx.fillText("Difficulty", 50, 150);
      this.ctx.closePath();

       //this is Difficulty text
       this.ctx.beginPath();
       this.ctx.font = "18px Comic Sans MS";
       this.ctx.fillStyle = 'Blue';
       this.ctx.fillText("Easy", 75, 175);
       this.ctx.closePath();

        //this is Difficulty text
        this.ctx.beginPath();
        this.ctx.font = "18px Comic Sans MS";
        this.ctx.fillStyle = 'Blue';
        this.ctx.fillText("Medium", 63, 200);
        this.ctx.closePath();

        //this is Difficulty text
        this.ctx.beginPath();
        this.ctx.font = "18px Comic Sans MS";
        this.ctx.fillStyle = 'Blue';
        this.ctx.fillText("Hard", 75, 225);
        this.ctx.closePath();

       //this is play button
      this.ctx.beginPath();
      this.ctx.font = "20px Comic Sans MS";
      this.ctx.fillStyle = 'Blue';
      this.ctx.fillText("World Setting", 215, 150);
      this.ctx.closePath();

      //this is Difficulty text
      this.ctx.beginPath();
      this.ctx.font = "18px Comic Sans MS";
      this.ctx.fillStyle = 'Blue';
      this.ctx.fillText("Snow", 250, 175);
      this.ctx.closePath();

       //this is Difficulty text
       this.ctx.beginPath();
       this.ctx.font = "18px Comic Sans MS";
       this.ctx.fillStyle = 'Blue';
       this.ctx.fillText("Forest", 250, 200);
       this.ctx.closePath();

       //this is Difficulty text
       this.ctx.beginPath();
       this.ctx.font = "18px Comic Sans MS";
       this.ctx.fillStyle = 'Blue';
       this.ctx.fillText("Desert", 250, 225);
       this.ctx.closePath();

      //this is play button
      this.ctx.beginPath();
      this.ctx.font = "20px Comic Sans MS";
      this.ctx.fillStyle = 'black';
      this.ctx.fillText("Play!!", 160, 350);
      this.ctx.closePath();
    }

    mouseClick(ev){
        var x = ev.clientX
        var y = ev.clientY
        console.log(x + " " + y)
        if(!this.isClicked){
            if(x>260 && x <300 && y > 195 && y < 205){
                this.worldSetting = "Snow"
                document.getElementById('setting').innerHTML = "World: " + this.worldSetting
            }
            if(x>260 && x < 315 && y > 215 && y < 230){
                this.worldSetting = "Forest"
                document.getElementById('setting').innerHTML = "World: " + this.worldSetting
            }
            if(x>260 && x < 315 && y > 240 && y < 255){
                this.worldSetting = "Desert"
                document.getElementById('setting').innerHTML = "World: " + this.worldSetting
            }
            if(x>85 && x < 120 && y > 185 && y < 205){
                this.difficulty = "Easy"
                document.getElementById('difficulty').innerHTML = "Difficulty: " + this.difficulty
            }
            if(x>70 && x < 140 && y > 210 && y < 230){
                this.difficulty = "Medium"
                document.getElementById('difficulty').innerHTML = "Difficulty: " + this.difficulty
            }
            if(x>80 && x < 130 && y > 240 && y < 255){
                this.difficulty = "Hard"
                document.getElementById('difficulty').innerHTML = "Difficulty: " + this.difficulty
            }
            if(x > 165 && x < 220 && y > 360 && y < 380){
                this.isClicked = true
                this.ctx.beginPath()
                this.ctx.clearRect(0,0,400,400)
                this.ctx.fillText("You have taken " + this.stepsTaken + " steps.", 50, 50);
                this.ctx.fillText("You have " + this.time + " seconds left.", 50, 75);
                this.ctx.closePath()
                this.world.setSetting(this.worldSetting)
                this.world.drawWorld()
                _inputHandler.startTimer()
            }
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