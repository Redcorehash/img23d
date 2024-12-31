document.getElementById('startButton').addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('uploadButton').addEventListener('click', () => {
    window.location.href = 'upload.html';
});

document.getElementById('aboutButton').addEventListener('click', () => {
    alert('This project converts images into 3D objects using Three.js.');
});
