mobileButton = document.querySelector(".mobile-button");
mobileBar = document.querySelector(".navbar-nav");
menuItem = document.querySelectorAll('.navbar-nav a');
menuIcon = document.querySelector('.mobile-button .bi-list')

function mobileMenuOpener() {
    menuIcon.classList.toggle("bi-x-lg");
    menuIcon.style.transition = '1s';
}

mobileButton.addEventListener('click', () => {
    mobileMenuOpener();
    mobileBar.classList.toggle("Active");
});

// Adicionando event listeners aos itens do menu
menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        // Verifica se o mobileButton está visível
        if (window.getComputedStyle(mobileButton).display === 'block') {
            mobileMenuOpener();
            mobileBar.classList.toggle("Active");
        }
    });
});
