function uploadFiles() {
    const fileInput1 = document.getElementById('file-input-1');
    const fileInput2 = document.getElementById('file-input-2');

    readTextFile(fileInput1.files[0], 0);
    readTextFile(fileInput2.files[0], 1);

    document.querySelector('.file-upload-container').style.display = 'none';
    document.querySelector('.text-container').style.display = 'flex';
}

function readTextFile(file, index) {
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            if (index === 0) {
                document.getElementById('text-file1').value = e.target.result;
            } else {
                document.getElementById('text-file2').value = e.target.result;
            }
            document.getElementById(`text-file${index + 1}`).readOnly = true;
        };
        reader.readAsText(file);
    }
}

function saveToJson() {
    const textFile1 = document.getElementById('text-file1').value;
    const textFile2 = document.getElementById('text-file2').value;

    // Create a dictionary with the text from the input fields
    const textData = {
        "OLD": textFile1,
        "NEW": textFile2
    };
    // Send to python script and get some response back

    fetch('/save-text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textData)
    })
    .then(data => {
        console.log(data);
        // Assuming 'data' contains the 'pairs' data for the accordion
        const pairs = data.pairs; // Extract the 'pairs' data

        // Call the buildAccordion function with the pairs data
        console.log(pairs);

        console.log('Text data saved to JSON file and accordion updated');
    })
    .catch(error => {
        console.error('Error saving text data to JSON file:', error);
    });
}
