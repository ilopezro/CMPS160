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
    constructor(shader, image, r, g, b) {
        super(shader);

        this.image = image
  
        this.vertices = this.generateSquareVertices(r, g, b)
        this.faces = {0: this.vertices};
  
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
    }
  
    generateSquareVertices(r, g, b) {
        var vertices = []
  
        var vertex1 = new Vertex(-16, -1.5, -16)
        var vertex2 = new Vertex(16, -1.5, -16)
        var vertex3 = new Vertex(16, -1.5, 16) 
        var vertex4 = new Vertex(-16, -1.5, -16)
        var vertex5 = new Vertex(-16, -1.5, 16)
        var vertex6 = new Vertex(16, -1.5, 16)

        if(this.image != null){
            vertex1.texCoord = [0.0, 0.0]
            vertex2.texCoord = [16.0, 0.0]
            vertex3.texCoord = [16.0, 16.0]
            vertex4.texCoord = [0.0, 0.0]
            vertex5.texCoord = [0.0, 16.0]
            vertex6.texCoord = [16.0, 16.0] 
        } else if(this.image == null){
            vertex1.color = [r/255,g/255,b/255, 1.0]
            vertex2.color = [r/255,g/255,b/255, 1.0]
            vertex3.color = [r/255,g/255,b/255, 1.0]
            vertex4.color = [r/255,g/255,b/255, 1.0]
            vertex5.color = [r/255,g/255,b/255, 1.0]
            vertex6.color = [r/255,g/255,b/255, 1.0]
        }

        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
        vertices.push(vertex4)
        vertices.push(vertex5)
        vertices.push(vertex6)
  
        return vertices;
    }
  }
  