class Light {
    constructor(x, y, z) {
        this.pos = new Vector3([x, y, z]);

        // light colors
        this.ambient = [0.0,0.0,0.0];
        this.diffuse = [0.0,0.0,0.0];

        // Later you will add specular here too.
    }
}
