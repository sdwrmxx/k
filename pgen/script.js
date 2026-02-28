const lengthRange = document.getElementById('lengthRange');
const lengthNumber = document.getElementById('lengthNumber');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const specialCheckbox = document.getElementById('special');
const customCheck = document.getElementById('customCheck');
const customCharsInput = document.getElementById('customChars');
const passwordDiv = document.getElementById('password');
const copyButton = document.getElementById('copyButton');
const refreshButton = document.getElementById('refreshButton');

// Charsets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?/`~';

function getRandomInt(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
}

function generatePassword() {
    let charSet = '';
    if (lowercaseCheckbox.checked) charSet += lowercaseChars;
    if (uppercaseCheckbox.checked) charSet += uppercaseChars;
    if (numbersCheckbox.checked) charSet += numberChars;
    if (specialCheckbox.checked) charSet += specialChars;
    if (customCheck.checked && customCharsInput.value)
        charSet += customCharsInput.value;

    const length = Math.min(parseInt(lengthNumber.value) || 16, 1000);
    if (!charSet) {
        passwordDiv.textContent = 'Please select at least one charset.';
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomInt(charSet.length);
        password += charSet[randomIndex];
    }
    passwordDiv.textContent = password;
}

// Synchronizing the slider and the number input field
lengthRange.addEventListener('input', function () {
    lengthNumber.value = lengthRange.value;
    generatePassword();
});
lengthNumber.addEventListener('input', function () {
    lengthRange.value = lengthNumber.value;
    generatePassword();
});

// Handling changes to checkboxes and custom symbol fields
lowercaseCheckbox.addEventListener('change', generatePassword);
uppercaseCheckbox.addEventListener('change', generatePassword);
numbersCheckbox.addEventListener('change', generatePassword);
specialCheckbox.addEventListener('change', generatePassword);
refreshButton.addEventListener('click', generatePassword);
customCheck.addEventListener('change', function () {
    customCharsInput.disabled = !customCheck.checked;
    generatePassword();
});
customCharsInput.addEventListener('input', generatePassword);

// Copy password button
copyButton.addEventListener('click', function () {
    const password = passwordDiv.textContent;
    if (!password || password === 'Please enter at least one character.') return;

    navigator.clipboard.writeText(password)
        .then(() => {
            copyButton.textContent = 'copied!';
            setTimeout(() => copyButton.textContent = 'Copy', 2000);
        })
        .catch(err => {
            console.error('Error while copying:', err);
        });
});

// Initial password generation
generatePassword();