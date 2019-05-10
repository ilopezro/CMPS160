/**
 * Specifies a Camera that can Dolly/Truck and Tilt/Pan.
 *
 * @author Lucas N. Ferreira
 * @this {Renderer}
 */
class Camera {
   /**
    * Constructor for Camera.
    *
    * @constructor
    * @returns {Camera} Camera object created
    */
    constructor(shader) {
        this.speed = 0.1;

        // Camera view attributes
        this.eye     = new Vector3([0, 0, 1]);
        this.center  = new Vector3([0, 0,-1]);
        this.up      = new Vector3([0, 1, 1]);

        this.viewMatrix = new Matrix4();
        this.updateView();
        this.projectionMatrix = new Matrix4();
    }


    truck(dir) {
        // Calculate the n camera axis
        var n = this.eye.sub(this.center);
        n = n.normalize()

        // Calculate the u camera axis
        var u = this.up.cross(n);
        u = u.normalize();

        // Scale the u axis to the desired distance to move
        u = u.mul(dir * this.speed);

        // Add the direction vector to both the eye and center positions
        this.eye = this.eye.add(u);
        this.center = this.center.add(u);

        this.updateView();
    }

    dolly(dir){
        //calculate the n camera axis
        var n = this.eye.sub(this.center);
        n = n.normalize()

        //scale the n vector to move desired distance
        n = n.mul(dir * this.speed)

        //add this direction vector to the eye 
        this.eye = this.eye.add(n)
        this.center = this.center.add(n)

        this.updateView();
    }

    pan(dir) {

    }

    tilt(dir){
        // Calculate the n camera axis
        var n = this.eye.sub(this.center);
        n = n.normalize()

        // Calculate the u camera axis
        var u = this.up.cross(n);
        u = u.normalize();

        //calculate new center point 
        var d = new Vector3([0,0,0])
        var d = this.center.sub(this.eye)

        //rotate about u axis 
        var transformMatrix = new Matrix4()
        transformMatrix.setRotate(dir, u.elements[0], u.elements[1], u.elements[2])
        console.log(transformMatrix)

        //rotate center point 
        d = transformMatrix.multiplyVector3(d)

        //update center 
        this.center = d.add(this.eye)

        // If the angle between the line-of-sight and the "up vector" is less
        // than 10 degrees or greater than 170 degrees, then rotate the
        // "up_vector" about the u axis.
        if(Math.abs(n.mul(this.up)) >= .985){
            this.up = transformMatrix.multiplyVector3(this.up)
        }

        this.updateView()
        
    }

    updateView() {
        this.viewMatrix.setLookAt(this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],
                                  this.center.elements[0], this.center.elements[1], this.center.elements[2],
                                  this.up.elements[0], this.up.elements[1], this.up.elements[2]);
    }
}
