function calculateSize() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("result").innerText = "Result: Please enter valid numbers!";
    return;
  }

  // Step 1: Add
  const s1 = a + b;

  // Step 2: Multiply by 2
  const s2 = s1 * 2;

  // Step 3: Divide by 3.14
  const s3 = s2 / 3.14;

  // Step 4: One factor at a time (with subtraction first)
  const s4a = s3 - 2;        // subtract 2
  const s4b = s4a * 2;       // multiply by 2
  const s4c = s4b * 0.0248;  // multiply by 0.0248
  const s4d = s4c * 6;       // multiply by 6 (final)

  // Show only final result
  document.getElementById("result").innerText = "Result: " + s4d;

  // Save to history
  const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(`Size → a:${a}, b:${b} → ${s4d}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}
