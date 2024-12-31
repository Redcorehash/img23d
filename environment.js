// Add environment map
const envMap = new THREE.CubeTextureLoader()
    .setPath('env/')
    .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);
scene.background = envMap;
