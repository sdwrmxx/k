function updateClock() {
const now = new Date();
const timeData = [
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
];
const dateData = [
    now.getDate(),
    now.getMonth() + 1,
    now.getFullYear() % 100
];
const updateGroup = (selector, dataArray) => {
    const containers = document.querySelectorAll(`${selector} .container`);

    dataArray.forEach((value, index) => {
        const tens = Math.floor(value / 10);
        const units = value % 10;     
    
        fillColumn(containers[index], 1, tens);
        fillColumn(containers[index], 2, units);
    });
};

function fillColumn(container, part, value) {
    const binaryStr = value.toString(2).padStart(4, '0');

    for (let i = 0; i < 4; i++) {
        const bitId = i + 1; 
        const bit = container.querySelector(`.bit[part="${part}"][dat-id="${bitId}"]`);

        if (bit) {
            if (binaryStr[i] === '1') {
                bit.classList.add('active');
            } else {
                bit.classList.remove('active');
            }
        }
    }
}
updateGroup('.time', timeData);
updateGroup('.date', dateData);
}

setInterval(updateClock, 1000);
updateClock();