// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Animación de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .tech-box').forEach(el => {
    el.style.opacity = "0";
    el.style.transition = "0.8s ease-out";
    observer.observe(el);
});

// Clase CSS inyectada para la animación
const style = document.createElement('style');
style.innerHTML = `.fade-in { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);