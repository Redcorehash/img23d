// Load 3D model
const loader = new THREE.GLTFLoader();
loader.load('model.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
});
