/**
 * Specifies a World full of Geometry.
 *
 * @author Isai A. Lopez Rodas
 * @this {World}
 */
class World {
    /**
   * Constructor for World.
   *
   * @constructor
   * @returns {World} World object created
   */
  constructor(scene, inputHandler, texShader, colorShader) {
   this.scene = scene
   this.inputHandler = inputHandler
   this.texShader = texShader
   this.colorShader = colorShader
   this.worldSetting = null; 
   this.cubes = null; 
   this.ground = null; 
   this.rCube = null; 
   this.gCube = null; 
   this.bCube = null; 
   this.rFloor = null; 
   this.gFloor = null; 
   this.bFloor = null; 
  }

  drawWorld(){
    //draws the map
    var map = [
      [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,0,4],
      [4,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,4,0,4],
      [4,0,0,4,0,0,4,4,4,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,4,0,4],
      [4,0,0,4,0,0,4,0,4,0,0,4,0,0,0,0,0,0,4,4,4,4,4,4,0,0,4,0,0,4,0,4],
      [4,0,0,4,0,0,4,4,4,0,0,4,4,4,4,4,4,4,0,4,0,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,4,4,4,4,4,4,0,0,4,4,4,4,0,0,4,0,0,4,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,0,4,4,4,4,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,4,0,0,4,4,4,4,4,4,4,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,4,0,4,0,0,0,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,4,0,4,0,0,0,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,4,0,0,4,4,4,4,4,0,4,4,4,4,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,0,0,4,0,0,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,0,0,4,0,0,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,4,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,4,4,4,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,4],
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,4,4,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4],
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0]]
  
    for(var i = 0; i < map.length; i++){
      for(var j = 0; j < map[i].length; j++){
        if(map[i][j]!=0){
          var image = document.getElementById(this.cubes)
          var shape = new Cube(this.texShader, [-16+i, -1, -16+j], map[i][j], .5, image)
          this.scene.addGeometry(shape)
        }
      }
    }
  
    //create square and add it 
    var image = document.getElementById(this.ground)
    var square = new Square(this.texShader, image)
    this.scene.addGeometry(square)
  
    var image = document.getElementById('sky')
    var shape = new Sky(this.texShader, image)
    this.scene.addGeometry(shape)

    var shape = new Sphere(this.colorShader, 13, [16,1,16])
    this.scene.addGeometry(shape)
  }

  setSetting(setting){
    this.worldSetting = setting
    if(this.worldSetting == "Snow"){
      this.cubes = 'ice'
      this.ground = 'snow'
   }else if(this.worldSetting == "Forest"){
      this.cubes = "treewood"
      this.ground = 'grass'
   }else if(this.worldSetting == "Desert"){
     this.cubes = "cactus"
     this.ground = "sand"
   }
  }

  setColors(cr, cg, cb, fr, fg, fb){
    this.rCube = cr; 
    this.gCube = cg; 
    this.bCube = cb; 
    this.rFloor = fr; 
    this.gFloor = fg; 
    this.bFloor = fb; 
  }
}