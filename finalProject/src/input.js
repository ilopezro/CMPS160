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
    constructor(canvas, scene, camera, hud, world, fog) {
      this.canvas = canvas;
      this.scene  = scene;
      this.camera = camera;
      this.hud = hud
      this.isClicked = false; 
      this.world = world
      this.fog = fog
      this.customWorld = false; 

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

      //RGB 
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

       //this is setting text
       this.ctx.beginPath();
       this.ctx.font = "18px Comic Sans MS";
       this.ctx.fillStyle = 'Blue';
       this.ctx.fillText("Forest", 250, 200);
       this.ctx.closePath();

       //this is setting text
       this.ctx.beginPath();
       this.ctx.font = "18px Comic Sans MS";
       this.ctx.fillStyle = 'Blue';
       this.ctx.fillText("Desert", 250, 225);
       this.ctx.closePath();

        //this is setting text
        this.ctx.beginPath();
        this.ctx.font = "18px Comic Sans MS";
        this.ctx.fillStyle = 'Blue';
        this.ctx.fillText("Custom", 250, 250);
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
        var rect = ev.target.getBoundingClientRect();
        console.log(x + " " + y)
        // console.log(rect.left + " <= " + x + " <= " + rect.right)
        // rect.top <= y && y < rect.bottom
        // console.log(rect.top + " <= " + y + " < " + rect.bottom)

        if(!this.isClicked){
            if(x>270 && x <315 && y > 200 && y < 215){
                this.worldSetting = "Snow"
                this.customWorld = false; 
                document.getElementById('setting').innerHTML = "World: " + this.worldSetting
            }
            if(x>270 && x < 325 && y > 225 && y < 240){
                this.worldSetting = "Forest"
                this.customWorld = false; 
                document.getElementById('setting').innerHTML = "World: " + this.worldSetting
            }
            if(x>270 && x < 330 && y > 250 && y < 265){
                this.worldSetting = "Desert"
                this.customWorld = false; 
                document.getElementById('setting').innerHTML = "World: " + this.worldSetting
            }
            if(x>270 && x < 330 && y > 275 && y < 290){
                this.worldSetting = "Custom"
                this.customWorld = true; 
                document.getElementById('setting').innerHTML = "World: " + this.worldSetting
            }
            if(x>90 && x < 130 && y > 195 && y < 215){
                this.difficulty = "Easy"
                document.getElementById('difficulty').innerHTML = "Difficulty: " + this.difficulty
                this.scene.fog.distance = [1,50]
            }
            if(x>80 && x < 150 && y > 220 && y < 235){
                this.difficulty = "Medium"
                document.getElementById('difficulty').innerHTML = "Difficulty: " + this.difficulty
                this.scene.fog.distance = [1,15]
            }
            if(x>95 && x < 140 && y > 250 && y < 265){
                this.difficulty = "Hard"
                document.getElementById('difficulty').innerHTML = "Difficulty: " + this.difficulty
                this.scene.fog.distance = [1,5]
            }
            if(x > 180 && x < 225 && y > 370 && y < 390){
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
            console.log("isCustom: " + this.customWorld)
        }
    }

    mouseMove(ev) {
        var movementX = ev.movementX;
        if(ev.button == '0' || ev.button == '1'){    
            if(movementX > 0 ){
                this.camera.pan(1)
            }else if(movementX < 0){
                this.camera.pan(-1)
            }
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