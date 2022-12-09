varying vec2 vUv;
varying float vColor;

precision mediump float;

void main () {
    float result = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
    gl_FragColor = vec4(result);
}