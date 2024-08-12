document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const rowsInput = document.getElementById('rows');
    const delayInput = document.getElementById('delay');
    const delayValue = document.getElementById('delayValue');

    let intervalId;
    let currentRow = 0;

    function createTriangle(numRows) {
        container.innerHTML = ''; // Clear previous circles
        for (let i = 0; i < numRows; i++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            const numCircles = i + 1;
            for (let j = 0; j < numCircles; j++) {
                const circleDiv = document.createElement('div');
                circleDiv.className = 'circle';
                rowDiv.appendChild(circleDiv);
            }
            container.appendChild(rowDiv);
        }
    }

    function startColoring() {
        currentRow = 0;
        const numRows = parseInt(rowsInput.value);
        createTriangle(numRows);

        intervalId = setInterval(() => {
            const rows = container.querySelectorAll('.row');
            rows.forEach(row => row.querySelectorAll('.circle').forEach(circle => {
                circle.classList.remove('active'); // Remove active class from all circles
            }));

            if (currentRow < rows.length) {
                rows[currentRow].querySelectorAll('.circle').forEach(circle => {
                    circle.classList.add('active');
                });
                currentRow++;
            } else {
                currentRow = 0; // Reset to the top
            }
        }, parseInt(delayInput.value));
    }

    function stopColoring() {
        clearInterval(intervalId);
    }

    startButton.addEventListener('click', startColoring);
    stopButton.addEventListener('click', stopColoring);

    delayInput.addEventListener('input', () => {
        delayValue.textContent = `${delayInput.value} ms`;
        if (intervalId) {
            clearInterval(intervalId);
            startColoring();
        }
    });
});
