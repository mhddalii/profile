/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  //When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills () {
  let itemClass = this.parentNode.className

  for (i=0; i<skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
          tabContents = document.querySelectorAll('[data-content]') 

    tabs.forEach (tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qualification__active')
            })
            target.classList.add('qualification__active')

            tabs.forEach(tab => {
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
        })
    })

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  // PERBAIKAN: Gunakan pageYOffset untuk scroll vertikal
  const scrollY = window.pageYOffset || window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id') // Tambahkan const

    // Pastikan elemen link ada sebelum memanipulasi class agar tidak error
    const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(sectionClass) {
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionClass.classList.add('active-link')
        } else {
          sectionClass.classList.remove('active-link')
        }
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
  const nav = document.getElementById('header')
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
  const scrollUpElement = document.getElementById('scroll-up');
  
  // Jika scroll lebih dari 560 unit tinggi layar
  if (window.scrollY >= 560) {
    scrollUpElement.classList.add('show-scroll');
  } else {
    scrollUpElement.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Tema yang dipilih sebelumnya (jika user pernah memilih)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Kita mendapatkan tema saat ini yang dimiliki antarmuka dengan memvalidasi class dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Kita memvalidasi jika user sebelumnya memilih tema tertentu
if (selectedTheme) {
  // Jika validasi terpenuhi, kita cek apakah kita harus mengaktifkan atau menonaktifkan dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Aktifkan / nonaktifkan tema secara manual dengan tombol
themeButton.addEventListener('click', () => {
    // Tambah atau hapus class dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    // Kita simpan tema dan ikon saat ini yang dipilih user
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// 1. Daftar Nama Lokasi dan Link Maps-nya
const locationData = [
    // Data Pendidikan
    { name: 'SMP Negeri 22 Palembang', url: 'https://maps.app.goo.gl/VAeHR9yK7GNh9A4q6' },
    { name: 'SMA Negeri 11 Palembang', url: 'https://maps.app.goo.gl/BRcadMANC74qudySA' },
    { name: 'Politeknik Negeri Sriwijaya', url: 'https://maps.app.goo.gl/qJsjpimCQHr9foxq9' },
    
    // Data Pekerjaan / Pengalaman
    { name: 'Project-based', url: 'https://github.com/mhddalii' }, // Bisa diarahkan ke Portfolio/Github
    { name: 'Bappeda Litbang Palembang', url: 'https://maps.app.goo.gl/6A4jrjmH5JyvrKKv7' },
    { name: 'HaramainKU – PT Kartika Utama', url: 'https://maps.app.goo.gl/p7zi17gzBC3eLNbs5' }
];

// 2. Ambil semua elemen subtitle
const subtitles = document.querySelectorAll('.qualification__subtitle');

// 3. Proses penambahan link dan efek hover
subtitles.forEach(function(element) {
    locationData.forEach(function(item) {
        // Jika teks di elemen HTML cocok dengan nama di daftar kita
        if (element.textContent.trim() === item.name) {
            
            // Bungkus teks dengan tag <a> secara dinamis
            element.innerHTML = `<a href="${item.url}" target="_blank" class="dynamic-link">${item.name}</a>`;
            
            // Ambil elemen <a> yang baru dibuat
            const link = element.querySelector('a');

            // Tambahkan CSS langsung via JS agar tetap rapi
            Object.assign(link.style, {
                textDecoration: 'none',
                color: 'inherit',
                transition: '0.3s'
            });

            // Efek Hover: Berubah warna ke var(--first-color-alt)
            link.addEventListener('mouseenter', () => {
                link.style.color = 'var(--first-color-alt)';
            });

            // Efek Normal: Kembali ke warna asal
            link.addEventListener('mouseleave', () => {
                link.style.color = 'inherit';
            });
        }
    });
});

// 1. Data Kontak
const contactData = {
    phone: {
        text: '+62 895 2880 1338',
        url: 'https://wa.me/6289528801338' // Format WhatsApp: https://wa.me/nomorhp (tanpa + atau spasi)
    },
    email: {
        text: 'mhddalii11@gmail.com',
        url: 'mailto:mhddalii11@gmail.com'
    },
    location: {
        text: 'Palembang - Jln. Inspektur Marzuki',
        url: 'https://www.google.com/maps/search/Kota+Palembang,+Sumatera+Selatan'
    }
};

// 2. Ambil semua elemen contact subtitle
const contactSubtitles = document.querySelectorAll('.contact__subtitle');

// 3. Proses penambahan link dan efek hover
contactSubtitles.forEach(function(element) {
    const content = element.textContent.trim();
    let targetUrl = '';

    // Cek tipe konten berdasarkan teks
    if (content === contactData.phone.text) {
        targetUrl = contactData.phone.url;
    } else if (content === contactData.email.text) {
        targetUrl = contactData.email.url;
    } else if (content === contactData.location.text) {
        targetUrl = contactData.location.url;
    }

    if (targetUrl) {
        // Ubah teks menjadi link secara dinamis
        element.innerHTML = `<a href="${targetUrl}" target="_blank" style="text-decoration: none; color: inherit; transition: 0.3s;">${content}</a>`;
        
        const link = element.querySelector('a');

        // Tambahkan efek hover agar konsisten dengan link pendidikan/pekerjaan sebelumnya
        link.addEventListener('mouseenter', () => {
            link.style.color = 'var(--first-color-alt)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = 'inherit';
        });
    }
});