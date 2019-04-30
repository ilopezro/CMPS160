/**
 * Specifies a Cube. A subclass of geometry.
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
        super(shader, g_points[0], g_points[1]);
        this.rot = 0
        this.rotationMatrix = new Matrix4();

        this.vertices = this.generateCubeVertices(g_points, size);
        this.faces = {0: this.vertices};
  
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
    }

    generateCubeVertices(g_points, size){
        var vertices = []

        //front face of cube 
        var vertex1 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), Number(size));
        var vertex2 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), Number(size));
        var vertex3 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), Number(size));
        var vertex4 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), Number(size));
        var vertex5 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), Number(size));
        var vertex6 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), Number(size));

        //adding front face of cube vertices
        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
        vertices.push(vertex4);
        vertices.push(vertex5);
        vertices.push(vertex6);

        //top face of cube
        var vertex7  = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), Number(size));
        var vertex8  = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));
        var vertex9  = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), -Number(size));
        var vertex10 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), Number(size));
        var vertex11 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), Number(size));
        var vertex12 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));

        //adding top face of cube vertices
        vertices.push(vertex7);
        vertices.push(vertex8);
        vertices.push(vertex9);
        vertices.push(vertex10);
        vertices.push(vertex11);
        vertices.push(vertex12);

        //back face of cube
        var vertex13 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), -Number(size));
        var vertex14 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));
        var vertex15 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), -Number(size));
        var vertex16 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), -Number(size));
        var vertex17 = new Vertex(g_points[0]+Number(size), g_points[1]+-Number(size), -Number(size));
        var vertex18 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));

        //adding back face of cube vertices
        vertices.push(vertex13);
        vertices.push(vertex14);
        vertices.push(vertex15);
        vertices.push(vertex16);
        vertices.push(vertex17);
        vertices.push(vertex18);

        //bottom face of vertices
        var vertex19 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), Number(size));
        var vertex20 = new Vertex(g_points[0]+Number(size), g_points[1]+-Number(size), -Number(size));
        var vertex21 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), -Number(size));
        var vertex22 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), Number(size));
        var vertex23 = new Vertex(g_points[0]+Number(size), g_points[1]+-Number(size), Number(size));
        var vertex24 = new Vertex(g_points[0]+Number(size), g_points[1]+-Number(size), -Number(size));

        //bottom face of cube vertices being added
        vertices.push(vertex19);
        vertices.push(vertex20);
        vertices.push(vertex21);
        vertices.push(vertex22);
        vertices.push(vertex23);
        vertices.push(vertex24);

        //left facing cube 
        var vertex25 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), Number(size));
        var vertex26 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), -Number(size));
        var vertex27 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), Number(size));
        var vertex28 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), Number(size));
        var vertex29 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), -Number(size));
        var vertex30 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), -Number(size));

        //adding left face of cube vertices 
        vertices.push(vertex25);
        vertices.push(vertex26);
        vertices.push(vertex27);
        vertices.push(vertex28);
        vertices.push(vertex29);
        vertices.push(vertex30);

        //Right
        var vertex31 = new Vertex(g_points[0]+Number(size), g_points[1]+-Number(size), Number(size));
        var vertex32 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));
        var vertex33 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), Number(size));
        var vertex34 = new Vertex(g_points[0]+Number(size), g_points[1]+-Number(size), Number(size));
        var vertex35 = new Vertex(g_points[0]+Number(size), g_points[1]+-Number(size), -Number(size));
        var vertex36 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));

        //adding right face of vertices
        vertices.push(vertex31);
        vertices.push(vertex32);
        vertices.push(vertex33);
        vertices.push(vertex34);
        vertices.push(vertex35);
        vertices.push(vertex36);

        return vertices;
    }

    render() {
        this.rot = (this.rot + 2) % 360;
        
        this.rotationMatrix.setRotate(this.rot,1,0,0);
        var permRotMatrix = new Matrix4();
        permRotMatrix.setRotate(45, 1, 1, 0);

        var tMatrix = new Matrix4();
        tMatrix.set(this.modelMatrix);
        tMatrix.multiply(permRotMatrix);
        tMatrix.multiply(this.rotationMatrix);
        
        this.shader.setUniform("u_ModelMatrix", tMatrix.elements);
    }

}