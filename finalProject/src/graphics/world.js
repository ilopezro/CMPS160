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

   //world settings
   this.worldSetting = null; 
   this.worldDifficulty = null; 

   //textured cubes and ground
   this.cubes = null; 
   this.ground = null; 

   //rgb colors used for cubes 
   this.rCube = null; 
   this.gCube = null; 
   this.bCube = null; 

   //rgb colors used for floor
   this.rFloor = null; 
   this.gFloor = null; 
   this.bFloor = null; 

   //map
   this.map = null; 
  }

  drawWorld(){
    if(this.rCube == null){
      for(var i = 0; i < this.map.length; i++){
        for(var j = 0; j < this.map[i].length; j++){
          if(this.map[i][j]!=0){
            var image = document.getElementById(this.cubes)
            var shape = new Cube(this.texShader, [-16+i, -1, -16+j], this.map[i][j], .5, image)
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
    }else if(this.rCube != null){ //if there are only purely colors
      for(var i = 0; i < this.map.length; i++){
        for(var j = 0; j < this.map[i].length; j++){
          if(this.map[i][j]!=0){
            var shape = new Cube(this.colorShader, [-16+i, -1, -16+j], this.map[i][j], .5, null, this.rCube, this.gCube, this.bCube)
            this.scene.addGeometry(shape)
          }
        }
      }
    
      //create square and add it 
      var square = new Square(this.colorShader, null, this.rFloor, this.gFloor, this.bFloor)
      this.scene.addGeometry(square)
    
      var image = document.getElementById('sky')
      var shape = new Sky(this.texShader, image)
      this.scene.addGeometry(shape)
  
      var shape = new Sphere(this.colorShader, 13, [16,1,16])
      this.scene.addGeometry(shape)
      console.log("colored world created")
    }
  }

  setSetting(setting, difficulty){
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
   this.worldDifficulty = difficulty
   if(this.worldDifficulty == "Easy"){
    this.map = [
      [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,0,0,0,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,0,0,0,0,0,4,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,1,0,0,0,0,0,4,4,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [4,0,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,0,4],
      [4,0,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0]]
   }else if(this.worldDifficulty == "Medium"){
    this.map = [
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
   }else if(this.worldDifficulty == "Hard"){
    this.map = [
      [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0],
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,4,4,0,0,4,4,4,4,0,0,0,0,0,4,0,4,4,4,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,4,4,0,0,4,0,0,4,0,0,0,0,0,4,0,4,0,0,4,0,0,0,0,0,4],
      [4,4,0,0,0,0,0,0,4,0,0,4,4,4,4,4,4,4,0,0,4,0,4,0,0,4,0,0,0,0,0,4],
      [4,4,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,4,0,0,4,4,4,0,0,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,4,4,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,0,0,0,0,0,4,0,0,4,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,0,0,0,0,0,4,0,0,4,0,0,4,0,0,4,4,4,4,4,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,0,0,4,0,0,4,4,4,4,4,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,4,4,4,0,0,4],
      [4,4,0,0,4,4,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,4,0,0,4],
      [4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,0,0,4,0,0,4,0,0,4,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,0,4,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,0,4,0,0,4],
      [4,4,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,4,4,4,0,0,4,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,0,0,4,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,4,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,4,4,4,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,4,0,0,4],
      [4,4,4,4,0,0,4,4,4,4,0,0,4,4,0,0,4,0,0,0,0,0,4,0,0,0,0,0,4,0,0,4],
      [4,0,0,0,0,0,4,0,0,4,0,0,4,4,0,0,4,0,0,0,0,0,4,4,4,4,4,4,4,0,0,4],
      [4,0,0,0,0,0,4,0,0,4,0,0,4,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0]]
   }
  }

  setDifficulty(difficulty){
    this.worldDifficulty = difficulty
    this.worldDifficulty = difficulty
   if(this.worldDifficulty == "Easy"){
    this.map = [
      [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,0,0,0,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,0,0,0,0,0,4,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,1,0,0,0,0,0,4,4,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4],
      [4,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [4,0,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,4,4,0,0,4,0,4],
      [4,0,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4,0,0,4,0,4],
      [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0]]
   }else if(this.worldDifficulty == "Medium"){
    this.map = [
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
   }else if(this.worldDifficulty == "Hard"){
    this.map = [
      [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0],
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,4,4,0,0,4,4,4,4,0,0,0,0,0,4,0,4,4,4,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,4,4,0,0,4,0,0,4,0,0,0,0,0,4,0,4,0,0,4,0,0,0,0,0,4],
      [4,4,0,0,0,0,0,0,4,0,0,4,4,4,4,4,4,4,0,0,4,0,4,0,0,4,0,0,0,0,0,4],
      [4,4,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,4,0,0,4,4,4,0,0,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,4,4,4,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,0,0,0,0,0,4,0,0,4,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,0,0,0,0,0,4,0,0,4,0,0,4,0,0,4,4,4,4,4,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,0,0,4,0,0,4,4,4,4,4,4,0,0,0,0,0,4],
      [4,4,0,0,4,4,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,4,4,4,0,0,4],
      [4,4,0,0,4,4,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,4,0,0,4],
      [4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,0,0,4,0,0,4,0,0,4,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,0,4,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,4,0,0,4,0,0,4],
      [4,4,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,4,4,4,0,0,4,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,0,0,4,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,4,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,4,4,4,0,0,4,0,0,4],
      [4,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,4,0,0,4],
      [4,4,4,4,0,0,4,4,4,4,0,0,4,4,0,0,4,0,0,0,0,0,4,0,0,0,0,0,4,0,0,4],
      [4,0,0,0,0,0,4,0,0,4,0,0,4,4,0,0,4,0,0,0,0,0,4,4,4,4,4,4,4,0,0,4],
      [4,0,0,0,0,0,4,0,0,4,0,0,4,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
      [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0]]
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