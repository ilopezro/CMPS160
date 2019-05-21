class Light {
    constructor(x, y, z) {
        this.pos = new Vector3([x, y, z]);

        // light colors
        this.ambient = [1.0,1.0,1.0];
        this.diffuse = [0.5,0.5,0.5];
        this.specular = [1.0,1.0,1.0]
        // Later you will add specular here too.
    }
}
