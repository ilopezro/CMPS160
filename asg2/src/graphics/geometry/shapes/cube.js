/**
 * Specifies a circle. A subclass of geometry.
 *
 * @author Isai Lopez
 * @this {Cube}
 */

class Cube extends Geometry {
    /**
     * Constructor for Circle.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @param size Size of the cube
     * @returns {Cube} Circle created
     */
    constructor(shader, g_points, size) {
        super(shader);
        this.rot = 0
        this.rotationMatrix = new Matrix4();
  
        this.vertices = this.generateCubeVertices(g_points, size);
        this.faces = {0: this.vertices};
  
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
    }

    render() {
        this.rot = (this.rot + 2) % 360;
        
        this.rotationMatrix.setRotate(this.rot,1,0,0);
        var rotMatrix = new Matrix4();
        rotMatrix.setRotate(45, 0, 1, 1);

        var tMatrix = new Matrix4();
        tMatrix.set(this.modelMatrix);
        tMatrix.multiply(rotMatrix);
        tMatrix.multiply(this.rotationMatrix);

        this.shader.setUniform("u_ModelMatrix", tMatrix.elements);
    }

    generateCubeVertices(g_points, size){
        var vertices = []

        //Front
        var vertex1 = new Vertex(g_points[0]-0.25, g_points[1]-0.25, 0.25);
        var vertex2 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, 0.25);
        var vertex3 = new Vertex(g_points[0]-0.25, g_points[1]+0.25, 0.25);
        var vertex4 = new Vertex(g_points[0]-0.25, g_points[1]-0.25, 0.25);
        var vertex5 = new Vertex(g_points[0]+0.25, g_points[1]-0.25, 0.25);
        var vertex6 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, 0.25);

        //Top
        var vertex7  = new Vertex(g_points[0]-0.25, g_points[1]+0.25, 0.25);
        var vertex8  = new Vertex(g_points[0]+0.25, g_points[1]+0.25, -0.25);
        var vertex9  = new Vertex(g_points[0]-0.25, g_points[1]+0.25, -0.25);
        var vertex10 = new Vertex(g_points[0]-0.25, g_points[1]+0.25, 0.25);
        var vertex11 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, 0.25);
        var vertex12 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, -0.25);

        //Back
        var vertex13 = new Vertex(g_points[0]-0.25, g_points[1]+-0.25, -0.25);
        var vertex14 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, -0.25);
        var vertex15 = new Vertex(g_points[0]-0.25, g_points[1]+0.25, -0.25);
        var vertex16 = new Vertex(g_points[0]-0.25, g_points[1]+-0.25, -0.25);
        var vertex17 = new Vertex(g_points[0]+0.25, g_points[1]+-0.25, -0.25);
        var vertex18 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, -0.25);

        //Bottom
        var vertex19 = new Vertex(g_points[0]-0.25, g_points[1]+-0.25, 0.25);
        var vertex20 = new Vertex(g_points[0]+0.25, g_points[1]+-0.25, -0.25);
        var vertex21 = new Vertex(g_points[0]-0.25, g_points[1]+-0.25, -0.25);
        var vertex22 = new Vertex(g_points[0]-0.25, g_points[1]+-0.25, 0.25);
        var vertex23 = new Vertex(g_points[0]+0.25, g_points[1]+-0.25, 0.25);
        var vertex24 = new Vertex(g_points[0]+0.25, g_points[1]+-0.25, -0.25);

        //Left
        var vertex25 = new Vertex(g_points[0]-0.25, g_points[1]+-0.25, 0.25);
        var vertex26 = new Vertex(g_points[0]-0.25, g_points[1]+0.25, -0.25);
        var vertex27 = new Vertex(g_points[0]-0.25, g_points[1]+0.25, 0.25);
        var vertex28 = new Vertex(g_points[0]-0.25, g_points[1]+-0.25, 0.25);
        var vertex29 = new Vertex(g_points[0]-0.25, g_points[1]+-0.25, -0.25);
        var vertex30 = new Vertex(g_points[0]-0.25, g_points[1]+0.25, -0.25);

        //Right
        var vertex31 = new Vertex(g_points[0]+0.25, g_points[1]+-0.25, 0.25);
        var vertex32 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, -0.25);
        var vertex33 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, 0.25);
        var vertex34 = new Vertex(g_points[0]+0.25, g_points[1]+-0.25, 0.25);
        var vertex35 = new Vertex(g_points[0]+0.25, g_points[1]+-0.25, -0.25);
        var vertex36 = new Vertex(g_points[0]+0.25, g_points[1]+0.25, -0.25);

        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
        vertices.push(vertex4);
        vertices.push(vertex5);
        vertices.push(vertex6);
        vertices.push(vertex7);
        vertices.push(vertex8);
        vertices.push(vertex9);
        vertices.push(vertex10);
        vertices.push(vertex11);
        vertices.push(vertex12);
        vertices.push(vertex13);
        vertices.push(vertex14);
        vertices.push(vertex15);
        vertices.push(vertex16);
        vertices.push(vertex17);
        vertices.push(vertex18);
        vertices.push(vertex19);
        vertices.push(vertex20);
        vertices.push(vertex21);
        vertices.push(vertex22);
        vertices.push(vertex23);
        vertices.push(vertex24);
        vertices.push(vertex25);
        vertices.push(vertex26);
        vertices.push(vertex27);
        vertices.push(vertex28);
        vertices.push(vertex29);
        vertices.push(vertex30);
        vertices.push(vertex31);
        vertices.push(vertex32);
        vertices.push(vertex33);
        vertices.push(vertex34);
        vertices.push(vertex35);
        vertices.push(vertex36);

        return vertices;
    }

}