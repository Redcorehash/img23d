// Create custom shader material
const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    void main() {
        gl_FragColor = vec4(vUv, 0.5 + 0.5 * sin(time), 1.0);
    }
`;

const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: { time: { value: 1.0 } }
});
