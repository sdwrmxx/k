function generateUUIDv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const uuidDiv = document.getElementById('uuid');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

function generateAndDisplay() {
    const uuid = generateUUIDv4();
    uuidDiv.textContent = uuid;
}

generateButton.addEventListener('click', generateAndDisplay);

copyButton.addEventListener('click', () => {
    const uuid = uuidDiv.textContent;
    if (!uuid) return;
    navigator.clipboard.writeText(uuid)
    .then(() => {
        copyButton.textContent = 'copied!';
        setTimeout(() => copyButton.textContent = 'Copy', 2000);
    })
    .catch(err => console.error('Error while copying:', err));
});

// Automatic content generation when page refreshes
generateAndDisplay();