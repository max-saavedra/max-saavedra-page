// Dark Mode toggle with localStorage persistence
const themeToggle = document.getElementById('themeToggle');
const toggleIcon = document.querySelector('.toggle-icon');
const body = document.body;


// Load saved theme preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
} else {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
}

// Toggle theme
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
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
