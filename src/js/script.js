// ==========================================
// TRANSLATIONS & MULTI-LANGUAGE FITUR (i18n)
// ==========================================
// Di sini adalah tempat kamu menaruh teks terjemahannya (kamu bisa copy-paste dari PDF/Adobe mu ke sini).
// Pastikan "key" (misal: "nav_about") sama persis di setiap bahasa dan di dalam data-i18n HTML.

const translations = {
  // BAHASA INGGRIS (Default)
  // NAVBAR
  en: {
    nav_about: "About",
    nav_products: "Products",
    nav_services: "Services",
    nav_events_news: "Events & News",
    nav_contact: "Contact",
    // Tambahkan translasinya di sini... 
    // format ->  id_teks: "Teks Kamu",
    home_about_title: "ABOUT US",
    home_about_desc: "In an ever-evolving landscape of industries reliant on metal products, one name has consistently shone as a beacon of quality and innovation for over five decades. The PHH Group of Companies, with its unwavering commitment to delivering top-notch metal products, services, and solutions, has not only weathered the test of time but has also evolved into a global force to be reckoned with.",
    home_what_we_have: "WHAT WE HAVE",
    home_what_we_do: "WHAT WE DO",
    home_aerospace_div: "AEROSPACE DIVISION",
    home_smart_warehouse: "SMART WAREHOUSE",
    home_vendor_inventory: "VENDOR-MANAGED INVENTORY",

    // --- TRANSLASI HAKUDO.HTML ---
    hakudo_table1_category: "CATEGORY",
    hakudo_table1_stainless: "Stainless Steel",
    hakudo_table1_aluminium: "Aluminium",
    hakudo_table1_precision: "(High Precision)",
    hakudo_table2_material: "MATERIAL",
    hakudo_table2_code: "CODE",
    hakudo_table2_mildsteel: "Mild Steel",
    hakudo_table2_brass: "Brass",
    hakudo_table2_copper: "Copper",
    certifications_title: "CERTIFICATIONS",
    footer_headquarter: "HEADQUARTER",
    footer_copyright: "© PHH Metal. All rights reserved 2023.",
    footer_privacy_policy: "Privacy Policy",
    footer_terms_of_use: "Terms of Use",

    // --- TRANSLASI NIPPON KOSHUHA.HTML ---
    nippon_material: "MATERIAL",
    nippon_equivalent_grade: "EQUIVALENT GRADE",
    nippon_tool_steel_category: "TOOL STEEL CATEGORY",
    nippon_cold_work_tool_steel: "Cold Work <br />Tool Steel",
    nippon_martensitic_stainless_steel: "Martensitic Stainless Steel",
    nippon_plastic_mould_steel: "Plastic Mould Steel",
    nippon_tough_hardening: "Tough Hardening",
    nippon_pre_hardened: "Pre Hardened",
    nippon_precipitation_hardening: "Precipitation <br> Hardening",
    nippon_medium_carbon_steel: "Medium Carbon Steel",
    nippon_hot_work_tool_steel: "Hot Work <br> Tool Steel",
    nippon_machinery_steel_tool_steel: "Machinery Steel <br> Tool Steel",

    // --- TRANSLASI GLOBAL LEADER.HTML ---
    global_category: "CATEGORY",
    global_graphite: "Graphite",
  },

  // BAHASA INDONESIA
  id: {
    nav_about: "Tentang Kami",
    nav_products: "Produk",
    nav_services: "Jasa",
    nav_events_news: "Acara & Berita",
    nav_contact: "Kontak",
    home_about_title: "TENTANG KAMI",
    home_about_desc: "PHH Group memiliki pondasi yang kuat dipasar Malaysia selama 51 tahun dan merupakan perusahaan yang menyediakan bahan logam dan jasa precision machining dengan motto \"One Stop Metal Solution\". Perusahaan ini telah memiliki Sertifikasi Mutu International AS9100 dan ISO9001. Dengan perlengkapan yang terbaru, proses pemeriksaan kualitas yang ketat, serta tim teknis profesional, PHH berkomitmen untuk memberikan produk logam berkualitas tinggi yang stabil dan dapat diandalkan,serta menyediakan solusi untuk keperluan machining kepada semua pelanggan. PHH Group menyediakan material Aerospace, Aluminium Semikonduktor, Cold Work Tool Steel, Plastic Mould Steel, Hot Work Tool Steel, Engineering Steel, Stainless Steel, Aluminium, Kuningan, Tembaga, Perunggu, serta berbagai macam material lainnya. Produk produknya banyak digunakan di industri Aerospace, Semikonduktor, Otomotif, dan Industri Mold Manufaktur, serta diekspor ke Indonesia dan negara Asia Tenggara lainnya. Dengan 51 tahun pengalaman di industri, serta kualitas yang unggul, PHH Group telah menjadi mitra jangka panjang yang dipercaya oleh para pelanggan, serta menjadi penyedia solusi logam yang terkemuka.",
    home_what_we_have: "APA YANG KAMI MILIKI",
    home_what_we_do: "APA YANG KAMI LAKUKAN",
    home_aerospace_div: "DIVISI DIRGANTARA",
    home_smart_warehouse: "GUDANG PINTAR",
    home_vendor_inventory: "INVENTARIS YANG DIKELOLA VENDOR",

    // --- TRANSLASI HAKUDO.HTML ---
    hakudo_table1_category: "KATEGORI",
    hakudo_table1_stainless: "Stainless Steel",
    hakudo_table1_aluminium: "Aluminium",
    hakudo_table1_precision: "(Presisi Tinggi)",
    hakudo_table2_material: "MATERIAL",
    hakudo_table2_code: "KODE",
    hakudo_table2_mildsteel: "Mild Steel",
    hakudo_table2_brass: "Kuningan",
    hakudo_table2_copper: "Tembaga",
    certifications_title: "SERTIFIKASI",
    footer_headquarter: "KANTOR PUSAT",
    footer_copyright: "© PHH Metal. Terlindungi Hak Cipta sejak 2023.",
    footer_privacy_policy: "Kebijakan Privasi",
    footer_terms_of_use: "Syarat Penggunaan",

    // --- TRANSLASI NIPPON KOSHUHA.HTML ---
    nippon_material: "MATERIAL",
    nippon_equivalent_grade: "JENIS SETARA",
    nippon_tool_steel_category: "KATEGORI BAJA PERKAKAS",
    nippon_cold_work_tool_steel: "Baja Perkakas <br />Pengerjaan Dingin",
    nippon_martensitic_stainless_steel: "Baja Tahan Karat Martensitik",
    nippon_plastic_mould_steel: "Baja Cetakan Plastik",
    nippon_tough_hardening: "Pengerasan Tangguh",
    nippon_pre_hardened: "Pra-Pengerasan",
    nippon_precipitation_hardening: "Pengerasan <br> Presipitasi",
    nippon_medium_carbon_steel: "Baja Karbon Sedang",
    nippon_hot_work_tool_steel: "Baja Perkakas <br> Pengerjaan Panas",
    nippon_machinery_steel_tool_steel: "Baja Mesin <br> Baja Perkakas",

    // --- TRANSLASI GLOBAL LEADER.HTML ---
    global_category: "KATEGORI",
    global_graphite: "Grafit",
  },

  // BAHASA MELAYU
  ms: {
    nav_about: "Tentang Kami",
    nav_products: "Produk",
    nav_services: "Perkhidmatan",
    nav_events_news: "Acara & Berita",
    nav_contact: "Hubungi",
    home_about_title: "TENTANG KAMI",
    home_about_desc: "PHH Group telah bertapak kukuh dalam pasaran Malaysia selama lebih daripada 51 tahun. Syarikat ini mengkhusus dalam pembekalan bahan logam dan pemesinan ketepatan, serta menyediakan perkhidmatan Penyelesaian Logam Sehenti (One-Stop Metal Solution) kepada para pelanggan. PHH Group telah memperoleh pensijilan sistem pengurusan kualiti antarabangsa, iaitu AS9100 dan ISO 9001, yang membuktikan komitmen syarikat terhadap piawaian kualiti dan kecemerlangan operasi yang tinggi. Dengan kemudahan peralatan yang canggih, sistem pengurusan kualiti yang ketat, serta pasukan teknikal yang profesional dan berpengalaman, PHH sentiasa menyediakan produk logam dan penyelesaian pemesinan yang stabil, boleh dipercayai dan berkualiti tinggi kepada pelanggan. PHH Group membekalkan pelbagai jenis bahan termasuk bahan aeroangkasa, bahan aluminium untuk industri semikonduktor, keluli alat kerja sejuk, keluli acuan plastik, keluli alat kerja panas, keluli kejuruteraan, keluli tahan karat, aluminium, tembaga, loyang dan gangsa, serta pelbagai bahan lain. Produk-produk PHH Group digunakan secara meluas dalam industri seperti aeroangkasa, semikonduktor, automotif dan pembuatan acuan, serta dieksport ke Indonesia dan negara-negara lain di Asia Tenggara. Dengan pengalaman industri melebihi lima dekad serta komitmen terhadap kualiti yang cemerlang, PHH Group telah menjadi rakan kerjasama jangka panjang yang dipercayai oleh pelanggan serta peneraju dalam penyediaan penyelesaian logam di rantau ini..",
    home_what_we_have: "APA YANG KAMI ADA",
    home_what_we_do: "PERKHIDMATAN KAMI",
    home_aerospace_div: "BAHAGIAN AEROANGKASA",
    home_smart_warehouse: "GUDANG PINTAR",
    home_vendor_inventory: "STOK DIURUS VENDOR",

    // --- TRANSLASI HAKUDO.HTML ---
    hakudo_table1_category: "CATEGORY",
    hakudo_table1_stainless: "Stainless Steel",
    hakudo_table1_aluminium: "Aluminium",
    hakudo_table1_precision: "(Presisi Tinggi)",
    hakudo_table2_material: "MATERIAL",
    hakudo_table2_code: "CODE",
    hakudo_table2_mildsteel: "Mild Steel",
    hakudo_table2_brass: "Brass",
    hakudo_table2_copper: "Copper",
    certifications_title: "PENSIJILAN",
    footer_headquarter: "IBU PEJABAT",
    footer_copyright: "© PHH Metal. Hak cipta terpelihara 2023.",
    footer_privacy_policy: "Dasar Privasi",
    footer_terms_of_use: "Syarat Penggunaan",

    // --- TRANSLASI NIPPON KOSHUHA.HTML ---
    nippon_material: "MATERIAL",
    nippon_equivalent_grade: "EQUIVALENT GRADE",
    nippon_tool_steel_category: "Cold Work Tool Steel",
    nippon_cold_work_tool_steel: "Keluli Perkakas <br />Kerja Sejuk",
    nippon_martensitic_stainless_steel: "Keluli Tahan Karat Martensitik",
    nippon_plastic_mould_steel: "Keluli Acuan Plastik",
    nippon_tough_hardening: "Pengerasan Teguh",
    nippon_pre_hardened: "Pra-Keras",
    nippon_precipitation_hardening: "Pengerasan <br> Pemendakan",
    nippon_medium_carbon_steel: "Keluli Karbon Sederhana",
    nippon_hot_work_tool_steel: "Keluli Perkakas <br> Kerja Panas",
    nippon_machinery_steel_tool_steel: "Keluli Jentera <br> Keluli Perkakas",

    // --- TRANSLASI GLOBAL LEADER.HTML ---
    global_category: "CATEGORY",
    global_graphite: "Grafit",
  },

  // BAHASA JEPANG
  ja: {
    nav_about: "PHH の強み",
    nav_products: "製品",
    nav_services: "サービス",
    nav_events_news: "イベントとニュース",
    nav_contact: "お問い合わせ ",
    home_about_title: "PHH の強み",
    home_about_desc: "金属製品に依存する業界が絶えず進化を続ける中、50年以上にわたり、品質と革新の象徴として輝きを放ち続けている企業があります。PHHグループは、最高品質の金属製品、サービス、そしてソリューションの提供という揺るぎないコミットメントにより、時の試練を乗り越えてきただけでなく、世界的にも認められる存在へと成長を遂げてきました。.",
    home_what_we_have: "私たちが持っているもの",
    home_what_we_do: "私たちの活動",
    home_aerospace_div: "航空宇宙部門",
    home_smart_warehouse: "スマート倉庫",
    home_vendor_inventory: "ベンダー管理在庫",

    // --- TRANSLASI HAKUDO.HTML ---
    hakudo_table1_category: "カテゴリ",
    hakudo_table1_stainless: "ステンレス鋼",
    hakudo_table1_aluminium: "アルミニウム",
    hakudo_table1_precision: "(High Precision)",
    hakudo_table2_material: "材料",
    hakudo_table2_code: "コード",
    hakudo_table2_mildsteel: "軟鋼",
    hakudo_table2_brass: "真鍮",
    hakudo_table2_copper: "銅",
    certifications_title: "認証",
    footer_headquarter: "本社",
    footer_copyright: "© PHHメタル。2023年、全著作権所有。",
    footer_privacy_policy: "利用規約",
    footer_terms_of_use: "プライバシーポリシー",

    // --- TRANSLASI NIPPON KOSHUHA.HTML ---
    nippon_material: "材料",
    nippon_equivalent_grade: "同等グレード",
    nippon_tool_steel_category: "工具鋼カテゴリ",
    nippon_cold_work_tool_steel: "コールドワーク工具鋼",
    nippon_martensitic_stainless_steel: "マルテンサイト系<br>ステンレス鋼",
    nippon_plastic_mould_steel: "プラスチック金型鋼",
    nippon_tough_hardening: "耐衝撃硬化",
    nippon_pre_hardened: "時効硬化",
    nippon_precipitation_hardening: "時効硬化",
    nippon_medium_carbon_steel: "中炭素鋼",
    nippon_hot_work_tool_steel: "熱間工具鋼",
    nippon_machinery_steel_tool_steel: "機械用鋼工具鋼",

    // --- TRANSLASI GLOBAL LEADER.HTML ---
    global_category: "カテゴリ",
    global_graphite: "グラファイト",
  },

  // BAHASA CHINA (Mandarin)
  zh: {
    nav_about: "关于我们",
    nav_products: "产品",
    nav_services: "服务 ",
    nav_events_news: "新闻与活动",
    nav_contact: "联系我们",
    home_about_title: "关于我们",
    home_about_desc: "PHH集团跨越五十余载风雨与改革，始终屹立不移以卓越品质为基石，以持续创新为 引擎，在时间的淬炼 中愈发耀眼，成为行业中不可忽视的存在。PHH集团，正是在这 样的历程中不断崛起。从立足本土到走向全球，从专注产品到引领解决方案，它以坚 定不移的信念，持续为世界提供领先的金属产品、专业服务与系统化解决方案。在每 一次产业更迭之中，它不仅顺势而行，更主动塑造未来如今，PHH集团已成长为一股 举 足 轻 重 的 全 球 力 量 ， 在 更 高 的 舞 台 上 ， 持 续 定 义 行 业 的 下 一 种 可 能 。.",
    home_what_we_have: "独家经销商代理",
    home_what_we_do: "金属加工中心",
    home_aerospace_div: "航空航天部門",
    home_smart_warehouse: "ERP - WMS",
    home_vendor_inventory: " ",

    // --- TRANSLASI HAKUDO.HTML ---
    hakudo_table1_category: "类别",
    hakudo_table1_stainless: "不锈钢",
    hakudo_table1_aluminium: "铝",
    hakudo_table1_precision: "(High Precision)",
    hakudo_table2_material: "材料",
    hakudo_table2_code: "编码",
    hakudo_table2_mildsteel: "低碳钢",
    hakudo_table2_brass: "黄铜",
    hakudo_table2_copper: "铜",
    certifications_title: "各项认证",
    footer_headquarter: "公司总部",
    footer_copyright: "© PHH Metal。版权所有 2023。",
    footer_privacy_policy: "隐私政策",
    footer_terms_of_use: "使用条款",

    // --- TRANSLASI NIPPON KOSHUHA.HTML ---
    nippon_material: "材料",
    nippon_equivalent_grade: "等效等级",
    nippon_tool_steel_category: "工具钢类别",
    nippon_cold_work_tool_steel: "冷作工具钢",
    nippon_martensitic_stainless_steel: "马氏体不锈钢",
    nippon_plastic_mould_steel: "塑料模具钢",
    nippon_tough_hardening: "耐冲击硬化",
    nippon_pre_hardened: "预硬化",
    nippon_precipitation_hardening: "预硬化",
    nippon_medium_carbon_steel: "中碳钢",
    nippon_hot_work_tool_steel: "热作工具钢",
    nippon_machinery_steel_tool_steel: "机械钢",

    // --- TRANSLASI GLOBAL LEADER.HTML ---
    global_category: "类别",
    global_graphite: "石墨",
  }
};

// Fungsi untuk mengganti bahasa
function setLanguage(lang) {
  // 1. Simpan pilihan bahasa di dalam browser komputer pengguna
  localStorage.setItem('selectedLang', lang);

  // 2. Ubah UI tulisan di HTML (Element yang punya data-i18n)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');

    // Cek apakah translasi ada untuk bahasa & key ini
    if (translations[lang] && translations[lang][key]) {
      // Gunakan innerHTML atau textContent sesuai kebutuhan (textContent lebih aman)
      el.innerHTML = translations[lang][key];
    }
  });

  // 3. Update Text Dropdown yg menandakan bahasa sekarang (Desktop & Mobile)
  const currentLangDisplay = document.getElementById('current-lang-display');
  const mobileCurrLangDisplay = document.getElementById('mobile-current-lang-display');

  if (currentLangDisplay) currentLangDisplay.textContent = lang.toUpperCase();
  if (mobileCurrLangDisplay) mobileCurrLangDisplay.textContent = lang.toUpperCase();
}

// Saat halaman direload, cek bahasa terakhir yang dipilih user. Jika tidak ada, pakai 'en'
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('selectedLang') || 'en';
  setLanguage(savedLang);
});


// ==========================================
// NAVBAR SCROLL EFFECT 
// ==========================================
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

// navbar animasi dropdown ------------------

document.querySelectorAll('.dropdown-group').forEach(group => {
  const toggle = group.querySelector('.dropdown-toggle');
  const content = group.querySelector('.dropdown-content');
  const angleUp = group.querySelector('.angle-up');
  const angleDown = group.querySelector('.angle-down');

  group.addEventListener('mouseenter', () => {
    content.style.maxHeight = content.scrollHeight + 'px';
    if (angleUp) angleUp.classList.add('hidden');
    if (angleDown) angleDown.classList.remove('hidden');
  });

  group.addEventListener('mouseleave', () => {
    content.style.maxHeight = '0px';
    if (angleUp) angleUp.classList.remove('hidden');
    if (angleDown) angleDown.classList.add('hidden');
  });
});

// navbar resposive - mobile version ------------------

const menuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

let menuOpen = false;

menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    mobileMenu.style.maxHeight = '900px';
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


overlay.addEventListener('click', () => {
  menuOpen = false;
  mobileMenu.style.maxHeight = '0px';
  overlay.classList.add('hidden');
  overlay.classList.remove('opacity-100');
  document.body.classList.remove('noscroll');
});



document.querySelectorAll('.dropdown-group').forEach(group => {
  const toggle = group.querySelector('.dropdown-toggle');
  const content = group.querySelector('.dropdown-content');
  const angleUp = group.querySelector('.angle-up');
  const angleDown = group.querySelector('.angle-down');

  toggle.addEventListener('click', () => {
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    if (isOpen) {
      content.style.maxHeight = '0px';
      if (angleUp) angleUp.classList.remove('hidden');
      if (angleDown) angleDown.classList.add('hidden');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      if (angleUp) angleUp.classList.add('hidden');
      if (angleDown) angleDown.classList.remove('hidden');
    }
  });
});


// Pop-up for Certificate ------------------

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

  window.closePopup = closePopup;
});


