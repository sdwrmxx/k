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

// Наборы символов
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
        passwordDiv.textContent = 'Выберите хотя бы один набор символов.';
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomInt(charSet.length);
        password += charSet[randomIndex];
    }
    passwordDiv.textContent = password;
}

// Синхронизация ползунка и поля ввода числа
lengthRange.addEventListener('input', function () {
    lengthNumber.value = lengthRange.value;
    generatePassword();
});
lengthNumber.addEventListener('input', function () {
    lengthRange.value = lengthNumber.value;
    generatePassword();
});

// Обработка изменений чекбоксов и поля кастомных символов
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

// Кнопка копирования пароля
copyButton.addEventListener('click', function () {
    const password = passwordDiv.textContent;
    if (!password || password === 'Выберите хотя бы один набор символов.') return;

    navigator.clipboard.writeText(password)
        .then(() => {
            copyButton.textContent = 'Скопировано!';
            setTimeout(() => copyButton.textContent = 'Скопировать', 2000);
        })
        .catch(err => {
            console.error('Ошибка при копировании:', err);
        });
});

// Первоначальная генерация пароля
generatePassword();