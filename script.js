// ===============================
// 🌙 Dark Mode Toggle (Scope Example)
// ===============================

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ===============================
// 🎮 Click Counter (Parameters + Return Values Example)
// ===============================
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");

// Function with parameters + return
function updateCounter(increment) {
  count += increment;
  return count; // return new value
}

counterBtn.addEventListener("click", () => {
  const newCount = updateCounter(1); // call with parameter
  counterValue.textContent = newCount; // use returned value
});

// ===============================
// 🎨 Animation Trigger (Functions + Scope)
// ===============================
const animateBtn = document.getElementById("animateBtn");
const animatedBox = document.getElementById("animatedBox");

animateBtn.addEventListener("click", () => {
  animatedBox.classList.remove("animate"); // reset animation if already applied
  void animatedBox.offsetWidth; // trick to restart CSS animation
  animatedBox.classList.add("animate"); // trigger CSS keyframe
});

// ===============================
// 📋 Form Validation (Return Values + Conditions)
// ===============================
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Validation function (with return values)
function validateInput(input, pattern, errorElement, errorMsg) {
  if (!pattern.test(input.value.trim())) {
    errorElement.textContent = errorMsg;
    return false; // invalid
  }
  errorElement.textContent = "";
  return true; // valid
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validName = validateInput(nameInput, /.+/, nameError, "Name is required.");
  const validEmail = validateInput(emailInput, /^[^ ]+@[^ ]+\.[a-z]{2,3}$/, emailError, "Enter a valid email.");
  const validPassword = validateInput(passwordInput, /^(?=.*\d).{6,}$/, passwordError, "Min 6 chars, include a number.");

  if (validName && validEmail && validPassword) {
    formSuccess.textContent = "✅ Registration successful!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
