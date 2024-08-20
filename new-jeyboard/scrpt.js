document.addEventListener("DOMContentLoaded", function () {
    const mainKeyboard = {
        rows: [
            ["Style", "Backspace", "Next Line"], // Special keys row
            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], // Row 1: 10 keys
            ["E", "T", "A", "O", "I", "N", "S", "H", "R", "D"], // Row 2: 10 keys
            ["L", "U", "C", "M", "F", "W", "Y", "P", "B"], // Row 3: 9 keys
            ["G", "V", "K", "Q", "J", "X", "Z"], // Row 4: 7 keys
            ["Space", "Enter", "Next Line", "Backspace"] 
            
        ]
    };

    const shiftKeys = {
        rows: [
            ["@", "gmail.com"], 
            [".", "_", "-", "/"],
            ["Send"], 
        ]
    };

    function createKeyboard(container, layout) {
        const keyboard = document.querySelector(container);

        layout.rows.forEach(rowKeys => {
            const row = document.createElement('div');
            row.className = 'row keys-flex';

            rowKeys.forEach(keyLabel => {
                const key = document.createElement('button');
                key.textContent = keyLabel;
                key.className = 'key';
                key.setAttribute('aria-label', keyLabel); 
                if (keyLabel === "Space") {
                    key.id = 'space';
                } else if (keyLabel === "Enter") {
                    key.id = 'enter';
                } else if (keyLabel === "Backspace") {
                    key.id = 'backspace';
                } else if (keyLabel === "Style") {
                    key.id = 'style';
                } else if (keyLabel === "Next Line") {
                    key.id = 'next-line';
                }
                else if (keyLabel === "gmail.com") {
                    key.id = 'gmail';
                }
                else if (keyLabel === "Send") {
                    key.id = 'send';
                }

                row.appendChild(key);

                // Add event listener
                key.addEventListener('click', () => {
                    console.log(`Key pressed: ${keyLabel}`);
                    // Handle key press logic here
                });
            });

            keyboard.appendChild(row);
        });
    }

    createKeyboard('.keyboard', mainKeyboard);
    createKeyboard('.shiftkeys', shiftKeys);
});
