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
    constructor(shader, g_points, height, size, image, r, g, b) {
        super(shader);
        this.image = image

        this.vertices = this.generateCubeVertices(g_points, height, size, r, g, b);
        this.faces = {0: this.vertices};
  
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
    }

    generateCubeVertices(g_points, height, size, r, g, b){
        var vertices = []

        //front face of cube with full texture
        var vertex1 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), g_points[2]);
        var vertex2 = new Vertex(g_points[0]+Number(size), (g_points[1]+Number(size))*-height, g_points[2]);
        var vertex3 = new Vertex(g_points[0]-Number(size), (g_points[1]+Number(size))*-height, g_points[2]);
        var vertex4 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), g_points[2]);
        var vertex5 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), g_points[2]);
        var vertex6 = new Vertex(g_points[0]+Number(size), (g_points[1]+Number(size))*-height, g_points[2]);
       

        //top face of cube with the bottom half of the texture 
        var vertex7  = new Vertex(g_points[0]-Number(size), (g_points[1]+Number(size))*-height, g_points[2]);
        var vertex8  = new Vertex(g_points[0]+Number(size), (g_points[1]+Number(size))*-height, g_points[2]-Number(size)*2);
        var vertex9  = new Vertex(g_points[0]-Number(size), (g_points[1]+Number(size))*-height, g_points[2]-Number(size)*2);
        var vertex10 = new Vertex(g_points[0]-Number(size), (g_points[1]+Number(size))*-height, g_points[2]);
        var vertex11 = new Vertex(g_points[0]+Number(size), (g_points[1]+Number(size))*-height, g_points[2]);
        var vertex12 = new Vertex(g_points[0]+Number(size), (g_points[1]+Number(size))*-height, g_points[2]-Number(size)*2);
        

        //back face of cube with the two images 
        var vertex13 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), g_points[2]-Number(size)*2);
        var vertex14 = new Vertex(g_points[0]+Number(size), (g_points[1]+Number(size))*-height, g_points[2]-Number(size)*2);
        var vertex15 = new Vertex(g_points[0]-Number(size), (g_points[1]+Number(size))*-height, g_points[2]-Number(size)*2);
        var vertex16 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size),g_points[2] -Number(size)*2);
        var vertex17 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), g_points[2]-Number(size)*2);
        var vertex18 = new Vertex(g_points[0]+Number(size), (g_points[1]+Number(size))*-height, g_points[2]-Number(size)*2);
        

        //left facing cube has the image three times in a 3x3 table
        var vertex25 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), g_points[2]);
        var vertex26 = new Vertex(g_points[0]-Number(size), (g_points[1]+Number(size))*-height, g_points[2]);
        var vertex27 = new Vertex(g_points[0]-Number(size), (g_points[1]+Number(size))*-height, g_points[2]-Number(size)*2);
        var vertex28 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), g_points[2]);
        var vertex29 = new Vertex(g_points[0]-Number(size), g_points[1]-Number(size), g_points[2]-Number(size)*2);
        var vertex30 = new Vertex(g_points[0]-Number(size), (g_points[1]+Number(size))*-height, g_points[2]-Number(size)*2);
        

        //Right face has 4 faces on it a 2x2 table
        var vertex31 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), g_points[2]);
        var vertex32 = new Vertex(g_points[0]+Number(size), (g_points[1]+Number(size))*-height, g_points[2]);
        var vertex33 = new Vertex(g_points[0]+Number(size), (g_points[1]+Number(size))*-height, g_points[2]-Number(size)*2);
        var vertex34 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), g_points[2]);
        var vertex35 = new Vertex(g_points[0]+Number(size), g_points[1]-Number(size), g_points[2]-Number(size)*2);
        var vertex36 = new Vertex(g_points[0]+Number(size), (g_points[1]+Number(size))*-height, g_points[2]-Number(size)*2);

        if(this.image != null){
            //front cube
            vertex1.texCoord = [0.0, 0.0]
            vertex2.texCoord = [1.0, height]
            vertex3.texCoord = [0.0, height]
            vertex4.texCoord = [0.0, 0.0]
            vertex5.texCoord = [1.0, 0.0]
            vertex6.texCoord = [1.0, height]

            //top cube 
            vertex7.texCoord = [0.0, 0.0]
            vertex8.texCoord = [1.0, 1.0]
            vertex9.texCoord = [0.0, 1.0]
            vertex10.texCoord = [0.0, 0.0]
            vertex11.texCoord = [1.0, 0.0]
            vertex12.texCoord = [1.0, 1.0]

            //back cube
            vertex13.texCoord = [0.0, 0.0]
            vertex14.texCoord = [1.0, height]
            vertex15.texCoord = [0.0, height]
            vertex16.texCoord = [0.0, 0.0]
            vertex17.texCoord = [1.0, 0.0]
            vertex18.texCoord = [1.0, height]

            //left cube
            vertex25.texCoord = [0.0, 0.0]
            vertex26.texCoord = [0.0, height]
            vertex27.texCoord = [1.0, height]
            vertex28.texCoord = [0.0, 0.0]
            vertex29.texCoord = [1.0, 0.0]
            vertex30.texCoord = [1.0, height]

            //right cube
            vertex31.texCoord = [0.0,0.0]
            vertex32.texCoord = [0.0, height] 
            vertex33.texCoord = [1.0, height]
            vertex34.texCoord = [0.0,0.0]
            vertex35.texCoord = [1.0, 0.0]
            vertex36.texCoord = [1.0, height]
        }else if(this.image == null){
            //front cube
            vertex1.color = [r/255, g/255, b/255, 1.0] 
            vertex2.color = [r/255, g/255, b/255, 1.0] 
            vertex3.color = [r/255, g/255, b/255, 1.0] 
            vertex4.color = [r/255, g/255, b/255, 1.0] 
            vertex5.color = [r/255, g/255, b/255, 1.0] 
            vertex6.color = [r/255, g/255, b/255, 1.0] 

            //top cube 
            vertex7.color = [r/255, g/255, b/255, 1.0] 
            vertex8.color = [r/255, g/255, b/255, 1.0] 
            vertex9.color = [r/255, g/255, b/255, 1.0] 
            vertex10.color = [r/255, g/255, b/255, 1.0] 
            vertex11.color = [r/255, g/255, b/255, 1.0] 
            vertex12.color = [r/255, g/255, b/255, 1.0] 

            //back cube
            vertex13.color = [r/255, g/255, b/255, 1.0] 
            vertex14.color = [r/255, g/255, b/255, 1.0] 
            vertex15.color = [r/255, g/255, b/255, 1.0] 
            vertex16.color = [r/255, g/255, b/255, 1.0] 
            vertex17.color = [r/255, g/255, b/255, 1.0] 
            vertex18.color = [r/255, g/255, b/255, 1.0] 

            //left cube
            vertex25.color = [r/255, g/255, b/255, 1.0] 
            vertex26.color = [r/255, g/255, b/255, 1.0] 
            vertex27.color = [r/255, g/255, b/255, 1.0] 
            vertex28.color = [r/255, g/255, b/255, 1.0] 
            vertex29.color = [r/255, g/255, b/255, 1.0] 
            vertex30.color = [r/255, g/255, b/255, 1.0] 

            //right cube
            vertex31.color = [r/255, g/255, b/255, 1.0] 
            vertex32.color = [r/255, g/255, b/255, 1.0]  
            vertex33.color = [r/255, g/255, b/255, 1.0] 
            vertex34.color = [r/255, g/255, b/255, 1.0] 
            vertex35.color = [r/255, g/255, b/255, 1.0] 
            vertex36.color = [r/255, g/255, b/255, 1.0] 
        }



        //adding front face of cube vertices
        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
        vertices.push(vertex4);
        vertices.push(vertex5);
        vertices.push(vertex6);

        //adding top face of cube vertices
        vertices.push(vertex7);
        vertices.push(vertex8);
        vertices.push(vertex9);
        vertices.push(vertex10);
        vertices.push(vertex11);
        vertices.push(vertex12);

        //adding back face of cube vertices
        vertices.push(vertex13);
        vertices.push(vertex14);
        vertices.push(vertex15);
        vertices.push(vertex16);
        vertices.push(vertex17);
        vertices.push(vertex18);

        //adding left face of cube vertices 
        vertices.push(vertex25);
        vertices.push(vertex26);
        vertices.push(vertex27);
        vertices.push(vertex28);
        vertices.push(vertex29);
        vertices.push(vertex30);

        //adding right face of vertices
        vertices.push(vertex31);
        vertices.push(vertex32);
        vertices.push(vertex33);
        vertices.push(vertex34);
        vertices.push(vertex35);
        vertices.push(vertex36);

        return vertices;
    }
}