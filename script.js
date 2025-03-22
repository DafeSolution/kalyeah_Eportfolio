


// Preserve Theme on Reload
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
// Fetch Bible Verse of the Day (No API Key Required)
async function fetchBibleVerse() {
  try {
    const response = await fetch('https://beta.ourmanna.com/api/v1/get/?format=json');
    if (!response.ok) throw new Error('Failed to fetch Bible verse');

    const data = await response.json();
    const verse = data.verse.details.text;
    const reference = data.verse.details.reference;

    document.getElementById('bibleVerseContent').innerHTML = `
      <p>"${verse}"</p>
      <p><strong>— ${reference}</strong></p>
    `;
  } catch (error) {
    document.getElementById('bibleVerseContent').innerText = "Unable to fetch Bible verse.";
    console.error("Error fetching Bible verse:", error);
  }
}

function openLightbox(imageSrc) {
  document.getElementById('lightbox-img').src = imageSrc;
  document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}



// Run function on page load
document.addEventListener('DOMContentLoaded', fetchBibleVerse);

// 🎖️ Awards Slideshow
let currentSlide = 0;
function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.classList.remove('active'));

  slides[currentSlide].classList.add('active');
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlides, 3000); // Change slide every 3 seconds
showSlides(); // Initialize first slide

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