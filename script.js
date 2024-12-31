// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load image as texture
const textureLoader = new THREE.TextureLoader();
let texture;
const userImage = localStorage.getItem('userImage');
if (userImage) {
    texture = textureLoader.load(userImage);
} else {
    texture = textureLoader.load('image.jpg'); // Default image
}

// Create a 3D object (plane) with the image texture
const geometry = new THREE.PlaneGeometry(5, 5);
const material = new THREE.MeshBasicMaterial({ map: texture });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Position the camera
camera.position.z = 5;

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
