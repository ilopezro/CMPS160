/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Triangle}
 */
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader, g_points, rColor, gColor, bColor) {
      super(shader);

      this.vertices = this.generateTriangleVertices(g_points, rColor, gColor, bColor);
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(g_points, rColor, gColor, bColor) {
      var vertices = []
      
      var vertex1 = new Vertex(g_points[0]-0.25, g_points[1]-0.25, 0.0, rColor, gColor, bColor);
      var vertex2 = new Vertex(g_points[0]+0.25, g_points[1]-0.25, 0.0, rColor, gColor, bColor);
      var vertex3 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, 0.0, rColor, gColor, bColor);

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);

      return vertices;
  }
}
