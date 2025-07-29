function calculate() {
  const mode = document.getElementById("mode").value;
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);
  const input = parseFloat(document.getElementById("inputValue").value);

  if (isNaN(length) || isNaN(width) || isNaN(input) || length <= 0 || width <= 0 || input <= 0) {
    document.getElementById("result").innerText = "Please enter valid positive values.";
    return;
  }

  let result;
  if (mode === "toSqFt") {
    result = (input * 2000) / (length * width);
    document.getElementById("result").innerText = `Expected Square Footage: ${result.toFixed(2)} ft²`;
  } else {
    result = (input * length * width) / 2000;
    document.getElementById("result").innerText = `Required Tonnage: ${result.toFixed(2)} tons`;
  }
}
