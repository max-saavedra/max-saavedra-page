// Dark Mode toggle with localStorage persistence
const toggleModeButton = document.getElementById('toggleMode');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
  updateThemeIcon();
} else {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
}

function updateThemeIcon() {
  if (themeToggle) {
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  }
}

if (toggleModeButton) {
  toggleModeButton.addEventListener('click', toggleTheme);
}
if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
}

updateThemeIcon();

// Modal for certificates
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");
document.querySelectorAll(".cert-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});
if (closeModal) {
  closeModal.onclick = () => modal.style.display = "none";
}
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};
