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
  constructor(shader, g_points, size) {
      super(shader);

      this.x = g_points[0]
      this.y = g_points[1]

      this.modelMatrix = new Matrix4(); 
      this.isExpanding = true; 
      this.scale = 1; 
      this.scalingMatrix = new Matrix4()


      this.vertices = this.generateTriangleVertices(g_points, size);
      this.faces = {0: this.vertices};

      this.translationMatrix = new Matrix4();
      this.translationMatrix.setTranslate(-this.x,-this.y,0);

      this.scalingMatrix = new Matrix4();
      this.scalingMatrix.setScale(1.25,1.25,1.25);

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(g_points, size) {
      var vertices = []
      
      var vertex1 = new Vertex(g_points[0], g_points[1]+Number(size), 0.0);
      var vertex2 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), 0.0);
      var vertex3 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), 0.0);

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);

      return vertices;
  }

  render(){
    if(this.isExpanding){
      this.scale +=.1
      if(this.scale>=2){
          this.isExpanding = false; 
      }
    }else{
       this.scale -= .1
       if(this.scale <= .5){
           this.isExpanding = true; 
       }
    }
    this.scalingMatrix.setScale(this.scale, this.scale, 1);
   
    var tMatrix = new Matrix4();
    tMatrix.set(this.modelMatrix);

    this.translationMatrix.setTranslate(this.x,this.y,0);
    tMatrix.multiply(this.translationMatrix);
    tMatrix.multiply(this.scalingMatrix);
    this.translationMatrix.setTranslate(-this.x, -this.y, 0)
    tMatrix.multiply(this.translationMatrix);
    this.shader.setUniform("u_ModelMatrix", tMatrix.elements);   
  }
}
