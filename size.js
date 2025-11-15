function calculateSize() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);

  // Get one input value for both subtract and multiply
  const factorVal = parseFloat(document.getElementById("factorVal").value) || 2;

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

  // Step 4a: subtract chosen value
  const s4a = s3 - factorVal;

  // Step 4b: multiply by the same chosen value
  const s4b = s4a * factorVal;

  // Step 5: apply default factors (fixed)
  const s5 = s4b * 0.0248;
  const s6 = s5 * 6;

  // Show only final result
  document.getElementById("result").innerText = "Result: " + s6;

  // Save to history
  const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(`Size → a:${a}, b:${b}, factor:${factorVal} → ${s6}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}
