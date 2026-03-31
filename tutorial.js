// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Tutorial navigation
const steps = document.querySelectorAll(".step");
let currentStep = 0;

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-tutorial");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

startBtn.addEventListener("click", () => {
  currentStep = 0;
  showStep(currentStep);
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

// Auto-play tutorial (optional)
let autoPlay = true;
if (autoPlay) {
  setInterval(() => {
    currentStep = (currentStep + 1) % steps.length;
    showStep(currentStep);
  }, 5000); // change step every 5s
}
