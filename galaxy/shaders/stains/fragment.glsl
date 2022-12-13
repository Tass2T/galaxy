varying vec2 vUv;
varying vec3 vColor;

precision mediump float;

void main () {
    float alpha = 0.1 - distance(vUv, vec2(0.5));
    gl_FragColor = vec4(vColor.r, vColor.g, vColor.b, alpha );
}