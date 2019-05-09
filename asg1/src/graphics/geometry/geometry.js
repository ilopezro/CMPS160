/**
 * Specifies a geometric object.
 *
 * @author Lucas N. Ferreira
 * @this {Geometry}
 */
class Geometry {
  /**
   * Constructor for Geometry.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Geometry} Geomtric object created
   */
  constructor(shader) {
      this.shader = shader;
  }

  /**
   * A callback used to modify a geometry every frame (60 typically).
   */
  render() {
    const times = [];
    var fps;
  
    function refreshLoop() {
      requestAnimationFrame(() => {
        const now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) {
          times.shift();
        }
        times.push(now);
        fps = times.length;
        document.getElementById('fps').innerHTML=fps
        console.log(fps)
        refreshLoop();
      });
    }
    refreshLoop();
    // return
  }

  /**
   * Interleaves the geometry's vertices for optimal performance. MUST be called
   * after any vertex is modified/constructed in a Geometry's vertices array.
   */
  interleaveVertices() {
        var interleavedData = interleaveVertexData(this.vertices);
        this.data       = interleavedData[0];
        this.indices    = interleavedData[1];
        this.dataCounts = interleavedData[2];
  }
}
