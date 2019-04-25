/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z, rCol, gCol, bCol) {
      this.point  = new Vector3([x, y, z]);
      var r = rCol/255; 
      var g = gCol/255; 
      var b = bCol/255; 
      this.color  = [r, g, b, 1.0];

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }
}
