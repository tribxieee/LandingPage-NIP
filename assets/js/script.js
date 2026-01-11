// Menunggu dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    const navbar = document.querySelector('.custom-navbar');
    const loginBtn = document.getElementById('loginBtn');
    const signUpBtn = document.getElementById('signUpBtn');

    // 1. Efek Sticky Navbar saat di-scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // 2. Alert Sederhana saat tombol diklik
    loginBtn.addEventListener('click', function() {
        alert('Tombol Login diklik!');
    });

    signUpBtn.addEventListener('click', function() {
        console.log('Mengarahkan ke halaman registrasi...');
    });
});

// hero
document.addEventListener('DOMContentLoaded', function() {
    // Kode scroll navbar sebelumnya tetap ada...

    // Animasi sederhana untuk floating cards
    const cards = document.querySelectorAll('.floating-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });
});

// about us
document.addEventListener('DOMContentLoaded', function() {
    // Handler untuk tombol play video
    const playButton = document.querySelector('.play-button-overlay');
    if(playButton) {
        playButton.addEventListener('click', function() {
            alert('Video sedang dimuat... (Ini adalah fungsi placeholder)');
        });
    }

    // Efek hover sederhana untuk kartu kategori
    const catCards = document.querySelectorAll('.category-card');
    catCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

const cards = document.querySelectorAll('.testimonial-card');
const nextBtn = document.querySelector('.slider-nav-btn');
let current = 0;

nextBtn.addEventListener('click', () => {
  cards[current].classList.remove('active');
  current = (current + 1) % cards.length;
  cards[current].classList.add('active');
});
