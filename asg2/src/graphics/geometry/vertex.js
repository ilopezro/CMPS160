/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z) {
      this.point  = new Vector3([x, y, z]);

      var redCol = (document.getElementById("redColor").value); 
      var red = redCol/255;

      var greenCol = (document.getElementById("greenColor").value); 
      var green = greenCol/255;

      var blueCol = (document.getElementById("blueColor").value); 
      var blue = blueCol/255;

      this.color  = [red, green, blue, 1.0];

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }

}
