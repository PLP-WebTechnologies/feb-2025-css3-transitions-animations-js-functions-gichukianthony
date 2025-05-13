// Store and retrieve theme preference using localStorage
const themeSelect = document.getElementById("themeSelect");
const body = document.body;

function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
}

// Load stored theme on page load
const savedTheme = localStorage.getItem("theme") || "light";
themeSelect.value = savedTheme;
applyTheme(savedTheme);

// Save preference when user changes theme
themeSelect.addEventListener("change", (e) => {
  const selectedTheme = e.target.value;
  localStorage.setItem("theme", selectedTheme);
  applyTheme(selectedTheme);
});

// Animate box on button click
const btn = document.getElementById("animateBtn");
const box = document.getElementById("box");

btn.addEventListener("click", () => {
  box.classList.add("animate");

  // Remove class after animation ends so it can be re-triggered
  box.addEventListener(
    "animationend",
    () => {
      box.classList.remove("animate");
    },
    { once: true }
  );
});
