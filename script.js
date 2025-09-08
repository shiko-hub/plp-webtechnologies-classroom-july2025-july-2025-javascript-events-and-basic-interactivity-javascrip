// 🌗 Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎯 Counter Game
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});

// 📚 Collapsible FAQ
document.getElementById("faqToggle").addEventListener("click", () => {
  const answer = document.getElementById("faqAnswer");
  answer.classList.toggle("hidden");
});

// 📋✅ Form Validation
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("formFeedback");

  // Basic validation
  if (name === "") {
    feedback.textContent = "Name is required.";
    return;
  }

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email.";
    return;
  }

  if (password.length < 6) {
    feedback.textContent = "Password must be at least 6 characters.";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
});
