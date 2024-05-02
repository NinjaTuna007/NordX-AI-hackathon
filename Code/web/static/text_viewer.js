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

function submit() {
    const textFile1 = document.getElementById('text-file1').value;
    const textFile2 = document.getElementById('text-file2').value;

    // Create a dictionary with the text from the input fields
    const textData = {
        "OLD": textFile1,
        "NEW": textFile2
    };
    // Send to python script and get some response back

    fetch('/submit-text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        const summary = data.summary;
        const pairs = data.pairs;

        console.log(summary);
        // Use pairs to build accordion
        buildAccordion(pairs);
    })
    .catch(error => {
        console.error('Error building accordion:', error);
    });
}

function buildAccordion(pairs) {
    const accordionContainer = document.createElement('div');
    accordionContainer.classList.add('accordion');

    pairs.forEach((pair, index) => {
        console.log(pair);
        console.log(index);
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        const accordionHeader = document.createElement('div');
        accordionHeader.classList.add('accordion-header');
        accordionHeader.textContent = `Difference ${index + 1}: Score ${pair.score}`;

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        accordionBody.textContent = pair.SDR;

        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionBody);
        accordionContainer.appendChild(accordionItem);
    });

    document.body.appendChild(accordionContainer);
}
