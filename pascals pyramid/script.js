document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const rowsInput = document.getElementById("rows");
  const delayInput = document.getElementById("delay");
  const delayValue = document.getElementById("delayValue");
  const colorRadios = document.querySelectorAll('input[name="color"]');

  let intervalId;
  let currentRow = 0;

  function getSelectedColor() {
    for (const radio of colorRadios) {
      if (radio.checked) {
        return radio.value;
      }
    }
    return "purple";
  }

  function createTriangle(numRows) {
    container.innerHTML = "";
    for (let i = 0; i < numRows; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.className = "row";
      const numCircles = i * 2 + 1;
      for (let j = 0; j < numCircles; j++) {
        const circleDiv = document.createElement("div");
        circleDiv.className = "circle";
        rowDiv.appendChild(circleDiv);
      }
      container.appendChild(rowDiv);
    }
  }

  function startColoring() {
    currentRow = 0;
    const numRows = parseInt(rowsInput.value);
    const color = getSelectedColor();
    createTriangle(numRows);

    intervalId = setInterval(() => {
      const rows = container.querySelectorAll(".row");
      rows.forEach((row) =>
        row.querySelectorAll(".circle").forEach((circle) => {
          circle.classList.remove("active");
          circle.style.backgroundColor = "lightgray";
        })
      );

      if (currentRow < rows.length) {
        rows[currentRow].querySelectorAll(".circle").forEach((circle) => {
          circle.classList.add("active");
          circle.style.backgroundColor = color;
        });
        currentRow++;
      } else {
        currentRow = 0;
      }
    }, parseInt(delayInput.value) || 500);
  }

  function stopColoring() {
    clearInterval(intervalId);
  }

  startButton.addEventListener("click", startColoring);
  stopButton.addEventListener("click", stopColoring);

  delayInput.addEventListener("input", () => {
    if (intervalId) {
      clearInterval(intervalId);
      startColoring();
    }
  });
  delayInput.value = delayInput.value || 500;
});