const keyboards = {
    rows: [
        ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
        ["Caps lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
        ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
        ["Ctrl", "Fn", "Win", "Alt", "Space", "Alt", "Fn", "Ctrl"]
    ],
};

const shiftKeys = {
    rows: [
        ["!", "@", "#", "$", "%"], 
        ["^", "&", "*", "(", ")"], 
        ["_", "+", "{", "}", "|"], 
        [":", "\"", "<", ">", "?"], 
        ["send"]
    ]
};

document.addEventListener("DOMContentLoaded", function () {



    const keyboard = document.querySelector('.keyboard');
    keyboards.rows.forEach(item => {
        const row = document.createElement('div');
        row.className = 'row';
    
        item.forEach(item => {
            const key = document.createElement('button');
            key.innerHTML = item;
            key.className="key"
            
                if (item === "Backspace") {
                    key.id='backspace';
                } else if (item === "Tab") {
                    key.id='tab';
                } else if (item === "Caps lock") {
                    key.id='capsLock';
                } else if (item === "Enter") {
                    key.id='enter';
                } else if (item === "Shift") {
                    key.id='shift';
                } else if (item === "Space") {
                    key.id='space';
                }
                else if (item === "\\") {
                    key.id='slash';
                }
    
    
                row.append(key);
        });
    
        keyboard.append(row);
    });

    const shiftKey = document.querySelector('.shiftkeys');
    shiftKeys.rows.forEach(item => {
        const row = document.createElement('div');
        row.className = 'row';
    
        item.forEach(item => {
            const key = document.createElement('button');
            key.innerHTML = item;
            key.className="key"
            
                if (item === "send") {
                    key.id='send';
                }
    
                row.append(key);
        });
    
        shiftKey.append(row);
    });

    const remote = document.querySelector('.remote');
    
})


