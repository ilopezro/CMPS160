/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z, rCol, gCol, bCol) {
      this.point  = new Vector3([x, y, z]);
      this.color  = [rCol, gCol, bCol, 1.0];

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }
}
