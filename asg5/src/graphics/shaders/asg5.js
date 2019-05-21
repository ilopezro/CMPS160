// Vertex Shader
var ASG5_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  varying vec3 v_Position;
  attribute vec4 a_Normal;
  varying vec3 v_Normal;
  attribute vec4 a_Color;
  varying vec4 v_Color;

  uniform mat4 u_ModelMatrix;
  uniform mat4 u_NormalMatrix;

  void main() {
    v_Color = a_Color;
    v_Position = vec3(u_ModelMatrix * a_Position);
    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
    gl_Position = u_ModelMatrix * a_Position;
  }`;

// Fragment Shader
var ASG5_FSHADER =
  `precision mediump float;
  varying vec4 v_Color;
  varying vec3 v_Normal;
  varying vec3 v_Position;

  uniform vec3 u_DiffuseColor;
  uniform vec3 u_AmbientColor;
  uniform vec3 u_LightPosition;

  void main() {
    gl_FragColor = vec4(v_Normal, 1.0);
  }`;
