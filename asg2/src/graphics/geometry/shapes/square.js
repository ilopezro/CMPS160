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
    constructor(shader, g_points, rColor, gColor, bColor, size) {
        super(shader);

        this.x = g_points[0]
        this.y = g_points[1]

        this.modelMatrix = new Matrix4(); 
  
        this.vertices = this.generateTriangleVertices(g_points, rColor, gColor, bColor, size)
        this.faces = {0: this.vertices};
        this.rot = 0;

        this.rotationMatrix = new Matrix4();
        this.rotationMatrix.setRotate(5,0,0,1);

        this.translationMatrix = new Matrix4();
        this.translationMatrix.setTranslate(-this.x,-this.y,0);

        this.scalingMatrix = new Matrix4();
        this.scalingMatrix.setScale(1.25,1.25,1.25);
  
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
    }
  
    generateTriangleVertices(g_points, rColor, gColor, bColor, size) {
        var vertices = []
  
        var vertex1 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), 0.0, rColor, gColor, bColor);
        var vertex2 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), 0.0, rColor, gColor, bColor);
        var vertex3 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), 0.0, rColor, gColor, bColor);
        var vertex4 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), 0.0, rColor, gColor, bColor);
        var vertex5 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), 0.0, rColor, gColor, bColor);
        var vertex6 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), 0.0, rColor, gColor, bColor);
  
        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
        vertices.push(vertex4)
        vertices.push(vertex5)
        vertices.push(vertex6)
  
        return vertices;
    }

    render(){
        this.translationMatrix.setTranslate(this.x,this.y,0);
        this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
        this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);
        this.translationMatrix.setTranslate(-this.x, -this.y, 0)
        this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
        this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);   
    }
  }
  