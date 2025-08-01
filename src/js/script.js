// NAVBAR SCROLL EFFECT 
const navbar = document.getElementById('navbar');

// Scroll: mengatur transparansi navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.remove('bg-[#1C3D69]');
        navbar.classList.add('bg-[#1C3D69]/90');
    } else {
        navbar.classList.remove('bg-[#1C3D69]/90');
        navbar.classList.add('bg-[#1C3D69]');
    }
});

// navbar animasi dropdown
document.querySelectorAll('.dropdown-group').forEach(group => {
    const toggle = group.querySelector('.dropdown-toggle');
    const content = group.querySelector('.dropdown-content');
    const angleUp = group.querySelector('.angle-up');
    const angleDown = group.querySelector('.angle-down');

    group.addEventListener('mouseenter', () => {
        content.style.maxHeight = content.scrollHeight + 'px';
        angleUp.classList.add('hidden');
        angleDown.classList.remove('hidden');
    });

    group.addEventListener('mouseleave', () => {
        content.style.maxHeight = '0px';
        angleUp.classList.remove('hidden');
        angleDown.classList.add('hidden');
    });
});

// navbar resposive - mobile version
const menuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

let menuOpen = false;

menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    mobileMenu.style.maxHeight = '500px'; // Atur tinggi sesuai kebutuhan
    overlay.classList.remove('hidden');
    overlay.classList.add('opacity-100');
    document.body.classList.add('noscroll');
  } else {
    mobileMenu.style.maxHeight = '0px';
    overlay.classList.add('hidden');
    overlay.classList.remove('opacity-100');
    document.body.classList.remove('noscroll');
  }
});

// mobile navbar that auto close when the screen is desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && menuOpen) {
        menuOpen = false;
        mobileMenu.style.maxHeight = '0px';
        overlay.classList.add('hidden');
        overlay.classList.remove('opacity-100');
        document.body.classList.remove('noscroll');
        updateNavbarBackground();
    }
});

// Klik overlay = tutup semuanya
overlay.addEventListener('click', () => {
  menuOpen = false;
  mobileMenu.style.maxHeight = '0px';
  overlay.classList.add('hidden');
  overlay.classList.remove('opacity-100');
  document.body.classList.remove('noscroll');
});


// navbar service and product - mobile version
document.querySelectorAll('.dropdown-group').forEach(group => {
    const toggle = group.querySelector('.dropdown-toggle');
    const content = group.querySelector('.dropdown-content');
    const angleUp = group.querySelector('.angle-up');
    const angleDown = group.querySelector('.angle-down');

    toggle.addEventListener('click', () => {
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

        if (isOpen) {
            content.style.maxHeight = '0px';
            angleUp.classList.remove('hidden');
            angleDown.classList.add('hidden');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            angleUp.classList.add('hidden');
            angleDown.classList.remove('hidden');
        }
    });
});


// Pop-up for Certificate
  document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const popupButtons = document.getElementById('popup-buttons');

    function openPopup(images, pdfs) {
      popupContent.innerHTML = '';
      popupButtons.innerHTML = '';

      images.forEach((img, i) => {
        const imageEl = document.createElement('img');
        const imageParent = document.createElement('div');
        imageParent.className = 'w-80 h-[450px] overflow-hidden';

        imageEl.src = img;
        imageEl.className = 'w-full h-full object-cover';

        imageParent.appendChild(imageEl);
        popupContent.appendChild(imageParent);
      });

      // Buat satu tombol download
      const button = document.createElement('button');
      button.className = 'py-3 px-5 bg-navBlue text-white text-lg rounded w-80';
      button.textContent = 'Download All PDF';
      button.addEventListener('click', () => {
        pdfs.forEach(pdf => {
          const link = document.createElement('a');
          link.href = pdf;
          link.target = '_blank';
          link.download = '';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      });

      popupButtons.appendChild(button);

      popup.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closePopup() {
      popup.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    document.querySelectorAll('.open-popup').forEach(button => {
      button.addEventListener('click', () => {
        const imgs = JSON.parse(button.getAttribute('data-img'));
        const pdfs = JSON.parse(button.getAttribute('data-pdf'));
        openPopup(imgs, pdfs);
      });
    });

    window.closePopup = closePopup; // supaya bisa diakses di HTML onclick="closePopup()"
  });


