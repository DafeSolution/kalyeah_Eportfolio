// Open Lightbox Function
function openLightbox(imageSrc, title, description) {
  document.getElementById('lightbox-img').src = imageSrc;
  document.getElementById('lightbox-title').innerText = title;
  document.getElementById('lightbox-description').innerText = description;
  document.getElementById('lightbox').style.display = 'block';
}

// Close Lightbox Function
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// 🌓 Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// 🎵 Auto-Play Background Music
const backgroundMusic = document.getElementById('backgroundMusic');
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Allow play on user interaction
  document.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    }
  }, { once: true });
});