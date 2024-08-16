document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    let currentKeyIndex = 0;
    let intervalId;
    let selectedKey = '';
    let clickTimeoutId;
    let inactivityTimeoutId;
    let typingInSubject = false;
  
    function updateHighlight() {
      keys.forEach((key) => key.classList.remove('highlight'));
      keys[currentKeyIndex].classList.add('highlight');
  
      // Update the display-keys textarea with the current key
      const displayArea = document.querySelector('.display-keys');
      if (displayArea) {
        displayArea.value = keys[currentKeyIndex].textContent.trim();
      }
    }
  
    function startTraversal() {
      clearInterval(intervalId);
      clearTimeout(inactivityTimeoutId); // Clear previous inactivity timeout
      updateHighlight();
      intervalId = setInterval(() => {
        currentKeyIndex = (currentKeyIndex + 1) % keys.length;
        updateHighlight();
      }, 500);
  
      // Start inactivity timeout
      inactivityTimeoutId = setTimeout(() => {
        // Resume traversal after 5 seconds of inactivity
        startTraversal();
      }, 5000);
    }
  
    function handleRemoteClick() {
      clearTimeout(clickTimeoutId);
      clickTimeoutId = setTimeout(() => {
        clearInterval(intervalId);
        selectedKey = keys[currentKeyIndex].textContent.trim();
        if (selectedKey === 'Backspace') {
          undoFromTextArea();
        } else {
          addToTextArea(selectedKey, typingInSubject ? '.subject' : '.to-mail');
        }
      }, 300);
    }
  
    function handleRemoteDoubleClick() {
      clearTimeout(clickTimeoutId);
      // Reset traversal and clear any intervals
      clearInterval(intervalId);
      currentKeyIndex = 0;
      updateHighlight();
      startTraversal();
    }
  
    function addToTextArea(key, selector) {
      const textArea = document.querySelector(selector);
      if (textArea) {
        if (key === 'Backspace') {
          textArea.value = textArea.value.slice(0, -1); // Remove the last character
        } else {
          textArea.value += key;
        }
      }
    }
  
    function undoFromTextArea() {
      const textArea = document.querySelector(typingInSubject ? '.subject' : '.to-mail');
      if (textArea) {
        textArea.value = textArea.value.slice(0, -1); // Remove the last character
      }
    }
  
    function focusNextTextArea() {
      const nextTextArea = document.querySelector('.subject');
      if (nextTextArea) {
        typingInSubject = true;
        nextTextArea.focus();
      }
    }
  
    function focusPreviousTextArea() {
      const previousTextArea = document.querySelector('.to-mail');
      if (previousTextArea) {
        typingInSubject = false;
        previousTextArea.focus();
      }
    }
  
    const remoteButton = document.querySelector('.remote-btn');
    let clickCount = 0;
  
    remoteButton.addEventListener('click', () => {
      clickCount++;
      if (clickCount === 1) {
        handleRemoteClick();
      } else if (clickCount === 2) {
        handleRemoteDoubleClick();
        clickCount = 0;
      }
      setTimeout(() => {
        clickCount = 0;
      }, 300);
    });
  
    startTraversal();
  });
  
//   when i done single click it the the cursor should transform to the below text area if there is no text area give NOTHER PROMPT with warning