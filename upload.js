document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('imageInput');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            // Save the image to localStorage
            localStorage.setItem('userImage', e.target.result);
            // Redirect to the main page
            window.location.href = 'index.html';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select an image file.');
    }
});
