const pascals = {
  input: [
    { class: "rows", span: "Number of Rows", type: "number", value: 5 },
    { class: "delay", span: "Delay", type: "number", value: 1 },
  ],
  colors: ["red", "yellow", "green", "purple"],
  button: ["start", "stop"],
};

document.addEventListener("DOMContentLoaded", function () {
  function createOptions() {
    const options = document.querySelector(".options");
    const controls = document.createElement("div");
    controls.className = "choices";
    pascals.input.forEach((item) => {
      const span = document.createElement("span");
      span.innerHTML = item.span;
      controls.append(span);
      const input = document.createElement("input");
      input.className = item.class;
      input.type = item.type;
      input.value = item.value;
      controls.append(input);
    });
    options.append(controls);

    const colors = document.createElement("div");
    colors.className = "colors";
    pascals.colors.forEach((color) => {
      const input = document.createElement("input");
      input.className = "color-radio";
      input.type = "radio";
      input.name = "color";
      input.value = color;
      colors.append(input);
      const span = document.createElement("span");
      span.textContent = color;
      colors.append(span);
    });
    options.append(colors);

    const startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.addEventListener("click", startDrawing);
    options.append(startButton);

    const stopButton = document.createElement("button");
    stopButton.textContent = "Stop";
    stopButton.addEventListener("click", stopDrawing);
    options.append(stopButton);
  }

  function createTriangle(n) {
    const outputFlex = document.querySelector(".output-flex");
    outputFlex.innerHTML = "";

    for (let i = 0; i < n; i++) {
      const row = document.createElement("div");
      row.className = "row";
      for (let k = 0; k < n - i - 1; k++) {
        row.appendChild(document.createElement("div"));
      }
      for (let j = 0; j <= i; j++) {
        const circle = document.createElement("div");
        circle.className = "circle";
        row.appendChild(circle);
      }
      outputFlex.appendChild(row);
    }
  }

  let intervalId;
  function startDrawing() {
    const rows = parseInt(document.querySelector(".rows").value);
    const delay = parseInt(document.querySelector(".delay").value)*1000;
    const color =
      document.querySelector('input[name="color"]:checked')?.value || "black";
    createTriangle(rows);
    colorRows(color, delay);
  }

  function colorRows(color, delay) {
    const rows = document.querySelectorAll(".row");
    let currentRow = 0;

    intervalId = setInterval(() => {
      rows.forEach((row) => {
        row.childNodes.forEach((circle) => (circle.style.backgroundColor = ""));
      });
      if (currentRow < rows.length) {
        rows[currentRow].childNodes.forEach(
          (circle) => (circle.style.backgroundColor = color)
        );
        currentRow++;
      } else {
        currentRow = 0;
      }
    }, delay);
  }

  function stopDrawing() {
    clearInterval(intervalId);
  }

  function createOutput() {
    const output = document.querySelector(".output");
    const outputFlex = document.createElement("div");
    outputFlex.className = "output-flex";
    output.append(outputFlex);
  }

  createOptions();
  createOutput();
});
