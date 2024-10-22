document.getElementById('upload-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const fileInput = document.getElementById('csv-file');
    const file = fileInput.files[0]; // Get the selected file

    if (file) {
        // Perform actions with the uploaded file (like sending to the server)
        console.log('File selected:', file.name);

        // You can further process the file here or send it to your backend
    } else {
        alert('Please select a CSV file.');
    }
});
