// Add physics to objects
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

const sphereBody = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(0, 10, 0),
    shape: new CANNON.Sphere(1)
});
world.addBody(sphereBody);
