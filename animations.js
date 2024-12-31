// Add animations to objects
function animateObjects(objects) {
    objects.forEach(obj => {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01;
    });
}
