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
    nav_malaysia: "Malaysia",
    nav_indonesia: "Indonesia",
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
    cert_download_btn: "Download All PDF",
    cert_close_btn: "close",

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

    // --- TRANSLASI MACHINEDATA.HTML ---
    md_title: "MACHINE DATA & WORKING CAPACITY IN MALAYSIA",
    md_manual_cut: "MANUAL CUT",
    md_cnc_gantry: "CNC GANTRY PLASMA FLAME CUTTING",
    md_laser_cutting: "LASER CUTTING",
    md_bandsaw_machine: "BANDSAW MACHINE",
    md_aluminium_cutting: "ALUMINIUM CUTTING AND MILLING",
    md_milling: "MILLING",
    md_rough_grinding: "ROUGH GRINDING",
    md_cnc_machining: "CNC MACHINING",
    md_surface_grinding: "SURFACE GRINDING",
    md_logistic: "LOGISTICS",
    md_others: "OTHERS",
    md_th_no: "NO.",
    md_th_names_of_machine: "NAMES OF MACHINE",
    md_th_types_of_machine: "TYPES OF MACHINE",
    md_th_model: "MODEL",
    md_th_country_of_origin: "COUNTRY OF ORIGIN",
    md_th_serial: "SERIAL",
    md_th_max_table_load: "MAX. TABLE LOAD (KG)",
    md_th_work_area: "WORK AREA",

    // --- TRANSLASI METALPRODUCT.HTML ---
    mp_ferrous_metals: "FERROUS METALS",
    mp_ferrous_desc: "Our Metal Division has exceptional capabilities in delivering a range of ferrous metal products in a wide variety of specifications. We are especially experienced in working with highly versatile AISI C1050 carbon steel, top quality stainless steel, multi-purpose tool steel, and low-carbon mild steel. These metals are known for their strength and durability, making them widely used in construction, manufacturing, and infrastructure due to their ability to withstand heavy loads and high temperatures.",
    mp_nonferrous_metals: "NON-FERROUS METALS",
    mp_nonferrous_desc: "Our decades of experience also encompasses the delivery of on-demand non-ferrous metal products, where we work with materials such as aluminum, brass, bronze, copper, graphite, and titanium. Our non-ferrous products are prized for their corrosion resistance, malleability, and lightweight nature, making them essential in industries such as aerospace, electronics, and automotive manufacturing where factors like conductivity and weight are crucial.",
    mp_material_form: "MATERIAL FORM",
    mp_plate: "Plate",
    mp_flat: "Flat",
    mp_shaft_rod: "Shaft / Rod",
    mp_hexagon: "Hexagon",
    mp_channel: "Channel",
    mp_checker: "Checker",
    mp_square: "Square",
    mp_pipe_hollow: "Pipe / Hollow",
    mp_angle: "Angle",
    mp_i_beam: "I -Beam",
    mp_aluminium: "ALUMINIUM",
    mp_tool_steel: "TOOL STEEL",
    mp_machinery_steel: "MACHINERY STEEL",
    mp_aircraft_fastening: "AIRCRAFT FASTENING SYSTEM",
    mp_stainless_steel: "STAINLESS STEEL",
    mp_carbon_steel: "CARBON STEEL",
    mp_titanium: "TITANIUM",
    mp_aircraft_tool: "AIRCRAFT TOOL",
    footer_follow_us: "Follow Us",

    // --- TRANSLASI AEROSPACE.HTML ---
    aero_since_2008: "Since 2008, our Aerospace division has provided one-stop metal solutions to support the growth of aviation and aerospace-related players. We are the sole distributor of Novelis, Constellium and UACJ aerospace components, and produce a wide range of materials including A2024, A6061, A7050, A7075 and Titanium.",
    aero_facilities: "Our facilities are ISO 9001:2015 certified and have received both AS9100 and AS9120 approval. As an environmentally-responsible company, we practice closed loop aluminium recycling as part of our sustainability efforts.",
    aero_specialise_title: "We specialise in docking systems, with capabilities that include:",
    aero_bushing: "Bushing",
    aero_anodising: "Anodising, Gallery, Latch, Edge Protector",
    aero_machining_parts: "Machining Aircraft Parts",
    aero_fastening: "Fastening Systems",
    aero_tooling: "Tooling",
    aero_mro: "MRO",
    aero_docking: "Docking System",
    aero_materials: "Aircraft Materials",
    aero_power_tool: "Aircraft Power Tool",
    aero_aircraft_tool: "Aircraft Tool",
    aero_machine: "Aerospace Machine",
    aero_core_title: "Our core capabilities in other Aerospace-related sectors also encompass:",
    aero_2d3d: "2D/3D Modelling Design",
    aero_cnc_gantry: "CNC Gantry Plasma Cutting Services",
    aero_bandsaw: "Automated Band Saw Cutting Services",
    aero_shearing: "Shearing, Bending, Rolling & Fabrication Services",
    aero_milling: "Surface & Side Milling Services",
    aero_grinding: "Precision & Rough Grinding Services",

    // --- TRANSLASI SMARTWAREHOUSE.HTML ---
    sw_smart_warehouse: "SMART WAREHOUSE",
    sw_vendor_managed: "VENDOR-MANAGED INVENTORY",
    sw_incoming: "Incoming",
    sw_warehouses: "Warehouses",
    sw_phh: "• PHH",
    sw_qr_code: "• QR code sticker",
    sw_erp_in: "• ERP in",
    sw_qc_out: "QC out",
    sw_dimensions: "• Dimensions TxWxL - Qty",
    sw_grade: "• Grade of material",
    sw_mill_cert: "• Mill certificate",
    sw_delivery: "Delivery",
    sw_qc_in: "QC in",
    sw_outgoing: "Outgoing",
    sw_erp_out: "• ERP out",
    sw_doc_packaging: "Documentation & Packaging",
    sw_print_do: "• Print Delivery Order",
    sw_invoice: "• Invoice",

    // --- TRANSLASI ABOUT.HTML ---
    about_hero_title: "A HISTORY OF STEEL, FORGED IN EXCELLENCE",
    about_hero_desc: "The PHH Group of Companies was established in 1975, specialising in hardware metal trading. Over the past {years} years, the Group’s capabilities in ferrous and non-ferrous metal solutions has grown by leaps and bounds, allowing it to now deliver the most comprehensive range of quality steel products to customers. Apart from its reputable local presence, the Group has, through strategic alliances and collaborations with exceptional partners, expanded into the global marketplace, bringing its brand of high-quality, purpose-designed metal solutions to an international clientele.",
    about_stat_tonnes_label: "tonnes metal production",
    about_stat_years_label: "years of experience",
    about_stat_locations_label: "locations",
    about_stat_employees_label: "number of employees",
    about_click_hint: "Click a location above to view its photos",
    about_loc_phh_malaysia: "PHH METAL 1 SDN. BHD. MALAYSIA",
    about_loc_phh_malaysia_addr: "Wisma PHH, Jalan PPU 3, Taman Perindustrian Puchong Utama, 47100 Selangor, Malaysia.",
    about_loc_protech_malaysia: "PRO TECH TOOL AND DIE SDN. BHD. MALAYSIA",
    about_loc_protech_malaysia_addr: "7, Jalan Mandolin 33/5, Seksyen 33, 40400 Shah Alam, Selangor, Malaysia.",
    about_loc_phh_indonesia: "PT PHH SPECIAL STEEL INDONESIA",
    about_loc_phh_indonesia_addr: "Blok F25-09J, Jl. Sungkai, Delta Silicon 3, Lippo Cikarang, Bekasi 17550, Indonesia.",


    // --- TRANSLASI MACHINEDATAINDO.HTML ---
    mdi_title: "MACHINE DATA & WORKING CAPACITY IN INDONESIA",
    mdi_cnc_gantry: "CNC GANTRY PLASMA FLAME CUTTING",
    mdi_aluminium_cutting: "ALUMINIUM CUTTING AND MILLING",
    mdi_bandsaw_machine: "BANDSAW MACHINE",
    mdi_manual_cut: "MANUAL CUT",
    mdi_milling: "MILLING",
    mdi_cnc_machining: "CNC MACHINING",
    mdi_surface_grinding: "SURFACE GRINDING",
  },

  // BAHASA INDONESIA
  id: {
    nav_about: "Tentang Kami",
    nav_products: "Produk",
    nav_services: "Perkhidmatan",
    nav_malaysia: "Malaysia",
    nav_indonesia: "Indonesia",
    nav_events_news: "Acara & Berita",
    nav_contact: "Kontak",
    home_about_title: "TENTANG KAMI",
    home_about_desc: "PHH Group memiliki pondasi yang kuat dipasar Malaysia selama {years} tahun dan merupakan perusahaan yang menyediakan bahan logam dan jasa precision machining dengan motto 'One Stop Metal Solution'. Perusahaan ini telah memiliki Sertifikasi Mutu International AS9100 dan ISO9001. Dengan perlengkapan yang terbaru, proses pemeriksaan kualitas yang ketat, serta tim teknis profesional, PHH berkomitmen untuk memberikan produk logam berkualitas tinggi yang stabil dan dapat diandalkan,serta menyediakan solusi untuk keperluan machining kepada semua pelanggan. PHH Group menyediakan material Aerospace, Aluminium Semikonduktor, Cold Work Tool Steel, Plastic Mould Steel, Hot Work Tool Steel, Engineering Steel, Stainless Steel, Aluminium, Kuningan, Tembaga, Perunggu, serta berbagai macam material lainnya. Produk produknya banyak digunakan di industri Aerospace, Semikonduktor, Otomotif, dan Industri Mold Manufaktur, serta diekspor ke Indonesia dan negara Asia Tenggara lainnya. Dengan {years} tahun pengalaman di industri, serta kualitas yang unggul, PHH Group telah menjadi mitra jangka panjang yang dipercaya oleh para pelanggan, serta menjadi penyedia solusi logam yang terkemuka..",
    home_what_we_have: "APA YANG KAMI MILIKI",
    home_what_we_do: "APA YANG KAMI LAKUKAN",
    home_aerospace_div: "DIVISI DIRGANTARA",
    home_smart_warehouse: "GUDANG PINTAR",
    home_vendor_inventory: "INVENTARIS YANG DIKELOLA VENDOR",

    // --- TRANSLASI HAKUDO.HTML ---
    hakudo_table1_category: "KATEGORI",
    hakudo_table1_stainless: "Stainless Steel",
    hakudo_table1_aluminium: "Aluminium",
    hakudo_table1_precision: "(high precision)",
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
    cert_download_btn: "Unduh Semua PDF",
    cert_close_btn: "tutup",

    // --- TRANSLASI NIPPON KOSHUHA.HTML ---
    nippon_material: "MATERIAL",
    nippon_equivalent_grade: "JENIS SETARA",
    nippon_tool_steel_category: "KATEGORI BAJA PERKAKAS",
    nippon_cold_work_tool_steel: "Cold Work Tool Steel",
    nippon_martensitic_stainless_steel: "Martensitic Stainless Steel",
    nippon_plastic_mould_steel: "Plastic Mould Steel",
    nippon_tough_hardening: "Tough Hardening",
    nippon_pre_hardened: "Pre-Hardened",
    nippon_precipitation_hardening: "Precipitation Hardening",
    nippon_medium_carbon_steel: "Medium Carbon Steel",
    nippon_hot_work_tool_steel: "Hot Work Tool Steel",
    nippon_machinery_steel_tool_steel: "Machinery Steel Tool Steel",

    // --- TRANSLASI GLOBAL LEADER.HTML ---
    global_category: "KATEGORI",
    global_graphite: "Graphite",

    // --- TRANSLASI MACHINEDATA.HTML ---
    md_title: "DATA MESIN & KAPASITAS KERJA DI MALAYSIA",
    md_manual_cut: "MANUAL CUTTING",
    md_cnc_gantry: "CNC GANTRY PLASMA FLAME LUTTING",
    md_laser_cutting: "LASER CUTTING",
    md_bandsaw_machine: "MESIN BANDSAW",
    md_aluminium_cutting: "ALUMINIUM CUTTING DAN MILLING",
    md_milling: "MILLING",
    md_rough_grinding: "ROUGH GRINDING",
    md_cnc_machining: "CNC MACHINING",
    md_surface_grinding: "SURFACE GRINDING",
    md_logistic: "LOGISTIC",
    md_others: "LAINNYA",
    md_th_no: "NO.",
    md_th_names_of_machine: "NAMA MESIN",
    md_th_types_of_machine: "JENIS MESIN",
    md_th_model: "MODEL",
    md_th_country_of_origin: "NEGARA ASAL",
    md_th_serial: "SERIAL",
    md_th_max_table_load: "BEBAN MAKS. MEJA (KG)",
    md_th_work_area: "AREA KERJA",

    // --- TRANSLASI METALPRODUCT.HTML ---
    mp_ferrous_metals: "LOGAM BESI",
    mp_ferrous_desc: "Kami menyediakan berbagai produk logam ferrous dengan beragam spesifikasi. Kami sangat berpengalaman dalam mengerjakan baja karbon AISI C1050 yang serbaguna, Stainless Steel berkualitas tinggi, Tool Steel serbaguna, serta baja lunak (mild steel) berkandungan karbon rendah. Logam-logam ini dikenal karena kekuatan dan ketahanannya, sehingga banyak digunakan dalam konstruksi, manufaktur, dan infrastruktur berkat kemampuannya menahan beban berat serta suhu tinggi.",
    mp_nonferrous_metals: "LOGAM <br> NON <br> BESI",
    mp_nonferrous_desc: "Pengalaman kami selama puluhan tahun juga mencakup penyediaan produk logam non-besi sesuai permintaan, di mana kami bekerja dengan material seperti alumini- um, kuningan (brass), perunggu (bronze), tembaga, grafit, dan titanium. Produk non-besi kami sangat dihargai karena ketahanan terhadap korosi, kelenturan, dan beratnya yang ringan, sehingga menjadi komponen penting dalam industri seperti dirgantara, elektronik, dan manufaktur otomotif, di mana faktor seperti konduktivitas dan berat sangatlah penting.",
    mp_material_form: "BENTUK MATERIAL",
    mp_plate: "Plat",
    mp_flat: "Plat Datar",
    mp_shaft_rod: "As / Batang",
    mp_hexagon: "Segi Enam",
    mp_channel: "Kanal C",
    mp_checker: "Plat Bordes",
    mp_square: "As Persegi",
    mp_pipe_hollow: "Pipa / Hollow",
    mp_angle: "As Siku",
    mp_i_beam: "I - Beam",
    mp_aluminium: "ALUMINIUM",
    mp_tool_steel: "TOOL STEEL",
    mp_machinery_steel: "MACHINERY STEEL",
    mp_aircraft_fastening: "FASTENING SYSTEM PESAWAT",
    mp_stainless_steel: "STAINLESS STEEL",
    mp_carbon_steel: "CARBON STEEL",
    mp_titanium: "TITANIUM",
    mp_aircraft_tool: "ALAT PESAWAT",
    footer_follow_us: "Ikuti Kami",

    // --- TRANSLASI AEROSPACE.HTML ---
    aero_since_2008: "Sejak 2008, Divisi Dirgantara kami telah menyediakan pusat perlayanan terpadu untuk mendukung pertumbuhan pelaku industri penerbangan dan dirgantara. Kami adalah distributor tunggal untuk komponen dirgantara Novelis, Constellium, dan UACJ, serta memproduksi berbagai macam material termasuk A2024, A6061, A7050, A7075, dan Titanium.",
    aero_facilities: "Fasilitas kami tersertifikasi ISO 9001:2015 dan telah memperoleh persetujuan AS9100 serta AS9120. Sebagai perusahaan yang bertanggung jawab terhadap lingkungan, kami menerapkan daur ulang aluminium tertutup (closed loop) sebagai bagian dari upaya keberlanjutan kami.",
    aero_specialise_title: "Kami berspesialisasi dalam sistem docking, yang mencakup:",
    aero_bushing: "Bushing",
    aero_anodising: "Anodisasi, Galeri, Kait, Side Cover",
    aero_machining_parts: "Machining Komponen Pesawat",
    aero_fastening: "Sistem Fastening / Pengikat",
    aero_tooling: "Perkakas / Tooling",
    aero_mro: "MRO (Maintenance, Repair & Overhaul)",
    aero_docking: "Sistem Docking",
    aero_materials: "Material Pesawat",
    aero_power_tool: "Power Tool untuk Pesawat",
    aero_aircraft_tool: "Tool / Perangkat Pesawat",
    aero_machine: "Mesin Dirgantara",
    aero_core_title: "Kemampuan inti kami di sektor lain yang terkait dengan dirgantara juga mencakup:",
    aero_2d3d: "Layanan Desain Pemodelan 2D/3D",
    aero_cnc_gantry: "Layanan Cutting CNC Gantry Plasma",
    aero_bandsaw: "Layanan Bandsaw Cutting Otomatis",
    aero_shearing: "Layanan Cutting, Bending, Milling, & Fabrikasi",
    aero_milling: "Layanan Surface & Side Milling",
    aero_grinding: "Layanan Grinding Presisi & Kasar",

    // --- TRANSLASI SMARTWAREHOUSE.HTML ---
    sw_smart_warehouse: "GUDANG PINTAR",
    sw_vendor_managed: "INVENTARIS KELOLAAN VENDOR",
    sw_incoming: "Kedatangan",
    sw_warehouses: "Gudang",
    sw_phh: "• PHH",
    sw_qr_code: "• Stiker kode QR",
    sw_erp_in: "• ERP masuk",
    sw_qc_out: "QC keluar",
    sw_dimensions: "• Dimensi TxWxL - Jumlah",
    sw_grade: "• Jenis material",
    sw_mill_cert: "• Sertifikat pabrik",
    sw_delivery: "Pengiriman",
    sw_qc_in: "QC masuk<br>TxWxL - Jumlah",
    sw_outgoing: "Keluar",
    sw_erp_out: "• ERP keluar",
    sw_doc_packaging: "Dokumentasi & Pengemasan",
    sw_print_do: "• Cetak Surat Jalan",
    sw_invoice: "• Faktur",

    // --- TRANSLASI ABOUT.HTML ---
    about_hero_title: "SEJARAH BAJA, DITEMPA DALAM KEUNGGULAN",
    about_hero_desc: "Grup PHH telah berakar kuat di pasar Malaysia selama {years} tahun dan merupakan perusahaan yang menyediakan pasokan bahan logam serta pemesinan presisi dengan layanan One-Stop Metal Solution (layanan terpadu logam). Perusahaan ini telah memperoleh sertifikasi sistem manajemen mutu internasional AS9100 dan ISO9001. Dengan dukungan peralatan canggih, sistem manajemen kualitas yang ketat, serta tim teknis profesional, PHH berkomitmen untuk memberikan produk logam berkualitas tinggi yang stabil dan dapat diandalkan serta solusi pemrosesan kepada para pelanggan. Grup PHH terutama memasok material kedirgantaraan, aluminium untuk industri semikonduktor, baja perkakas kerja dingin, baja cetakan plastik, baja perkakas kerja panas, baja mesin, baja tahan karat, aluminium, tembaga, kuningan, dan perunggu, serta berbagai jenis material lainnya. Produk-produk ini banyak digunakan dalam industri kedirgantaraan, semikonduktor, otomotif, dan pembuatan cetakan, serta diekspor ke Indonesia dan pasar Asia Tenggara. Dengan {years} tahun pengalaman di industri serta kualitas yang unggul, Grup PHH telah menjadi mitra jangka panjang yang terpercaya bagi para pelanggan serta pemasok solusi logam terkemuka.",
    about_stat_tonnes_label: "ton produksi logam",
    about_stat_years_label: "tahun pengalaman",
    about_stat_locations_label: "lokasi",
    about_stat_employees_label: "jumlah karyawan",
    about_click_hint: "Klik lokasi di atas untuk melihat fotonya",
    about_loc_phh_malaysia: "PHH METAL 1 SDN. BHD. MALAYSIA",
    about_loc_phh_malaysia_addr: "Wisma PHH, Jalan PPU 3, Taman Perindustrian Puchong Utama, 47100 Selangor, Malaysia.",
    about_loc_protech_malaysia: "PRO TECH TOOL AND DIE SDN. BHD. MALAYSIA",
    about_loc_protech_malaysia_addr: "7, Jalan Mandolin 33/5, Seksyen 33, 40400 Shah Alam, Selangor, Malaysia.",
    about_loc_phh_indonesia: "PT PHH SPECIAL STEEL INDONESIA",
    about_loc_phh_indonesia_addr: "Blok F25-09J, Jl. Sungkai, Delta Silicon 3, Lippo Cikarang, Bekasi 17550, Indonesia.",


    // --- TRANSLASI MACHINEDATAINDO.HTML ---
    mdi_title: "DATA MESIN & KAPASITAS KERJA DI INDONESIA",
    mdi_cnc_gantry: "CNC GANTRY PLASMA FLAME CUTTING",
    mdi_aluminium_cutting: "ALUMINIUM CUTTING AND MILLING",
    mdi_bandsaw_machine: "MESIN BANDSAW",
    mdi_manual_cut: "MANUAL CUTTING",
    mdi_milling: "MILLING",
    mdi_cnc_machining: "CNC MACHINING",
    mdi_surface_grinding: "GRINDING SURFACE",
  },

  // BAHASA MELAYU
  ms: {
    nav_about: "Tentang Kami",
    nav_products: "Produk",
    nav_services: "Perkhidmatan",
    nav_malaysia: "Malaysia",
    nav_indonesia: "Indonesia",
    nav_events_news: "Acara & Berita",
    nav_contact: "Hubungi",
    home_about_title: "TENTANG KAMI",
    home_about_desc: "PHH Group telah bertapak kukuh dalam pasaran Malaysia selama lebih daripada {years} tahun. Syarikat ini mengkhusus dalam pembekalan bahan logam dan pemesinan ketepatan, serta menyediakan perkhidmatan Penyelesaian Logam Sehenti (One-Stop Metal Solution) kepada para pelanggan. PHH Group telah memperoleh pensijilan sistem pengurusan kualiti antarabangsa, iaitu AS9100 dan ISO 9001, yang membuktikan komitmen syarikat terhadap piawaian kualiti dan kecemerlangan operasi yang tinggi. Dengan kemudahan peralatan yang canggih, sistem pengurusan kualiti yang ketat, serta pasukan teknikal yang profesional dan berpengalaman, PHH sentiasa menyediakan produk logam dan penyelesaian pemesinan yang stabil, boleh dipercayai dan berkualiti tinggi kepada pelanggan. PHH Group membekalkan pelbagai jenis bahan termasuk bahan aeroangkasa, bahan aluminium untuk industri semikonduktor, keluli alat kerja sejuk, keluli acuan plastik, keluli alat kerja panas, keluli kejuruteraan, keluli tahan karat, aluminium, tembaga, loyang dan gangsa, serta pelbagai bahan lain. Produk-produk PHH Group digunakan secara meluas dalam industri seperti aeroangkasa, semikonduktor, automotif dan pembuatan acuan, serta dieksport ke Indonesia dan negara-negara lain di Asia Tenggara. Dengan pengalaman industri melebihi lima dekad serta komitmen terhadap kualiti yang cemerlang, PHH Group telah menjadi rakan kerjasama jangka panjang yang dipercayai oleh pelanggan serta peneraju dalam penyediaan penyelesaian logam di rantau ini..",
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
    cert_download_btn: "Muat Turun Semua PDF",
    cert_close_btn: "tutup",

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

    // --- TRANSLASI MACHINEDATA.HTML ---
    md_title: "DATA MESIN & KAPASITI KERJA DI MALAYSIA",
    md_manual_cut: "PEMOTONGAN MANUAL",
    md_cnc_gantry: "PEMOTONGAN CNC GANTRY PLASMA FLAME",
    md_laser_cutting: "PEMOTONGAN LASER",
    md_bandsaw_machine: "MESIN BANDSAW",
    md_aluminium_cutting: "PEMOTONGAN & PENGILANGAN ALUMINIUM",
    md_milling: "PENGILANGAN",
    md_rough_grinding: "PENGISARAN KASAR",
    md_cnc_machining: "PEMESINAN CNC",
    md_surface_grinding: "PENGISARAN PERMUKAAN",
    md_logistic: "LOGISTIK",
    md_others: "LAIN-LAIN",
    md_th_no: "NO.",
    md_th_names_of_machine: "NAMA MESIN",
    md_th_types_of_machine: "JENIS MESIN",
    md_th_model: "MODEL",
    md_th_country_of_origin: "NEGARA ASAL",
    md_th_serial: "SERIAL",
    md_th_max_table_load: "BEBAN MAKS. MEJA (KG)",
    md_th_work_area: "KAWASAN KERJA",

    // --- TRANSLASI METALPRODUCT.HTML ---
    mp_ferrous_metals: "LOGAM FERUS",
    mp_ferrous_desc: "Bahagian Logam kami mempunyai keupayaan luar biasa dalam menghantar pelbagai produk logam ferus dalam pelbagai spesifikasi. Kami sangat berpengalaman bekerja dengan keluli karbon AISI C1050 yang serba boleh, keluli tahan karat berkualiti tinggi, keluli alat pelbagai guna, dan keluli ringan karbon rendah. Logam-logam ini dikenali kerana kekuatan dan ketahanannya, menjadikannya banyak digunakan dalam pembinaan, pembuatan, dan infrastruktur kerana keupayaannya menahan beban berat dan suhu tinggi.",
    mp_nonferrous_metals: "LOGAM BUKAN FERUS",
    mp_nonferrous_desc: "Pengalaman berdekad-dekad kami juga merangkumi penghantaran produk logam bukan ferus atas permintaan, di mana kami bekerja dengan bahan seperti aluminium, loyang, gangsa, tembaga, grafit, dan titanium. Produk bukan ferus kami dihargai kerana rintangan kakarannya, kelenturannya, dan sifatnya yang ringan, menjadikannya penting dalam industri seperti aeroangkasa, elektronik, dan pembuatan automotif di mana faktor-faktor seperti kekonduksian dan berat adalah penting.",
    mp_material_form: "BENTUK BAHAN",
    mp_plate: "Plat",
    mp_flat: "Flat",
    mp_shaft_rod: "Aci / Rod",
    mp_hexagon: "Heksagon",
    mp_channel: "Saluran",
    mp_checker: "Checker",
    mp_square: "Segi Empat",
    mp_pipe_hollow: "Paip / Hollow",
    mp_angle: "Sudut",
    mp_i_beam: "I-Beam",
    mp_aluminium: "ALUMINIUM",
    mp_tool_steel: "KELULI ALAT",
    mp_machinery_steel: "KELULI MESIN",
    mp_aircraft_fastening: "SISTEM PENGIKAT PESAWAT",
    mp_stainless_steel: "KELULI TAHAN KARAT",
    mp_carbon_steel: "KELULI KARBON",
    mp_titanium: "TITANIUM",
    mp_aircraft_tool: "ALAT PESAWAT",
    footer_follow_us: "Ikuti Kami",

    // --- TRANSLASI AEROSPACE.HTML ---
    aero_since_2008: "Sejak tahun 2008, bahagian Aeroangkasa kami telah menyediakan penyelesaian logam sehenti untuk menyokong pertumbuhan industri penerbangan dan pemain berkaitan aeroangkasa. Kami adalah pengedar tunggal komponen aeroangkasa Novelis, Constellium dan UACJ, serta menghasilkan pelbagai jenis bahan termasuk A2024, A6061, A7050, A7075 dan Titanium.",
    aero_facilities: "Kemudahan kami diperakui ISO 9001:2015 dan telah menerima kelulusan AS9100 serta AS9120. Sebagai syarikat yang bertanggungjawab terhadap alam sekitar, kami mengamalkan kitar semula aluminium secara gelung tertutup sebagai sebahagian daripada usaha kemampanan kami.",
    aero_specialise_title: "Kami mengkhusus dalam sistem dok,dengan keupayaan yang merangkumi:",
    aero_bushing: "Bushing",
    aero_anodising: "Anodising, Galeri, Latch, Pelindung Tepi",
    aero_machining_parts: "Pemesinan Bahagian Pesawat",
    aero_fastening: "Sistem Pengikat",
    aero_tooling: "Perkakas (Tooling)",
    aero_mro: "MRO",
    aero_docking: "Sistem Dok",
    aero_materials: "Alat Ganti Pesawat",
    aero_power_tool: "Aircraft Power Tool",
    aero_aircraft_tool: "Alat Pesawat",
    aero_machine: "Mesin Aeroangkasa",
    aero_core_title: "Keupayaan teras kami dalam sektor lain yang berkaitan dengan Aeroangkasa turut merangkumi:",
    aero_2d3d: "Reka Bentuk Pemodelan 2D/3D",
    aero_cnc_gantry: "Perkhidmatan Pemotongan CNC Gantry Plasma",
    aero_bandsaw: "Perkhidmatan Pemotongan Band Saw Automatik",
    aero_shearing: "Perkhidmatan Pemotongan Automatik Band Saw",
    aero_milling: "Perkhidmatan Pengilangan Permukaan & Sisi",
    aero_grinding: "Perkhidmatan Pengisaran Ketepatan & Kasar",

    // --- TRANSLASI SMARTWAREHOUSE.HTML ---
    sw_smart_warehouse: "GUDANG PINTAR",
    sw_vendor_managed: "INVENTORI KELOLAAN VENDOR",
    sw_incoming: "Masuk",
    sw_warehouses: "Gudang",
    sw_phh: "• PHH",
    sw_qr_code: "• Pelekat kod QR",
    sw_erp_in: "• ERP masuk",
    sw_qc_out: "QC keluar",
    sw_dimensions: "• Dimensi TxWxL - Kuantiti",
    sw_grade: "• Gred bahan",
    sw_mill_cert: "• Sijil kilang",
    sw_delivery: "Penghantaran",
    sw_qc_in: "QC masuk",
    sw_outgoing: "Keluar",
    sw_erp_out: "• ERP keluar",
    sw_doc_packaging: "Dokumentasi & Pembungkusan",
    sw_print_do: "• Cetak Pesanan Penghantaran",
    sw_invoice: "• Invois",

    // --- TRANSLASI ABOUT.HTML ---
    about_hero_title: "SEJARAH KELULI, DITEMPA DALAM KECEMERLANGAN",
    about_hero_desc: "PHH Group ditubuhkan pada tahun 1975, yang mengkhusus dalam perdagangan logam perkakasan. Selama {years} tahun yang lalu, keupayaan Kumpulan dalam penyelesaian logam ferus dan bukan ferus telah berkembang pesat, membolehkannya kini menyampaikan rangkaian produk keluli berkualiti yang paling komprehensif kepada pelanggan. Selain kehadiran tempatannya yang bereputasi, Kumpulan telah, melalui pakatan strategik dan kerjasama dengan rakan kongsi yang luar biasa, berkembang ke pasaran global, membawa jenama penyelesaian logam berkualiti tinggi dan direka khas kepada pelanggan antarabangsa.",
    about_stat_tonnes_label: "tan pengeluaran logam",
    about_stat_years_label: "tahun pengalaman",
    about_stat_locations_label: "lokasi",
    about_stat_employees_label: "bilangan pekerja",
    about_click_hint: "Klik lokasi di atas untuk melihat gambarnya",
    about_loc_phh_malaysia: "PHH METAL 1 SDN. BHD. MALAYSIA",
    about_loc_phh_malaysia_addr: "Wisma PHH, Jalan PPU 3, Taman Perindustrian Puchong Utama, 47100 Selangor, Malaysia.",
    about_loc_protech_malaysia: "PRO TECH TOOL AND DIE SDN. BHD. MALAYSIA",
    about_loc_protech_malaysia_addr: "7, Jalan Mandolin 33/5, Seksyen 33, 40400 Shah Alam, Selangor, Malaysia.",
    about_loc_phh_indonesia: "PT PHH SPECIAL STEEL INDONESIA",
    about_loc_phh_indonesia_addr: "Blok F25-09J, Jl. Sungkai, Delta Silicon 3, Lippo Cikarang, Bekasi 17550, Indonesia.",


    // --- TRANSLASI MACHINEDATAINDO.HTML ---
    mdi_title: "DATA MESIN & KAPASITI KERJA DI INDONESIA",
    mdi_cnc_gantry: "CNC GANTRY PLASMA FLAME CUTTING",
    mdi_aluminium_cutting: "ALUMINIUM CUTTING AND MILLING",
    mdi_bandsaw_machine: "BANDSAW MACHINE",
    mdi_manual_cut: "MANUAL CUT",
    mdi_milling: "MILLING",
    mdi_cnc_machining: "CNC MACHINING",
    mdi_surface_grinding: "SURFACE GRINDING",
  },

  // BAHASA JEPANG
  ja: {
    nav_about: "PHH の強み",
    nav_products: "製品",
    nav_services: "サービス",
    nav_malaysia: "マレーシア",
    nav_indonesia: "インドネシア",
    nav_events_news: "イベントとニュース",
    nav_contact: "お問い合わせ ",
    home_about_title: "PHH の強み",
    home_about_desc: "金属製品に依存する業界が絶えず進化を続ける中、{years}年以上にわたり、品質と革新の象徴として輝きを放ち続けている企業があります。PHHグループは、最高品質の金属製品、サービス、そしてソリューションの提供という揺るぎないコミットメントにより、時の試練を乗り越えてきただけでなく、世界的にも認められる存在へと成長を遂げてきました。.",
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
    cert_download_btn: "すべてのPDFをダウンロード",
    cert_close_btn: "閉じる",

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

    // --- TRANSLASI MACHINEDATA.HTML ---
    md_title: "PHH（マレーシア）<br>の設備",
    md_manual_cut: "手動切断",
    md_cnc_gantry: "CNCプラズマ・ガス切断",
    md_laser_cutting: "レーザー切断",
    md_bandsaw_machine: "バンドソーマシン",
    md_aluminium_cutting: "アルミニウム切断およびミーリング",
    md_milling: "ミリング",
    md_rough_grinding: "荒研削",
    md_cnc_machining: "CNC加工",
    md_surface_grinding: "平面研削",
    md_logistic: "物流",
    md_others: "その他",
    md_th_no: "番号",
    md_th_names_of_machine: "機械名",
    md_th_types_of_machine: "機械の種類",
    md_th_model: "モデル",
    md_th_country_of_origin: "原産国",
    md_th_serial: "シリアル",
    md_th_max_table_load: "最大テーブル荷重 (KG)",
    md_th_work_area: "作業エリア",

    // --- TRANSLASI METALPRODUCT.HTML ---
    mp_ferrous_metals: "鉄金属",
    mp_ferrous_desc: "当社の金属部門は、幅広い仕様の鉄金属製品を提供する優れた能力を持っています。特に、汎用性の高いAISI C1050炭素鋼、高品質ステンレス鋼、多目的工具鋼、低炭素軟鋼の取り扱いに豊富な経験があります。これらの金属は強度と耐久性で知られ、高荷重や高温に耐える能力から、建設、製造、インフラ分野で広く使用されています。",
    mp_nonferrous_metals: "非鉄金属",
    mp_nonferrous_desc: "数十年にわたる経験は、オンデマンドの非鉄金属製品の提供にも及んでおり、アルミニウム、真鍮、青銅、銅、グラファイト、チタンなどの材料を取り扱っています。当社の非鉄製品は、耐食性、展延性、軽量性が高く評価されており、導電性や重量が重要な航空宇宙、電子機器、自動車製造などの産業において不可欠です。",
    mp_material_form: "材料形状",
    mp_plate: "プレート",
    mp_flat: "フラット",
    mp_shaft_rod: "シャフト / ロッド",
    mp_hexagon: "六角形",
    mp_channel: "チャンネル",
    mp_checker: "チェッカー",
    mp_square: "角材",
    mp_pipe_hollow: "パイプ / 中空",
    mp_angle: "アングル",
    mp_i_beam: "I形鋼",
    mp_aluminium: "アルミニウム",
    mp_tool_steel: "工具鋼",
    mp_machinery_steel: "機械鋼",
    mp_aircraft_fastening: "航空機締結システム",
    mp_stainless_steel: "ステンレス鋼",
    mp_carbon_steel: "炭素鋼",
    mp_titanium: "チタン",
    mp_aircraft_tool: "航空工具",
    footer_follow_us: "フォローする",

    // --- TRANSLASI AEROSPACE.HTML ---
    aero_since_2008: "2008年以来、当社の航空宇宙関連事業、航空および航空宇宙関連企業の成長を支えるワンストップの金属ソリューションを提供してきました。Novelis、Constellium、UACJの航空宇宙部品の独占販売代理店であり、A2024、A6061、A7050、A7075、チタンなど、幅広い材料を販売しています.",
    aero_facilities: "当社の施設はISO 9001:2015認証を取得しており、AS9100およびAS9120の承認も取得し ています。環境に配慮した企業として、持続可能性への取り組みの一環として、アルミニウム の循環型リサイクルに取り組んでいます.",
    aero_specialise_title: "当社はドッキング システムを専門としており、次のような機能を備えています。",
    aero_bushing: "ブッシング",
    aero_anodising: "アルマイト処理, ギャラリー, ラッチ,エッジプロテクター",
    aero_machining_parts: "航空機部品加工",
    aero_fastening: "航空機部品加工",
    aero_tooling: "ツーリング",
    aero_mro: "MRO(整備・修理・分解点検)",
    aero_docking: "ドッキングシステム",
    aero_materials: "航空機材料",
    aero_power_tool: "航空機用パワーツール",
    aero_aircraft_tool: "航空機工具",
    aero_machine: "航空宇宙機械",
    aero_core_title: "その他の航空宇宙関連分野における当社の中核能力には以下が含まれます。",
    aero_2d3d: "2D/3D モデリング設計",
    aero_cnc_gantry: "CNCレーザー・プラズマ切断サービス",
    aero_bandsaw: "自動バンドソー切断サービス",
    aero_shearing: "シャーリング・曲げ・ロール・製作サービス",
    aero_milling: "表面・側面フライス加工サービス",
    aero_grinding: "精密研削加工サービス",

    // --- TRANSLASI SMARTWAREHOUSE.HTML ---
    sw_smart_warehouse: "スマート倉庫",
    sw_vendor_managed: "ベンダー管理在庫",
    sw_incoming: "入荷",
    sw_warehouses: "倉庫",
    sw_phh: "• PHH",
    sw_qr_code: "• QRコードステッカー",
    sw_erp_in: "• ERP入力",
    sw_qc_out: "QC出荷",
    sw_dimensions: "• 寸法 TxWxL - 数量",
    sw_grade: "• 材料グレード",
    sw_mill_cert: "• ミル証明書",
    sw_delivery: "配送",
    sw_qc_in: "QC入荷",
    sw_outgoing: "出荷",
    sw_erp_out: "• ERP出力",
    sw_doc_packaging: "文書化と梱包",
    sw_print_do: "• 納品書印刷",
    sw_invoice: "• 請求書",

    // --- TRANSLASI ABOUT.HTML ---
    about_hero_title: "卓越の中で鍛えられた鋼の歴史",
    about_hero_desc: "PHHグループは、マレーシア市場において{years}年にわたり深く事業を展開してきた、金属材料供給および精密加工を一体化したワンストップ・メタルソリューション企業です。当社はAS9100およびISO9001の国際品質マネジメントシステム認証を取得しており、先進的な設備、厳格な品質管理体制、そして専門的な技術チームを基盤に、お客様へ安定かつ信頼性の高い高品質な金属製品および加工ソリューションを提供しています。主な取扱分野には、航空宇宙材料、半導体用アルミ材料、冷間工具鋼、プラスチック金型用鋼、熱間工具鋼、機械構造用鋼、ステンレス鋼、アルミニウム、銅、真鍮および青銅など多岐にわたる金属材料が含まれます。これらの製品は、航空産業、半導体、自動車、金型分野などに幅広く採用されており、インドネシアをはじめ東南アジア市場へも輸出されています。{years}年にわたる業界での蓄積と卓越した品質を背景に、PHHグループはお客様から信頼される長期的なパートナーであり、先進的な金属ソリューションプロバイダーとしての地位を確立しています。",
    about_stat_tonnes_label: "トンの金属生産",
    about_stat_years_label: "年の経験",
    about_stat_locations_label: "拠点",
    about_stat_employees_label: "従業員数",
    about_click_hint: "上の拠点をクリックすると写真が表示されます",
    about_loc_phh_malaysia: "PHH METAL 1 SDN. BHD. MALAYSIA",
    about_loc_phh_malaysia_addr: "Wisma PHH, Jalan PPU 3, Taman Perindustrian Puchong Utama, 47100 Selangor, Malaysia.",
    about_loc_protech_malaysia: "PRO TECH TOOL AND DIE SDN. BHD. MALAYSIA",
    about_loc_protech_malaysia_addr: "7, Jalan Mandolin 33/5, Seksyen 33, 40400 Shah Alam, Selangor, Malaysia.",
    about_loc_phh_indonesia: "PT PHH SPECIAL STEEL INDONESIA",
    about_loc_phh_indonesia_addr: "Blok F25-09J, Jl. Sungkai, Delta Silicon 3, Lippo Cikarang, Bekasi 17550, Indonesia.",


    // --- TRANSLASI MACHINEDATAINDO.HTML ---
    mdi_title: "インドネシアにおける機械データと作業能力",
    mdi_cnc_gantry: "CNCガントリープラズマフレーム切断",
    mdi_aluminium_cutting: "アルミニウムの切断およびミーリング",
    mdi_bandsaw_machine: "バンドソーマシン",
    mdi_manual_cut: "手動切断",
    mdi_milling: "ミーリング",
    mdi_cnc_machining: "CNC加工",
    mdi_surface_grinding: "表面研削",
  },

  // BAHASA CHINA (Mandarin)
  zh: {
    nav_about: "关于我们",
    nav_products: "产品",
    nav_services: "服务 ",
    nav_malaysia: "马来西亚",
    nav_indonesia: "印度尼西亚",
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
    cert_download_btn: "下载所有PDF",
    cert_close_btn: "关闭",

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

    // --- TRANSLASI MACHINEDATA.HTML ---
    md_title: "马来西亚机器数据与工作能力",
    md_manual_cut: "手动切割",
    md_cnc_gantry: "CNC龙门等离子火焰切割",
    md_laser_cutting: "激光切割",
    md_bandsaw_machine: "带锯机",
    md_aluminium_cutting: "铝材切割与铣削",
    md_milling: "铣削",
    md_rough_grinding: "粗磨",
    md_cnc_machining: "CNC加工",
    md_surface_grinding: "平面磨削",
    md_logistic: "物流",
    md_others: "其他",
    md_th_no: "编号",
    md_th_names_of_machine: "机器名称",
    md_th_types_of_machine: "机器类型",
    md_th_model: "型号",
    md_th_country_of_origin: "原产国",
    md_th_serial: "序列号",
    md_th_max_table_load: "最大台面负载 (KG)",
    md_th_work_area: "工作区域",

    // --- TRANSLASI METALPRODUCT.HTML ---
    mp_ferrous_metals: "黑色金属",
    mp_ferrous_desc: "我们的金属部门在提供各种规格的黑色金属产品方面拥有卓越的能力。我们特别擅长处理用途广泛的AISI C1050碳钢、优质不锈钢、多用途工具钢和低碳软钢。这些金属以其强度和耐久性而闻名，因其能够承受重载和高温，被广泛用于建筑、制造和基础设施领域。",
    mp_nonferrous_metals: "有色金属",
    mp_nonferrous_desc: "我们数十年的经验也涵盖了按需交付有色金属产品，包括铝、黄铜、青铜、铜、石墨和钛等材料。我们的有色金属产品因其耐腐蚀性、可塑性和轻质特性而备受推崇，在航空航天、电子和汽车制造等行业中不可或缺，因为这些行业中导电性和重量等因素至关重要。",
    mp_material_form: "材料形式",
    mp_plate: "板材",
    mp_flat: "扁材",
    mp_shaft_rod: "轴 / 棒",
    mp_hexagon: "六角形",
    mp_channel: "槽钢",
    mp_checker: "花纹板",
    mp_square: "方材",
    mp_pipe_hollow: "管材 / 空心",
    mp_angle: "角钢",
    mp_i_beam: "I型钢",
    mp_aluminium: "铝",
    mp_tool_steel: "工具钢",
    mp_machinery_steel: "机械钢",
    mp_aircraft_fastening: "飞机紧固系统",
    mp_stainless_steel: "不锈钢",
    mp_carbon_steel: "碳钢",
    mp_titanium: "钛",
    mp_aircraft_tool: "航空工具",
    footer_follow_us: "关注我们",

    // --- TRANSLASI AEROSPACE.HTML ---
    aero_since_2008: "自2008年以来，我们的航空航天部门一直为航空及航空航天相关企业的发展提供一站式金属解决方案。我们是Novelis、Constellium和UACJ航空航天组件的唯一分销商，生产包括A2024、A6061、A7050、A7075和钛在内的各种材料。",
    aero_facilities: "我们的设施已获得ISO 9001:2015认证，并获得了AS9100和AS9120批准。作为一家环保责任企业，我们实行闭环铝回收作为可持续发展的一部分。",
    aero_specialise_title: "我们专注于停靠系统，具备以下能力：",
    aero_bushing: "衣套",
    aero_anodising: "阳极氧化、廻廊、闩锁、边缘保护器",
    aero_machining_parts: "飞机零件加工",
    aero_fastening: "紧固系统",
    aero_tooling: "工装",
    aero_mro: "MRO",
    aero_docking: "停靠系统",
    aero_materials: "飞机材料",
    aero_power_tool: "飞机电动工具",
    aero_aircraft_tool: "飞机工具",
    aero_machine: "航空航天机械",
    aero_core_title: "我们在其他航空航天相关领域的核心能力还包括：",
    aero_2d3d: "2D/3D建模设计",
    aero_cnc_gantry: "CNC龙门等离子切割服务",
    aero_bandsaw: "自动带锯切割服务",
    aero_shearing: "剪切、折弯、卷制和制造服务",
    aero_milling: "表面和侧面铣削服务",
    aero_grinding: "精密和粗磨服务",

    // --- TRANSLASI SMARTWAREHOUSE.HTML ---
    sw_smart_warehouse: "智能仓库",
    sw_vendor_managed: "供应商管理库存",
    sw_incoming: "入库",
    sw_warehouses: "仓库",
    sw_phh: "• PHH",
    sw_qr_code: "• 二维码贴纸",
    sw_erp_in: "• ERP入库",
    sw_qc_out: "QC出库",
    sw_dimensions: "• 尺寸 TxWxL - 数量",
    sw_grade: "• 材料等级",
    sw_mill_cert: "• 工厂证书",
    sw_delivery: "交付",
    sw_qc_in: "QC入库",
    sw_outgoing: "出库",
    sw_erp_out: "• ERP出库",
    sw_doc_packaging: "文件与包装",
    sw_print_do: "• 打印送货单",
    sw_invoice: "• 发票",

    // --- TRANSLASI ABOUT.HTML ---
    about_hero_title: "卓越铸就的钢铁历史",
    about_hero_desc: "PHH集团成立于1975年，专门从事五金金属贸易。在过去的{years}年里，集团在黑色和有色金属解决方案方面的能力取得了长足的进步，使其现在能够为客户提供最全面的优质钢铁产品。除了享有盛誉的本地业务外，集团还通过与杰出合作伙伴的战略联盟和协作，扩展到全球市场，将其高品质、专门设计的金属解决方案品牌带给国际客户。",
    about_stat_tonnes_label: "吨金属产量",
    about_stat_years_label: "年经验",
    about_stat_locations_label: "地点",
    about_stat_employees_label: "员工人数",
    about_click_hint: "点击上方地点查看照片",
    about_loc_phh_malaysia: "PHH METAL 1 SDN. BHD. MALAYSIA",
    about_loc_phh_malaysia_addr: "Wisma PHH, Jalan PPU 3, Taman Perindustrian Puchong Utama, 47100 Selangor, Malaysia.",
    about_loc_protech_malaysia: "PRO TECH TOOL AND DIE SDN. BHD. MALAYSIA",
    about_loc_protech_malaysia_addr: "7, Jalan Mandolin 33/5, Seksyen 33, 40400 Shah Alam, Selangor, Malaysia.",
    about_loc_phh_indonesia: "PT PHH SPECIAL STEEL INDONESIA",
    about_loc_phh_indonesia_addr: "Blok F25-09J, Jl. Sungkai, Delta Silicon 3, Lippo Cikarang, Bekasi 17550, Indonesia.",


    // --- TRANSLASI MACHINEDATAINDO.HTML ---
    mdi_title: "印度尼西亚机器数据与工作能力",
    mdi_cnc_gantry: "CNC龙门等离子火焰切割",
    mdi_aluminium_cutting: "铝材切割与铣削",
    mdi_bandsaw_machine: "带锯机",
    mdi_manual_cut: "手动切割",
    mdi_milling: "铣削",
    mdi_cnc_machining: "CNC加工",
    mdi_surface_grinding: "表面磨削",
  }
};

// ==========================================
// AUTO TAHUN PENGALAMAN (otomatis tiap tahun)
// ==========================================
// PHH Group berdiri tahun 1975. Jumlah "tahun pengalaman" dihitung otomatis
// dari tahun sekarang, jadi TIDAK perlu diganti manual setiap tahun.
//   - Angka stat: tulis <... data-years>50</...>  -> diisi otomatis (mis. 51)
//   - Di dalam teks terjemahan: tulis {years}      -> diganti otomatis
const PHH_FOUNDED_YEAR = 1975;
function getPhhYears() {
  return new Date().getFullYear() - PHH_FOUNDED_YEAR;
}

// Fungsi untuk mengganti bahasa
function setLanguage(lang) {
  // 1. Simpan pilihan bahasa di dalam browser komputer pengguna
  localStorage.setItem('selectedLang', lang);

  // Jumlah tahun pengalaman saat ini (mis. 2026 - 1975 = 51)
  const years = getPhhYears();

  // 2. Ubah UI tulisan di HTML (Element yang punya data-i18n)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');

    // Cek apakah translasi ada untuk bahasa & key ini
    if (translations[lang] && translations[lang][key]) {
      // Gunakan innerHTML; token {years} diganti otomatis dengan jumlah tahun pengalaman
      el.innerHTML = translations[lang][key].replace(/\{years\}/g, years);
    }
  });

  // 2b. Isi otomatis semua angka tahun pengalaman (elemen ber-atribut data-years)
  document.querySelectorAll('[data-years]').forEach(el => {
    el.textContent = years;
  });

  // 3. Update Text Dropdown yg menandakan bahasa sekarang (Desktop & Mobile)
  const currentLangDisplay = document.getElementById('current-lang-display');
  const mobileCurrLangDisplay = document.getElementById('mobile-current-lang-display');

  if (currentLangDisplay) currentLangDisplay.textContent = lang.toUpperCase();
  if (mobileCurrLangDisplay) mobileCurrLangDisplay.textContent = lang.toUpperCase();
}

// ==========================================
// GAMBAR ANNIVERSARY OTOMATIS PER TAHUN
// ==========================================
// Elemen <img data-anniv-img> diisi gambar sesuai tahun berjalan:
// 2026 -> anniv-51.jpg, 2027 -> anniv-52.jpg, dst.
// Gambar tersedia untuk tahun ke-ANNIV_MIN..ANNIV_MAX (tambah file baru + naikkan ANNIV_MAX untuk tahun berikutnya).
const ANNIV_MIN = 51;
const ANNIV_MAX = 56;
function updateAnnivImages() {
  const n = Math.min(ANNIV_MAX, Math.max(ANNIV_MIN, getPhhYears()));
  document.querySelectorAll('[data-anniv-img]').forEach(el => {
    el.src = '/assets/img/anniv-' + n + '.jpg';
  });
}

// Saat halaman direload, cek bahasa terakhir yang dipilih user. Jika tidak ada, pakai 'en'
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('selectedLang') || 'en';
  setLanguage(savedLang);
  updateAnnivImages();
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
    const lang = localStorage.getItem('selectedLang') || 'en';
    const downloadText = (translations[lang] && translations[lang]['cert_download_btn']) || 'Download All PDF';

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
    button.textContent = downloadText;
    button.setAttribute('data-i18n', 'cert_download_btn');
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


