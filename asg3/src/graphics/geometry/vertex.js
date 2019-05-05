/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z) {
      this.point  = new Vector3([x, y, z]);
      var red = null
      var green = null
      var blue = null
      var name = document.getElementById('changeColors').value
      if(name === "🔴Solid Color🔴"){
        var redCol = (document.getElementById("redColor").value); 
        red = redCol/255;

        var greenCol = (document.getElementById("greenColor").value); 
        green = greenCol/255;

        var blueCol = (document.getElementById("blueColor").value); 
        blue = blueCol/255;
      }else{
        red = Math.random()
        green = Math.random()
        blue = Math.random()
      }

      this.color  = [red, green, blue, 1.0];

      this.texCoord = [0.0, 0.0];

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }

}
