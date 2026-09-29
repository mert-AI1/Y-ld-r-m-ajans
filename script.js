const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navbar nav');

menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Mesajınız hazır! Formu gerçek e-posta gönderimi için bir form servisine bağlamanız gerekiyor.');
});
