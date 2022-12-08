varying vec2 vUv;
precision mediump float;

void main () {
    float result = 0.3 / distance(vUv, vec2(0.5)) * 0.3;
    float green = 0.3 / distance(vUv, vec2(0.5)) * 0.3;
    gl_FragColor = vec4(0.0, green, result,1.0);
}