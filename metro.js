function calculateMetro() {
  let x = parseFloat(document.getElementById("x").value);

  if (isNaN(x)) {
    document.getElementById("result").innerText = "Result: Please enter a valid number!";
    return;
  }

  // Correct formula: 1.38 * user input
  let result = x * 1.38;

  // If you want exact value (no rounding):
  document.getElementById("result").innerText = "Result: " + result;

  // ✅ Save to localStorage for history
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(`Metro Sheet → X:${x} → ${result}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}
