/**
 * Specifies a square. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Triangle}
 */
class Square extends Geometry {
    /**
     * Constructor for Square.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {Square} Square created
     */
    constructor(shader, g_points) {
        super(shader);
  
        this.vertices = this.generateTriangleVertices(g_points);
        this.faces = {0: this.vertices};
  
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
    }
  
    generateTriangleVertices(g_points) {
        var vertices = []
  
        var vertex1 = new Vertex(g_points[0]-0.25, g_points[1]-0.25, 0.0);
        var vertex2 = new Vertex(g_points[0]+0.25, g_points[1]-0.25, 0.0);
        var vertex3 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, 0.0);
        var vertex4 = new Vertex(g_points[0]-0.25, g_points[1]+0.25, 0.0);
        var vertex5 = new Vertex(g_points[0]-0.25, g_points[1]-0.25, 0.0);
  
        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
        vertices.push(vertex4)
        vertices.push(vertex5)
  
        return vertices;
    }
  }
  