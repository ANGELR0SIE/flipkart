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

    const remote = document.querySelector('.remote-btn');
    const keys = document.querySelector('.key');
    const rows = document.querySelector('.row');
    remote.addEventListener("click", selecting);
    const color="red";
    function selecting(color) {
        const rows = document.querySelectorAll(".row");
        let currentRow = 0;
    
        intervalId = setInterval(() => {
          rows.forEach((row) => {
            row.childNodes.forEach((item) => (item.style.color = "black"));
          });
          if (currentRow < rows.length) {
            rows[currentRow].childNodes.forEach(
              (item) => (item.style.color = color)
            );
            currentRow++;
          } else {
            currentRow = 0;
          }
        }, 500);
      }
    
})



// here begins the functionalities

const keys = document.querySelectorAll('.key');
const remoteButton = document.querySelector('.remote-btn');
let currentKeyIndex = 0;
let inactivityTimer;


function startTraversal() {
  keys.forEach((key, index) => {
    key.classList.toggle('highlight', index === currentKeyIndex);
  });
  resetInactivityTimer();
}

function moveToNextKey() {
  currentKeyIndex = (currentKeyIndex + 1) % keys.length;
  startTraversal();
}

function printCurrentKey() {
  console.log(`Key printed: ${keys[currentKeyIndex].textContent}`);
}

function handleRemoteClick(event) {
  clearTimeout(inactivityTimer); 
  if (event.detail === 1) {
    // Single click
    printCurrentKey();
  } else if (event.detail === 2) {
    // Double click
    moveToNextKey();
  }
}

// // Show inactivity prompt
// function showInactivityPrompt() {
//   const userResponse = confirm("Options:\n1. Double Click to move to the next text area.\n2. Single Click for more options.");
//   if (userResponse) {
//     showAdditionalOptions();
//   }
// }

// // Show additional options
// function showAdditionalOptions() {
//   const userResponse = confirm("More options:\n1. Double Click to Send.\n2. Single Click to go back.");
//   if (userResponse) {
//     alert("Message sent!"); // Add logic to handle sending the message
//   } else {
//     startTraversal(); // Go back to key traversal
//   }
// }

// // Reset inactivity timer
// function resetInactivityTimer() {
//   clearTimeout(inactivityTimer);
//   inactivityTimer = setTimeout(showInactivityPrompt, 3000); // 3 seconds
// }

// // Set up event listeners
// remoteButton.addEventListener('click', handleRemoteClick);


startTraversal();
