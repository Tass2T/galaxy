varying vec2 vUv;
precision mediump float;

varying vec3 vColor;

void main () {

        float distanceToCenter = distance(gl_PointCoord, vec2(0.5)) * 2.0;
        float distanceToCenterAlpha = 1.0 - clamp(distanceToCenter, 0.0, 1.0);
        distanceToCenterAlpha = pow(distanceToCenterAlpha, 2.0);
        gl_FragColor = vec4(vColor, distanceToCenterAlpha);
}