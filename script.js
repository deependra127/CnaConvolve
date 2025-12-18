document.addEventListener('DOMContentLoaded', () => {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                item.addEventListener('click', () => {
                    item.classList.toggle('open');
                });
            });
        });

const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sidemenu");

  hamburger.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
  });