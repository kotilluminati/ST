// Анимация для шапки при прокрутке
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Анимация для текста в герое
document.addEventListener("DOMContentLoaded", function() {
  const heroElements = document.querySelectorAll('.hero h1, .hero p');

  heroElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible');
    }, index * 500);
  });
});

// Анимация для блоков при прокрутке
const fadeInElements = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
  fadeInElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Проверка при первой загрузке

// Управление спойлерами в разделе "Услуги"
document.querySelectorAll('.service-card h3').forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    content.classList.toggle('visible');
  });
});

// Управление всплывающей формой обратной связи
const feedbackButton = document.querySelector('.feedback-button');
const feedbackForm = document.querySelector('.feedback-form');

feedbackButton.addEventListener('click', () => {
  feedbackForm.classList.toggle('visible');
});

// Закрытие формы при клике вне её области
document.addEventListener('click', (event) => {
  if (!feedbackForm.contains(event.target) && !feedbackButton.contains(event.target)) {
    feedbackForm.classList.remove('visible');
  }
});