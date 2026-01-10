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