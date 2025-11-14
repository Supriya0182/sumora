function calculate() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let thickness = parseFloat(document.getElementById("thickness").value);

  if (isNaN(length) || isNaN(width) || isNaN(thickness)) {
    document.getElementById("result").innerText = "Result: Please enter valid numbers!";
    return;
  }

  let result = length * width * thickness * 0.00000785;
  let formatted = result.toFixed(3) ;

  document.getElementById("result").innerText = "Result: " + formatted;

  // ✅ Save to localStorage
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(`Plate → L:${length}, W:${width}, T:${thickness} → ${formatted}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}
