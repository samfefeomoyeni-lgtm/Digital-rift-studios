function goToDownload() {
  // Replace this link with your real download page or file
  window.location.href = "https://example.com/download";
}

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// Contact form handler (simple frontend simulation)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("formResponse");

  if (name && email && message) {
    response.textContent = "✅ Thanks, " + name + "! Your message has been sent.";
    response.classList.remove("hidden");
    this.reset();
  } else {
    response.textContent = "⚠️ Please fill out all fields.";
    response.classList.remove("hidden");
  }
});
