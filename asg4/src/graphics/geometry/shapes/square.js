/**
 * Specifies a square. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Square}
 */
class Square extends Geometry {
    /**
     * Constructor for Square.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {Square} Square created
     */
    constructor(shader) {
        super(shader);

        this.modelMatrix = new Matrix4(); 
  
        this.vertices = this.generateSquareVertices()
        this.faces = {0: this.vertices};
  
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
    }
  
    generateSquareVertices() {
        var vertices = []
  
        var vertex1 = new Vertex(-8, -1, -8)
        var vertex2 = new Vertex(8, -1, -8)
        var vertex3 = new Vertex(8, -1, 8) 
        var vertex4 = new Vertex(-8, -1, -8)
        var vertex5 = new Vertex(-8, -1, 8)
        var vertex6 = new Vertex(8, -1, 8)
  
        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
        vertices.push(vertex4)
        vertices.push(vertex5)
        vertices.push(vertex6)
  
        return vertices;
    }
  }
  