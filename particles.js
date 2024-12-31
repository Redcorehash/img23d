// Create particle system
const particleGeometry = new THREE.BufferGeometry();
const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);
