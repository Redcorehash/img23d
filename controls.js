// Add controls to modify the 3D object
const controls = {
    rotationSpeedX: 0.01,
    rotationSpeedY: 0.01,
    scale: 1,
};

// Create a simple GUI
const gui = new dat.GUI();
gui.add(controls, 'rotationSpeedX', 0, 0.1);
gui.add(controls, 'rotationSpeedY', 0, 0.1);
gui.add(controls, 'scale', 0.5, 2).onChange((value) => {
    plane.scale.set(value, value, value);
});

// Modify the animate function to use controls
function animate() {
    requestAnimationFrame(animate);
    plane.rotation.x += controls.rotationSpeedX;
    plane.rotation.y += controls.rotationSpeedY;
    renderer.render(scene, camera);
}
animate();
