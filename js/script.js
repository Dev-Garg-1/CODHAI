document.getElementById('upload-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const fileInput = document.getElementById('csv-file');
    const file = fileInput.files[0]; // Get the selected file

    if (file) {
        // Perform actions with the uploaded file (like sending to the server)
        console.log('File selected:', file.name);

        // Show a loader (optional, for 3 seconds)
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'none'; // Hide the result initially

        // Show loader
        const loader = document.createElement('div');
        loader.innerText = 'Loading...';
        loader.style.color = '#ff4c4c';
        loader.style.textAlign = 'center';
        document.body.appendChild(loader);

        // Simulate loading delay
        setTimeout(() => {
            // Hide loader
            document.body.removeChild(loader);
            // Show the result section
            resultDiv.style.display = 'block';
        }, 3000);

        // You can further process the file here or send it to your backend
    } else {
        alert('Please select a CSV file.');
    }
});
