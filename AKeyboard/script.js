document.addEventListener('DOMContentLoaded', () => {
    const displayArea = document.querySelector('.display-keys');
    const outputArea = document.getElementById('txtArea');
    let currentBinary = '';
    let selectedKey = '';
    let clickCount = 0;
    let clickTimeoutId;
    let inactivityTimeoutId;
    const binaryMap = {
        '000000': 'A', '000001': 'B', '000010': 'C', '000011': 'D',
        '000100': 'E', '000101': 'F', '000110': 'G', '000111': 'H',
        '001000': 'I', '001001': 'J', '001010': 'K', '001011': 'L',
        '001100': 'M', '001101': 'N', '001110': 'O', '001111': 'P',
        '010000': 'Q', '010001': 'R', '010010': 'S', '010011': 'T',
        '010100': 'U', '010101': 'V', '010110': 'W', '010111': 'X',
        '011000': 'Y', '011001': 'Z', '011010': '!', '011011': '@',
        '011100': '#', '011101': '$', '011110': '%', '011111': '&',
        '100000': '0', '100001': '1', '100010': '2', '100011': '3',
        '100100': '4', '100101': '5', '100110': '6', '100111': '7',
        '101000': '8', '101001': '9', '101010': '-', '101011': '=',
        '101100': '/', '101101': '\\', '101110': '(', '101111': ')',
        '110000': ':', '110001': ';', '110010': '"', '110011': "'",
        '110100': '?', '110101': '+', '110110': ',', '110111': '.',
        '111000': ' '  
    };

    document.querySelector('.remote-btn').addEventListener('click', () => {
        clickCount++;

        if (clickCount === 1) {
            clickTimeoutId = setTimeout(() => {
                currentBinary += '0';
                displayArea.value += '0';
                processBinaryInput();
                clickCount = 0;
            }, 300);
        } else if (clickCount === 2) {
            clearTimeout(clickTimeoutId);
            currentBinary += '1';
            displayArea.value += '1';
            processBinaryInput();
            clickCount = 0;
        }
    });

    function processBinaryInput() {
        if (currentBinary.length === 6) {
            const character = binaryMap[currentBinary] || '';
            outputArea.value += character;
            displayArea.value = '';
            currentBinary = '';
        }
    }

    document.querySelectorAll('.action-key').forEach(key => {
        key.addEventListener('click', () => {
            const action = key.id;
            if (action === 'send') {
                alert('Sending message: ' + outputArea.value);
                outputArea.value = '';
                currentBinary = '';
                displayArea.value = '';
            } else if (action === 'backspace') {
                outputArea.value = outputArea.value.slice(0, -1);
            } else if (action === 'next-line') {
                outputArea.value += '\n';
            }
        });
    });
});










 
  
 
 
 
 
    
 
  
 