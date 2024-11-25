    var togglebtn=document.querySelector(".togglebtn");
    var nav=document.querySelector(".nav-links");
    var links=document.querySelector(".nav-links li");

    togglebtn.addEventListener("click", function(){
        this.classList.toggle("click");
        nav.classList.toggle("open");
    })

    var typed=new Typed(".input",{
            strings:["Frontend Developer","Graphic Designer","3D Designer"],
            typedSpeed:70,
            backSpeed:55,
            loop:true
    })

        // Toggle Navlink
    const toggleBtn = document.querySelector('.togglebtn');
    const navLinks = document.querySelector('.nav-link');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

document.addEventListener("DOMContentLoaded", () => {
    const nextSection = document.querySelector(".next-section a");
    const aboutSection = document.getElementById("about");
    const arrowIcon = nextSection.querySelector("i");
    
    window.addEventListener("scroll", () => {
        const aboutTop = aboutSection.getBoundingClientRect().top;
    
        if (aboutTop <= 100) {
            arrowIcon.classList.remove("bx-chevron-down");
            arrowIcon.classList.add("bx-chevron-up");
            nextSection.href = "#"; 
        } else {
            arrowIcon.classList.remove("bx-chevron-up");
            arrowIcon.classList.add("bx-chevron-down");
            nextSection.href = "#about"; 
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme");
    const body = document.body;

    // Event listener untuk klik tombol
    themeToggle.addEventListener("click", () => {
        // Toggle class "dark-mode" pada body
        body.classList.toggle("dark");

        // Ganti ikon berdasarkan tema aktif
        if (body.classList.contains("dark")) {
            themeToggle.classList.remove("bx-sun");
            themeToggle.classList.add("bx-moon");
        } else {
            themeToggle.classList.remove("bx-moon");
            themeToggle.classList.add("bx-sun");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("sun");
    const body = document.body;

    // Event listener untuk klik tombol
    themeToggle.addEventListener("click", () => {
        // Toggle class "dark-mode" pada body
        body.classList.toggle("dark");

        // Ganti ikon berdasarkan tema aktif
        if (body.classList.contains("dark")) {
            themeToggle.classList.remove("bx-sun");
            themeToggle.classList.add("bx-moon");
        } else {
            themeToggle.classList.remove("bx-moon");
            themeToggle.classList.add("bx-sun");
        }
    });
});

// Ambil elemen lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeButton = document.querySelector('.lightbox .close');
const galleryImages = document.querySelectorAll('.gallery img, .container .hero-pic img');

// Fungsi untuk membuka lightbox
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Tampilkan lightbox
        lightboxImage.src = image.src; // Ambil src gambar yang diklik
        lightboxCaption.textContent = image.getAttribute('data-caption'); // Ambil caption dari atribut data-caption
        
        // Tambahkan animasi zoom
        lightboxImage.classList.add('zoom-in');
        setTimeout(() => {
            lightboxImage.classList.remove('zoom-in');
        }, 300); // Hapus animasi setelah 300ms
    });
});

// Fungsi untuk menutup lightbox
closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Sembunyikan lightbox
});

// Tutup lightbox saat area luar diklik
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Pilih semua section dengan kelas "scroll-section"
const sections = document.querySelectorAll('.scroll-section');

// Buat Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Tambahkan kelas "show" ketika terlihat
        } else {
            entry.target.classList.remove('show'); // Hapus kelas "show" ketika keluar dari viewport
        }
    });
}, {
    threshold: 0.2 // Section terlihat 20% sebelum memicu animasi
});

// Observasi setiap section
sections.forEach(section => {
    observer.observe(section);
});

// Pilih semua elemen dengan kelas "box"
const boxes = document.querySelectorAll('.fade');

// Fungsi untuk mengecek apakah elemen terlihat di layar
function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9; // Ambang bawah untuk memicu animasi
    const triggerTop = window.innerHeight * 0.1;  // Ambang atas untuk animasi saat menggulir ke atas

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        // Tambahkan kelas visible jika elemen terlihat di layar
        if (boxTop < triggerBottom && boxBottom > triggerTop) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible'); // Hapus kelas jika elemen keluar dari layar
        }
    });
}

// Jalankan fungsi saat halaman pertama kali dimuat dan saat digulir
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);




