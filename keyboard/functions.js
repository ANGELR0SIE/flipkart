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

    const displayArea = document.querySelector('.display-keys');
    if (displayArea) {
      displayArea.value = keys[currentKeyIndex].textContent.trim();
    }
  }

  function startTraversal() {
    clearInterval(intervalId);
    clearTimeout(inactivityTimeoutId);
    updateHighlight();
    intervalId = setInterval(() => {
      currentKeyIndex = (currentKeyIndex + 1) % keys.length;
      updateHighlight();
    }, 500);

    inactivityTimeoutId = setTimeout(() => {
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
    clearInterval(intervalId);
    currentKeyIndex = 0;
    updateHighlight();
    startTraversal();
  }

  function addToTextArea(key, selector) {
    const textArea = document.querySelector(selector);
    if (textArea) {
      if (key === 'Backspace') {
        textArea.value = textArea.value.slice(0, -1);
      }else if(key ==='Enter'){
        textArea.value +='\n';
      }
      else if(key=='Caps lock') {
        textArea.value+=toUpperCase();
      }      
       else {
        textArea.value += key;
      }
    }
  }

  function undoFromTextArea() {
    const textArea = document.querySelector(typingInSubject ? '.subject' : '.to-mail');
    if (textArea) {
      textArea.value = textArea.value.slice(0, -1);
    }
  }

  // function focusNextTextArea() {
  //   const nextTextArea = document.querySelector('.subject');
  //   if (nextTextArea) {
  //     typingInSubject = true;
  //     nextTextArea.focus();
  //   }
  // }

  // function focusPreviousTextArea() {
  //   const previousTextArea = document.querySelector('.to-mail');
  //   if (previousTextArea) {
  //     typingInSubject = false;
  //     previousTextArea.focus();
  //   }
  // }

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































































                                                                                                                                                                                                                                                                                  
                                                                                                   
                                                                        
                                                    
                                      
                                                             
                                                                                                                                                        
                                                                                                                  
                                                                           
                                                                
                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         