function main(){
    //get canvas 
    var canvas = document.getElementById('webgl');
    if(!canvas){
        console.log('failed to retrieve canvas')
        return
    }
    console.log('succesfully retrieved canvas')

    //gets rendering context for webgl
    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log("failed to get rendering context for WebGL")
        return
    }
    console.log("succesfully retreived context")

    //specifies color for the canvas
    gl.clearColor(0.0,0.0,0.0,1.0);

    //clears the canvas 
    gl.clear(gl.COLOR_BUFFER_BIT); 
}