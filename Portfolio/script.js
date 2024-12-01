    var togglebtn=document.querySelector(".togglebtn");
    var nav=document.querySelector(".nav-links");
    var links=document.querySelector(".nav-links li");

    togglebtn.addEventListener("click", function(){
        this.classList.toggle("click");
        nav.classList.toggle("open");
    })

    var typed=new Typed(".input",{
            strings:["Frontend Developer","Graphic Designer","UI/UX Designer"],
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

    // Button Next dan Home
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
    const themeToggle = document.querySelectorAll("#theme, #sun"); // Seleksi kedua tombol
    const body = document.body;

    const Icon = () => {
        themeToggle.forEach(btn => {
            if (body.classList.contains("dark")) {
                btn.classList.remove("bx-sun");
                btn.classList.add("bx-moon");
            } else {
                btn.classList.remove("bx-moon");
                btn.classList.add("bx-sun");
            }
        });
    };

    themeToggle.forEach(toggle => {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark"); // Toggle dark mode
            Icon();
        });
    });
    Icon();
});

// Translate
const translationsIndonesian = {
    // Navbar
    t1: "Beranda",
    t2: "Tentang",
    t3: "Layanan",
    t4: "Portofolio",
    t5: "Kontak",
    t56: "Beranda",
    t57: "Tentang",
    t58: "Layanan",
    t59: "Portofolio",
    t60: "Kontak",

    // Homepage
    t7: "Saya adalah seorang Siswa dari sekolah SMK TI BALI GLOBAL BADUNG, yang berkomitmen untuk kemajuan Indonesia Emas 2045.",
    t8: "Rekrut saya",
    t9: "Kontak saya",

    // About
    t10: "<span>Tentang</span> Saya",
    t11: "Halo, saya I Komang Aditya Putra Mahendra",
    t12: "Saya seorang graphic designer dan front end developer dengan pengalaman 3 tahun lebih. Memiliki keahlian dalam merancang suatu desain. Berofokus pada hasil, kreatif dan berkomitmen untuk pelayanan pengguna yang lebih baik. Dapat bekerja sama dalam tim maupun mandiri",
    t13: "Pendidikan",
    t14: "Siswa",
    t16: "Siswa",
    t17: "Siswa",
    t17: "Kemampuan",
    t18: "<br>Struktur halaman web, semantic tags, form handling.",
    t19: "<br>Styling website, animasi dengan keyframes, menampilkan desain responsif.",
    t15: "<br>DOM manipulation, dan penggunaan library seperti jQuery.",
    t20: "<br>Pengelolaan data,  presentasi informatif, pengelola dokumen",
    t21: "<br>Desain grafis, coloring editing, mockup desain",
    t22: "<br>Desain logo, desain website, UI/UX desain",
    t23: "Unduh CV",
    t24: "Rekrut saya",

    // Services
    t25: "Layanan <span>Saya</span>",
    t26: "Butuh Desain yang<br> <span>Memukau?</span>",
    t27: "Saya menyediakan beberapa layanan yang dapat anda dapatkan dengan melalui kontak bersama saya",
    t28: "Selengkapnya",
    t29: "Desain Mockup",
    t30: "Mengubah konsep anda menjadi gambaran nyata dengan desain mockup yang memukau!",
    t31: "Desain UI/UX",
    t32: "Memastikan interaksi pengguna berjalan dengan intuitif dengan desain antarmuka dan pengalaman pengguna!",
    t33: "Desain Website",
    t34: "Tidak hanya menciptakan website yang interaktif dengan visual indah, tetapi juga responsif dan modern!",
    t35: "Identitas Visual",
    t36: "Membantu brand anda untuk tampil beda dengan desain indentitas visual yang kuat dan konsisten!",

    // Portfolio
    t37: "<span>Portofolio</span>",

    // Contact
    t38: "<span>Kontak</span> Saya",
    t39: "24/7 Kami akan menjawab pertanyaan dan permasalahan Anda",
    t40: "Layanan",
    t41: '<input type="checkbox"> Desain Website',
    t42: '<input type="checkbox"> Desain UI/UX',
    t43: '<input type="checkbox"> Desain Mockup',
    t44: '<input type="checkbox"> Identitas Visual',
    t45: "Kirim Pesan",
    t46: "<span>Chat bersama</span> Saya",
    t47: "Anda dapat memulai pesan bersama saya disini!",
    t61: "Mulai obrolan langsung",
    t62: "Kirimi saya email",
    t63: "Chat saya di Whatsapp",
    t48: "<span>Hubungi</span> Saya",
    t49: "Anda ingin mengajukan sesuatu?, Telpon Saja!",
    t50: "<span>Kunjungi</span> Saya",
    t51: "Anda ingin mengenal saya lebih dekat?, Datang Saja!",

    // Footer
    t52: "Navigasi",
    t53: "Dirancang dengan",
    t54: "Kebijakan",
};
const translationsEnglish = {
    // Navbar
    t1: "Home",
    t2: "About",
    t3: "Service",
    t4: "Portofolio",
    t5: "Contact",

    // Homepage
    t7: "I am a student of SMK TI BALI GLOBAL BADUNG, who is committed to the progress of Indonesia Emas 2045.",
    t8: "Hire Me",
    t9: "Contact Me",

    // About
    t10: "<span>About</span> Me",
    t11: "Hello I am I Komang Aditya Putra Mahendra",
    t12: "I am a graphic designer and front-end developer with over 3 years of experience. I have skill  in designing various projects. I focus on results, creative, and committed to providing better user experiences. I can work effectively both in a team and independently",
    t13: "Education",
    t14: "Student",
    t16: "Student",
    t17: "Student",
    t17: "Skills",
    t18: "<br>Semantic web structure, semantic tags, form handling.",
    t19: "<br>Website styling, animation with keyframes, featuring responsive design.",
    t15: "<br>DOM manipulation, and the use of libraries such as jQuery.",
    t20: "<br>Data management, informative presentations, document management",
    t21: "<br>Graphic design, coloring editing, mockup design",
    t22: "<br>Logo design, website design, UI/UX design",
    t23: "Download CV",
    t24: "Hire Me",

    // Services
    t25: "My <span>Service</span>",
    t26: "Need Amazing<br> <span>Design?</span>",
    t27: "I provide several services that you can get by contacting me.",
    t28: "Learn More",
    t29: "Mockup Design",
    t30: "Turn your concepts into real images with stunning mockup designs!",
    t31: "UI/UX Design",
    t32: "Ensure intuitive user interaction with interface design and user experience!",
    t33: "Website Design",
    t34: "Not only creating an interactive website with beautiful visuals, but also responsive and modern!",
    t35: "Visual Identity",
    t36: "Help your brand stand out with a strong and consistent visual identity design!",

    // Portfolio
    t37: "My <span>Portfolio</span>",
    
    // Contact
    t38: "<span>Contact</span> Me",
    t39: "24/7 We will answer you question and problems",
    t40: "Services",
    t41: '<input type="checkbox"> Website Design',
    t42: '<input type="checkbox"> UI/UX Design',
    t43: '<input type="checkbox"> Mockup Design',
    t44: '<input type="checkbox"> Visual Identity',
    t45: "Send Messages",
    t46: "<span>Chat with</span> Me",
    t47: "You can start your message with me here!",
    t61: "Start a live chat",
    t62: "Send me an email",
    t63: "Message me on Whatsapp",
    t48: "<span>Call</span> Me",
    t49: "You want to request something?, Just Call!",
    t50: "<span>Visit</span> Me",
    t51: "You want to get to know me better, Just Come!",
    
    // Footer
    t52: "Navigation",
    t53: "Designed with",
    t54: "Legal",
};
function translateText(translations) {
    Object.keys(translations).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[id];
        }
    });
}

// Menangani semua tombol dengan id yang sama
document.querySelectorAll('#translateToIndonesian').forEach(a => {
    a.addEventListener('click', () => {
        translateText(translationsIndonesian);
    });
});

document.querySelectorAll('#translateToEnglish').forEach(a => {
    a.addEventListener('click', () => {
        translateText(translationsEnglish);
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

// Pilih semua elemen dengan kelas "box"
const fade = document.querySelectorAll('.fade');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;
    const triggerTop = window.innerHeight * 0.1;

    fade.forEach(box => {
        const fadeTop = box.getBoundingClientRect().top;
        const fadeBottom = box.getBoundingClientRect().bottom;

        if (fadeTop < triggerBottom && fadeBottom > triggerTop) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);




