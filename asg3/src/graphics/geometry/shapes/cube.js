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
    constructor(shader, g_points, size, image) {
        super(shader, g_points[0], g_points[1]);

        this.modelMatrix = new Matrix4()
        this.image = image
        
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
        vertex1.texCoord = [0.0, 0.0]
        var vertex2 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), Number(size));
        vertex2.texCoord = [1.0, 1.0]
        var vertex3 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), Number(size));
        vertex3.texCoord = [0.0, 1.0]
        var vertex4 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), Number(size));
        vertex4.texCoord = [0.0, 0.0]
        var vertex5 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), Number(size));
        vertex5.texCoord = [1.0, 0.0]
        var vertex6 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), Number(size));
        vertex6.texCoord = [1.0, 1.0]
        

        //adding front face of cube vertices
        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
        vertices.push(vertex4);
        vertices.push(vertex5);
        vertices.push(vertex6);

        //top face of cube
        var vertex7  = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), Number(size));
        vertex7.texCoord = [0.0, 0.5]
        var vertex8  = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));
        vertex8.texCoord = [1.0, 1.0]
        var vertex9  = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), -Number(size));
        vertex9.texCoord = [0.0, 1.0]
        var vertex10 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), Number(size));
        vertex10.texCoord = [0.0, 0.5]
        var vertex11 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), Number(size));
        vertex11.texCoord = [1.0, 0.5]
        var vertex12 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));
        vertex12.texCoord = [1.0, 1.0]

        //adding top face of cube vertices
        vertices.push(vertex7);
        vertices.push(vertex8);
        vertices.push(vertex9);
        vertices.push(vertex10);
        vertices.push(vertex11);
        vertices.push(vertex12);

        //back face of cube
        var vertex13 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), -Number(size));
        vertex13.texCoord = [0.0, 0.0]
        var vertex14 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));
        vertex14.texCoord = [2.0, 1.0]
        var vertex15 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), -Number(size));
        vertex15.texCoord = [0.0, 1.0]
        var vertex16 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), -Number(size));
        vertex16.texCoord = [0.0, 0.0]
        var vertex17 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), -Number(size));
        vertex17.texCoord = [2.0, 0.0]
        var vertex18 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));
        vertex18.texCoord = [2.0, 1.0]

        //adding back face of cube vertices
        vertices.push(vertex13);
        vertices.push(vertex14);
        vertices.push(vertex15);
        vertices.push(vertex16);
        vertices.push(vertex17);
        vertices.push(vertex18);

        //bottom face of vertices
        var vertex19 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), Number(size));
        vertex19.texCoord = [0.0, 0.0]
        var vertex20 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), -Number(size));
        vertex20.texCoord = [1.0, 0.5]
        var vertex21 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), -Number(size));
        vertex21.texCoord = [0.0, 0.5]
        var vertex22 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), Number(size));
        vertex22.texCoord = [0.0, 0.0]
        var vertex23 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), Number(size));
        vertex23.texCoord = [1.0, 0.0]
        var vertex24 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), -Number(size));
        vertex24.texCoord = [1.0, 0.5]

        //bottom face of cube vertices being added
        vertices.push(vertex19);
        vertices.push(vertex20);
        vertices.push(vertex21);
        vertices.push(vertex22);
        vertices.push(vertex23);
        vertices.push(vertex24);

        //left facing cube 
        var vertex25 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), Number(size));
        vertex25.texCoord = [0.0, 0.0]
        var vertex26 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), -Number(size));
        vertex26.texCoord = [3.0, 3.0]
        var vertex27 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), Number(size));
        vertex27.texCoord = [0.0, 3.0]
        var vertex28 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), Number(size));
        vertex28.texCoord = [0.0, 0.0]
        var vertex29 = new Vertex(g_points[0]-Number(size), g_points[1]+-Number(size), -Number(size));
        vertex29.texCoord = [3.0, 0.0]
        var vertex30 = new Vertex(g_points[0]-Number(size), g_points[1]+Number(size), -Number(size));
        vertex30.texCoord = [3.0, 3.0]

        //adding left face of cube vertices 
        vertices.push(vertex25);
        vertices.push(vertex26);
        vertices.push(vertex27);
        vertices.push(vertex28);
        vertices.push(vertex29);
        vertices.push(vertex30);

        //Right
        var vertex31 = new Vertex(g_points[0]+Number(size), g_points[1]+-Number(size), Number(size));
        vertex31.texCoord = [0.0,0.0]
        var vertex32 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));
        vertex32.texCoord = [2.0, 2.0] 
        var vertex33 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), Number(size));
        vertex33.texCoord = [0.0, 2.0]
        var vertex34 = new Vertex(g_points[0]+Number(size), g_points[1]+-Number(size), Number(size));
        vertex34.texCoord = [0.0,0.0]
        var vertex35 = new Vertex(g_points[0]+Number(size), g_points[1]+-Number(size), -Number(size));
        vertex35.texCoord = [2.0, 0.0]
        var vertex36 = new Vertex(g_points[0]+Number(size), g_points[1]+Number(size), -Number(size));
        vertex36.texCoord = [2.0, 2.0]

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
        
        this.rotationMatrix.setRotate(this.rot,1,1,1);
        var permRotMatrix = new Matrix4();
        permRotMatrix.setRotate(45, 1, 1, 1);

        var tMatrix = new Matrix4();
        tMatrix.set(this.modelMatrix);
        tMatrix.multiply(permRotMatrix);
        tMatrix.multiply(this.rotationMatrix);
        
        this.shader.setUniform("u_ModelMatrix", tMatrix.elements);
    }
}