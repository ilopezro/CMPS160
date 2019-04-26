/**
 * Specifies a circle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Circle}
 */
class Circle extends Geometry {
    /**
     * Constructor for Circle.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {Circle} Circle created
     */
    constructor(shader, g_points, size, circleSegments) {
        super(shader, g_points[0], g_points[1]);

        this.modelMatrix = new Matrix4()
  
        this.vertices = this.generateCircleVertices(g_points, size, circleSegments);
        this.faces = {0: this.vertices};

        this.translationMatrix = new Matrix4()
        this.translationMatrix.setTranslate(g_points[0], g_points[1], 0)
  
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
    }
  
    generateCircleVertices(g_points, size, circleSegments) {
        var vertices = []
        var x = 0
        var y = 0
        var counter = 360 / circleSegments
  
        var centerVertex = new Vertex(g_points[0], g_points[1], 0.0);
        
        for (var count = 0; count < 360; count = count + counter ) {

            vertices.push(centerVertex);
    
            x = Math.cos(count * (Math.PI/180)) * size
            y = Math.sin(count * (Math.PI/180)) * size
            var vertex = new Vertex(g_points[0] + x, g_points[1] + y, 0.0);
            vertices.push(vertex);
    
            x = Math.cos((count + counter) * (Math.PI/180) ) * size
            y = Math.sin((count + counter) * (Math.PI/180) ) * size
            vertex = new Vertex(g_points[0] + x, g_points[1] + y, 0.0);
            vertices.push(vertex);
        }
  
        return vertices;
    }
  }

  