varying vec2 vUv;
precision mediump float;

void main () {
    float result = 0.1 / distance(vUv, vec2(0.5));
    gl_FragColor = vec4(0.0, result, result,result);
}