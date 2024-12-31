// Load additional textures
const textureLoader = new THREE.TextureLoader();
const normalMap = textureLoader.load('normal.jpg');
const roughnessMap = textureLoader.load('roughness.jpg');

// Apply textures to material
const material = new THREE.MeshStandardMaterial({
    map: texture,
    normalMap: normalMap,
    roughnessMap: roughnessMap
});
