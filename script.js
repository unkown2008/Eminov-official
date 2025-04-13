// Typing animation
const text = "Bezirgen Eminow";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}
typeEffect();

// Scroll animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'all 0.8s ease-out';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(section);
});

// Scroll to top button
const scrollBtn = document.querySelector('.scroll-to-top');
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark/light mode toggle
function toggleTheme() {
  document.body.classList.toggle('dark');
}
