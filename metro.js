function calculateMetro() {
  let x = parseFloat(document.getElementById("x").value);

  if (isNaN(x)) {
    document.getElementById("result").innerText = "Result: Please enter a valid number!";
    return;
  }

  let result = 1.38 * x ;
  let formatted = result.toFixed(2);

  document.getElementById("result").innerText = "Result: " + formatted;

  // ✅ Save to localStorage for history
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(`Metro Sheet → X:${x} → ${formatted}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}

