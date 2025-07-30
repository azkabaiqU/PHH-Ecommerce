// NAVBAR SCROLL EFFECT 
const navbar = document.getElementById('navbar');

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


// Pop-up for Certificate
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupDownload = document.getElementById('popup-download');

function openPopup(imgSrc, pdfHref) {
    popupImg.src = imgSrc;
    popupDownload.href = pdfHref;
    popup.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closePopup() {
    popup.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Tambahkan event listener ke semua tombol dengan class "open-popup"
document.querySelectorAll('.open-popup').forEach(button => {
    button.addEventListener('click', () => {
        const img = button.getAttribute('data-img');
        const pdf = button.getAttribute('data-pdf');
        openPopup(img, pdf);
    });
});