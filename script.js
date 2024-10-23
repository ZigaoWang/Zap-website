// script.js
const featureItems = document.querySelectorAll('.feature-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

featureItems.forEach(item => {
    observer.observe(item);
});

// CSS for animations
.feature-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.feature-item.visible {
    opacity: 1;
    transform: translateY(0);
}
