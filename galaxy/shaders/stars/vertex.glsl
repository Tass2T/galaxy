varying vec2 vUv;
varying vec3 vColor;

attribute float size;
attribute vec3 color;

void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

    gl_PointSize = (size) * ( 300.0 / -mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

    vColor = color;
    vUv = uv;
}