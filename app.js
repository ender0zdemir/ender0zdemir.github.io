(() => {
  "use strict";

  const PROJECTS = [
    {
      id: "olivia-play-addon",
      categories: ["wow"],
      image: "img/olivia-play-addon.jpg",
      badge: { tr: "CurseForge · v4.2", en: "CurseForge · v4.2" },
      catLabel: { tr: "WoW Forever Eklentisi", en: "WoW Forever Addon" },
      title: {
        tr: "Olivia Play — Standalone Quest & Guiding Addon",
        en: "Olivia Play — Standalone Quest & Guiding Addon"
      },
      summary: {
        tr: "World of Warcraft Forever için 63 dahili 1–60 seviye rotası, Harita (M) senkronizasyonu, canlı EN/TR dil değişimi ve akıllı yön oku sunan %100 bağımsız görev eklentisi.",
        en: "100% standalone WoW Forever quest & leveling addon featuring 63 built-in 1–60 routes, World Map (M) highlight sync, live EN/TR toggle, and smart navigation arrow."
      },
      highlights: {
        tr: [
          "Özel Camelot_Engine.lua çekirdek motoru ve 63 adet Alliance/Horde 1–60 Softcore rotası (GPLv3).",
          "Google tarzı canlı görev arama (Quest ID, Cozy Sleeping Bag +3% XP, zindanlar ve 9 sınıf rehberi).",
          "Reload gerektirmeden anlık TR/EN arayüz geçişi ve 210px genişliğe kadar kalıcı %70 şeffaf cam tasarım."
        ],
        en: [
          "Custom Camelot_Engine.lua core with 63 built-in 1–60 Alliance & Horde Softcore routes (GPLv3).",
          "Google-style live autocomplete quest search including +3% XP guides, dungeons, and all 9 class quests.",
          "Zero-reload live EN/TR toggle and 70% translucent glass UI persisting down to 210px width."
        ]
      },
      tech: ["Lua", "WoW API 16001", "QuestieDB", "GPLv3"],
      links: [
        { label: { tr: "CurseForge'da İndir", en: "Download on CurseForge" }, url: "https://www.curseforge.com/wow/addons/olivia-play" }
      ]
    },
    {
      id: "voice-cast",
      categories: ["ai", "wow"],
      image: "img/patreon-voice-cast.jpg",
      badge: { tr: "Patreon · Flagship", en: "Patreon · Flagship" },
      catLabel: { tr: "Sesli Oyun Asistanı", en: "Voice Gaming Utility" },
      title: {
        tr: "Voice Cast — Gamepad Sesli Asistanı",
        en: "Voice Cast — Gamepad Voice Assistant"
      },
      summary: {
        tr: "Kontrolcüyü bırakmadan konuşarak sohbet diktesi yapmayı, karmaşık oyun içi makro/komutları tetiklemeyi ve gerçek zamanlı ses çevirisi gerçekleştirmeyi sağlayan masaüstü aracı.",
        en: "Hands-free gamepad voice utility enabling live chat dictation, complex UI macro triggering, emotes, and real-time speech translation directly while playing."
      },
      highlights: {
        tr: [
          "World of Warcraft başta olmak üzere kontrolcü odaklı PC oyunları için sıfır-gecikmeli ses komut motoru.",
          "Gerçek zamanlı konuşma tanıma ve çok dilli anlık sohbet çevirisi desteği.",
          "Patreon destekçileri için hazır derlenmiş .exe kurulumu ve sürekli sürüm güncellemeleri."
        ],
        en: [
          "Low-latency voice command and chat dictation engine built for controller-first PC gaming.",
          "Real-time multilingual speech translation alongside custom emote & UI command macros.",
          "Instant compiled Windows .exe releases and supporter packs distributed via Patreon."
        ]
      },
      tech: ["Python", "Speech API", "Translation", "Windows EXE"],
      links: [
        { label: { tr: "Patreon Sayfası", en: "View on Patreon" }, url: "https://www.patreon.com/cw/oliviaplay" }
      ]
    },
    {
      id: "math-dragon",
      categories: ["games"],
      image: "img/math-dragon.jpg",
      badge: { tr: "5.0 ★ · Teacher Approved", en: "5.0 ★ · Teacher Approved" },
      catLabel: { tr: "Eğitsel Mobil Oyun", en: "Educational Mobile Game" },
      title: {
        tr: "Math Dragon: Çarpım Tablosu",
        en: "Math Dragon: Multiplication"
      },
      summary: {
        tr: "İlkokul çocuklarına çarpım tablosu ve ritmik saymaları yumurtadan çıkan element ejderhalarını büyüterek öğreten Google Play Öğretmen Onaylı (Teacher Approved) macera oyunu.",
        en: "Google Play Teacher Approved adventure teaching multiplication tables and skip counting as kids hatch and raise elemental dragons."
      },
      highlights: {
        tr: [
          "Google Play Store'da 5.0 yıldız puanı ve resmi 'Öğretmen Onaylı' (Teacher Approved) rozeti.",
          "Hava, Ateş, Su, Toprak ve Kozmik ejderha evrimleri, özel ses efektleri ve kombo ödül sistemi.",
          "Pedagojik sıralama ile adım adım ustalık kazandıran güvenli çocuk oyun deneyimi."
        ],
        en: [
          "Rated 5.0 stars on Google Play with the official 'Teacher Approved' quality badge.",
          "Hatch and evolve Air, Fire, Water, Earth, and Cosmic dragons through mastery streaks.",
          "Pedagogically paced multiplication stages with rich custom audio feedback."
        ]
      },
      tech: ["Android", "HTML5 / WebView", "Audio FX", "Google Play"],
      links: [
        { label: { tr: "Google Play'de Aç", en: "Open on Google Play" }, url: "https://play.google.com/store/apps/details?id=com.oliviaplay.mathdragon&hl=tr" }
      ]
    },
    {
      id: "balon-avcisi",
      categories: ["games"],
      image: "img/balon-avcisi.jpg",
      badge: { tr: "PEGI 3 · 100+ İndirme", en: "PEGI 3 · 100+ Downloads" },
      catLabel: { tr: "Eğitsel Tarama Oyunu", en: "Educational Screening Game" },
      title: {
        tr: "Balon Avcısı: Disleksi Testi",
        en: "Balon Avcısı: Dyslexia & Focus Game"
      },
      summary: {
        tr: "Çocuklarda disleksi, harf karıştırma (b/d/p/q) ve dikkat eksikliği eğilimlerini oyun içi tepki süresi ve görsel-işitsel doğruluk verileriyle analiz eden eğitsel uygulama.",
        en: "Playful Android screening experience analyzing letter confusion (b/d/p/q), reading difficulty, and attention patterns via interactive balloon-popping mechanics."
      },
      highlights: {
        tr: [
          "Görsel olarak benzer harfleri ayırt etme, hızlı odaklanma ve işitsel eşleştirme görevleri.",
          "Haptik (titreşim) geri bildirim ve yaşa uygun güvenli PEGI 3 oyun akışı.",
          "Google Play üzerinde 100+ indirme ile ebeveynler ve eğitimciler tarafından aktif kullanım."
        ],
        en: [
          "Targeted visual discrimination tasks for frequently reversed glyphs (b/d/p/q).",
          "Tactile haptic feedback and gentle, kid-safe PEGI 3 paced gameplay.",
          "Live on Google Play with 100+ downloads supporting parents and educators."
        ]
      },
      tech: ["Android", "Haptic API", "Pedagoji", "Google Play"],
      links: [
        { label: { tr: "Google Play'de Aç", en: "Open on Google Play" }, url: "https://play.google.com/store/apps/details?id=com.oliviaplay.balonavcisi&hl=tr" }
      ]
    },
    {
      id: "gumus-murekkep",
      categories: ["games"],
      image: "img/gumus-murekkep.jpg",
      badge: { tr: "Maarif Serisi", en: "Maarif Series" },
      catLabel: { tr: "Okuma Yazma Uygulaması", en: "Early Literacy App" },
      title: {
        tr: "Gümüş Mürekkep: Okuma Yazma",
        en: "Silver Ink: Literacy & Story Adventure"
      },
      summary: {
        tr: "Maarif serisi ses grubu yaklaşımını '101 Katın Efsanesi' adlı özgün fantastik hikâye evreniyle birleştiren etkileşimli ilk okuma yazma uygulaması.",
        en: "Pairs Turkey's Maarif phonetic literacy progression with the original illustrated 'Legend of the 101 Floors' storybook universe."
      },
      highlights: {
        tr: [
          "Ses temelli cümle ve hece kurma etkinlikleriyle aşamalı okuma-yazma öğretimi.",
          "Özgün resimli hikâye kitabı ('101 Katın Efsanesi') ile oyunlaştırılmış görev bağlantısı.",
          "Olivia Play çatısı altında Google Play Store'da yayınlanan eksiksiz Android sürümü."
        ],
        en: [
          "Structured phonetic syllable-building exercises aligned with early literacy curricula.",
          "Story-driven progression tied to the custom 'Legend of the 101 Floors' narrative.",
          "Published on Google Play under Olivia Play's child-safe educational suite."
        ]
      },
      tech: ["Android", "Türkçe Ses Bilgisi", "İnteraktif Hikâye", "Google Play"],
      links: [
        { label: { tr: "Google Play'de Aç", en: "Open on Google Play" }, url: "https://play.google.com/store/apps/details?id=com.oliviaplay.gumusmurekkep&hl=tr" }
      ]
    },
    {
      id: "forever-journey",
      categories: ["wow", "ai", "music"],
      image: "img/forever-journey.jpg",
      badge: { tr: "OBS + YouTube Auto", en: "OBS + YouTube Auto" },
      catLabel: { tr: "Otomasyon & Yayın", en: "Automation & Pipeline" },
      title: {
        tr: "Forever Journey & YouTube Yayın Hattı",
        en: "Forever Journey & YouTube Upload Pipeline"
      },
      summary: {
        tr: "Oyun içi kritik anları (level-up, boss, nadir ganimet) OBS WebSocket ile yakalayıp sesli anlatım, altyazı, Cinzel kapak ve UK/ABD prime-time takvimiyle YouTube'a yükleyen sistem.",
        en: "Captures key in-game moments via FJLClip & OBS WebSocket, then renders narrated Shorts/Longforms with Cinzel covers and schedules uploads for UK/US prime time."
      },
      highlights: {
        tr: [
          "ForeverJourneyLog ve FJLClip Lua eklentileriyle otomatik klip işaretleme ve JSON metadata kaydı.",
          "Gemini / yerel Qwen + Edge-TTS + FFmpeg ile 1080×1920 dikey Shorts ve uzun bölüm montajı.",
          "Playwright CDP üzerinden YouTube Studio'ya TRT/GMT/EST saat dönüşümlü otomatik planlama."
        ],
        en: [
          "Custom ForeverJourneyLog & FJLClip Lua addons tagging milestones and exporting rich JSON metadata.",
          "Automated narration, captions, and vertical 1080×1920 rendering via Gemini/Qwen, Edge-TTS, and FFmpeg.",
          "Playwright CDP YouTube Studio scheduler converting TRT to UK GMT and US EST prime-time slots."
        ]
      },
      tech: ["Python", "OBS WebSocket", "Playwright", "FFmpeg"],
      links: [
        { label: { tr: "@OliviaPlayGo YouTube", en: "@OliviaPlayGo YouTube" }, url: "https://www.youtube.com/@OliviaPlayGo" }
      ]
    },
    {
      id: "warcraft-lofi",
      categories: ["music", "wow"],
      image: "img/warcraft-lofi.jpg",
      badge: { tr: "YouTube · Barrens Series", en: "YouTube · Barrens Series" },
      catLabel: { tr: "Müzik & İçerik Üretimi", en: "Music & Content Studio" },
      title: {
        tr: "Warcraft Lo-Fi & @OliviaPlayGo Evreni",
        en: "Warcraft Lo-Fi & @OliviaPlayGo Channel"
      },
      summary: {
        tr: "Azeroth kamp ateşi atmosferini chill gitar ve Lo-Fi ritimlerle buluşturan 'Barrens Night Sessions' müzik videoları ile WoW Forever serüven içerikleri.",
        en: "Pixel-art Azeroth campfire sessions blending chill guitar and Lo-Fi beats ('Barrens Night Sessions') alongside WoW Forever adventures on YouTube."
      },
      highlights: {
        tr: [
          "Özgün piksel sanat & parallax sahne kapaklarıyla hazırlanan uzun soluklu Lo-Fi müzik derlemeleri.",
          "Düzenli Shorts ve Longform video akışıyla büyüyen uluslararası oyun topluluğu.",
          "Ses tasarımı, görsel kapak üretimi ve kanal büyüme otomasyonunun tek merkezde birleşimi."
        ],
        en: [
          "Original campfire pixel-art visuals paired with multi-track Chill Guitar & Lo-Fi soundscapes.",
          "Consistent international YouTube Shorts and Longform series around World of Warcraft Forever.",
          "End-to-end audio mastering, cover design, and multi-timezone publishing."
        ]
      },
      tech: ["Audio Production", "Lo-Fi / Guitar", "YouTube", "Pixel Art"],
      links: [
        { label: { tr: "@OliviaPlayGo'yu İzle", en: "Watch @OliviaPlayGo" }, url: "https://www.youtube.com/@OliviaPlayGo" }
      ]
    }
  ];

  const I18N = {
    tr: {
      docTitle: "Ender Özdemir — Yazılım Geliştirici, Uzman Öğretmen & Olivia Play",
      skip: "İçeriğe atla",
      navProjects: "Projeler",
      navMusicAward: "Müzik & Ödül",
      navAbout: "Stüdyo",
      navLinks: "Platformlar",
      heroEyebrow: "Uzman Öğretmen · Yazılım Geliştirici · Chosen Undead",
      heroLead: "Eğitsel mobil oyunlardan yerel yapay zekâ sistemlerine, World of Warcraft eklentilerinden Türkiye'nin ilk AI müzik sanatçı projelerine kadar üretimin her katmanında çalışan bağımsız geliştirici ve <strong>Olivia Play</strong> kurucusu.",
      heroCtaProjects: "Tüm Çalışmaları Gör",
      heroCtaPlay: "Google Play Mağazası",
      heroCtaCurse: "CurseForge: Olivia Play",
      metric1Label: "Teacher Approved",
      metric1Value: "5.0 ★ Google Play",
      metric2Label: "Eğitim-İş 20. Yıl",
      metric2Value: "Mansiyon Ödülü",
      metric3Label: "2023 AI Müzik",
      metric3Value: "İlk AI Albümleri",
      metric4Label: "Olivia Play",
      metric4Value: "Oyun · AI · Addon",
      portraitBadge: "@Ender0zdemir · Aktif Üretimde",
      projectsKicker: "YAYINLANMIŞ ÜRÜNLER & AR-GE",
      projectsTitle: "Seçili Projeler & Çalışmalar",
      projectsSub: "Oyun, yapay zekâ araçları, World of Warcraft ekosistemi ve müzik/video projelerini kategoriye göre filtreleyin veya detay kartını açın.",
      filterAll: "Tümü (7)",
      filterGames: "Oyun & Eğitim",
      filterWow: "WoW & Eklentiler",
      filterAi: "Yapay Zekâ & Otomasyon",
      filterMusic: "Müzik & Video",
      searchLabel: "Projelerde ara",
      searchPlaceholder: "Proje, teknoloji veya platform ara...",
      musicKicker: "ÖDÜL & ÖNCÜ AI MÜZİK PROJELERİ",
      musicTitle: "Eğitim-İş Ödülü & Sanal Sanatçı Diskografisi",
      musicSub: "2023'ten itibaren yapay zekâ destekli Türkiye'nin ilk sanal sanatçı albümlerini yayımlarken, 2025'te Eğitim-İş 20. Yıl Marş Yarışması'nda Mansiyon Ödülü'ne layık görüldüm.",
      awardRibbon: "Ekim 2025 · Mansiyon Ödülü",
      awardHeading: "Eğitim-İş 20. Yıl Marş Yarışması — Mansiyon Ödülü",
      awardDesc: "Eğitim-İş sendikasının kuruluşunun 20. yılı kapsamında Eylül 2025'te düzenlediği ve Ekim 2025'te sonuçlanan ulusal marş yarışmasında eserimle <strong>Mansiyon Ödülü</strong>'nü kazandım.",
      awardBtnVideo: "Resmî Ödül Videosunu İzle",
      awardBtnArticle: "Eğitim-İş Resmî Duyurusu",
      melisDesc: "Türkiye'nin ilk AI sanal sanatçı projelerinden biri. 10 parçalık <em>Yeni Kurallarım</em> albümü (Öpücük, Yeni Kurallarım, Houdini, Başka Bir Hayat, Samanyolu'ndan Kaçış, Özlem) ve dijital teklilerle milyonlara ulaşan ses kimliği.",
      evrenDesc: "Sözleri Orhan Veli Kanık'a, müzik ve düzenlemesi Ender Özdemir'e ait <em>Son Türkü</em> ve <em>Son Türkü (Radio Edit)</em> teklileriyle edebiyatı modern rock ve yapay zekâ vokal üretimiyle buluşturan sanal sanatçı.",
      listenApple: "Apple Music'te Dinle →",
      aboutKicker: "OLIVIA PLAY · RESMİ MARKA KİMLİĞİ",
      aboutTitle: "Pedagoji, Yapay Zekâ ve Oyun Teknolojilerinin Kesişimi",
      aboutP1: "Uzman öğretmenlikten gelen öğrenme tasarımı birikimimi; Android, Lua, Python ve yapay zekâ araçlarıyla birleştirerek hem çocukların güvenle öğreneceği eğitsel oyunlar hem de oyuncular için pratik çözümler geliştiriyorum.",
      aboutP2: "Yayınlanmış mobil oyunlar ve eklentilerin yanında, YouTube (<a href=\"https://www.youtube.com/@OliviaPlayGo\" target=\"_blank\" rel=\"noopener noreferrer\">@OliviaPlayGo</a>) yayın otomasyonu ve açık kaynaklı araçlarımı <a href=\"https://github.com/ender0zdemir\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub (@ender0zdemir)</a> üzerinden sürdürüyorum.",
      linksKicker: "TÜM DİJİTAL ADRESLER",
      linksTitle: "Platformlar & Bağlantılar",
      platGithub: "Açık kaynak repolar, portföy kaynak kodu ve geliştirme çalışmaları.",
      platPlay: "Math Dragon (Teacher Approved), Balon Avcısı ve Gümüş Mürekkep.",
      platCurse: "Olivia Play v4.2 WoW Forever görev & rota eklentisi.",
      platPatreon: "Voice Cast gamepad sesli asistanı ve destekçi paketleri.",
      platYoutube: "WoW Forever yolculuğu, Shorts ve Warcraft Lo-Fi müzik yayınları.",
      platX: "Günlük geliştirme notları, duyurular ve canlı güncellemeler.",
      footerNote: "GitHub Pages üzerinde barındırılmaktadır · ender0zdemir.github.io",
      detailsBtn: "Detayları İncele",
      countTpl: (n, total) => `${n} / ${total} proje gösteriliyor`,
      emptyMsg: "Arama kriterinize uygun proje bulunamadı. Farklı bir anahtar kelime veya kategori deneyin.",
      themeToggleLabel: "Temayı değiştir",
      closeLabel: "Pencereyi kapat"
    },
    en: {
      docTitle: "Ender Özdemir — Software Developer, Senior Teacher & Olivia Play",
      skip: "Skip to content",
      navProjects: "Projects",
      navMusicAward: "Music & Award",
      navAbout: "Studio",
      navLinks: "Platforms",
      heroEyebrow: "Senior Teacher · Software Developer · Chosen Undead",
      heroLead: "Independent developer and founder of <strong>Olivia Play</strong> — building across educational mobile games, voice & automation utilities, World of Warcraft addons, and Turkey's pioneering AI music artists.",
      heroCtaProjects: "Explore All Works",
      heroCtaPlay: "Google Play Store",
      heroCtaCurse: "CurseForge: Olivia Play",
      metric1Label: "Teacher Approved",
      metric1Value: "5.0 ★ Google Play",
      metric2Label: "Eğitim-İş 20th Year",
      metric2Value: "Honorable Mention",
      metric3Label: "2023 AI Music",
      metric3Value: "Pioneer AI Albums",
      metric4Label: "Olivia Play",
      metric4Value: "Games · AI · Addons",
      portraitBadge: "@Ender0zdemir · Actively Shipping",
      projectsKicker: "SHIPPED PRODUCTS & R&D",
      projectsTitle: "Selected Projects & Works",
      projectsSub: "Filter across games, AI utilities, World of Warcraft tooling, and music/video projects, or open any card for full technical details.",
      filterAll: "All (7)",
      filterGames: "Games & EdTech",
      filterWow: "WoW & Addons",
      filterAi: "AI & Automation",
      filterMusic: "Music & Video",
      searchLabel: "Search projects",
      searchPlaceholder: "Search projects, stack, or platform...",
      musicKicker: "NATIONAL AWARD & AI MUSIC PIONEERING",
      musicTitle: "Eğitim-İş Award & Virtual Artist Discography",
      musicSub: "While pioneering Turkey's first AI virtual music artists since 2023, I also received the Honorable Mention Award in Eğitim-İş Union's 20th Anniversary Anthem Competition in October 2025.",
      awardRibbon: "October 2025 · Honorable Mention",
      awardHeading: "Eğitim-İş 20th Anniversary Anthem — Honorable Mention",
      awardDesc: "Awarded the <strong>Honorable Mention (Mansiyon Ödülü)</strong> in the national anthem competition organized by Eğitim-İş in September–October 2025 for the union's 20th anniversary.",
      awardBtnVideo: "Watch Official Award Video",
      awardBtnArticle: "Eğitim-İş Official Announcement",
      melisDesc: "One of Turkey's first AI virtual artists. Released the 10-track pop album <em>Yeni Kurallarım</em> (Öpücük, Yeni Kurallarım, Houdini, Başka Bir Hayat, Samanyolu'ndan Kaçış, Özlem) across global streaming platforms.",
      evrenDesc: "Virtual rock/alternative artist uniting Orhan Veli Kanık's classic poetry with original music and arrangement by Ender Özdemir on <em>Son Türkü</em> and <em>Son Türkü (Radio Edit)</em>.",
      listenApple: "Listen on Apple Music →",
      aboutKicker: "OLIVIA PLAY · OFFICIAL STUDIO MARK",
      aboutTitle: "Where Pedagogy Meets AI & Game Craft",
      aboutP1: "Combining my background as a Senior Teacher with Android, Lua, Python, and AI utilities, I build safe educational games for children alongside pragmatic solutions for players and creators.",
      aboutP2: "Alongside published mobile games and WoW addons, I actively build YouTube (<a href=\"https://www.youtube.com/@OliviaPlayGo\" target=\"_blank\" rel=\"noopener noreferrer\">@OliviaPlayGo</a>) content pipelines and open-source tools on <a href=\"https://github.com/ender0zdemir\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub (@ender0zdemir)</a>.",
      linksKicker: "ACROSS THE WEB",
      linksTitle: "Platforms & Links",
      platGithub: "Open-source repositories, portfolio source, and active dev tools.",
      platPlay: "Math Dragon (Teacher Approved), Balon Avcısı & Silver Ink.",
      platCurse: "Olivia Play v4.2 WoW Forever quest & route addon.",
      platPatreon: "Voice Cast gamepad voice assistant & supporter packs.",
      platYoutube: "WoW Forever journeys, Shorts & Warcraft Lo-Fi music streams.",
      platX: "Daily devlogs, releases, and live project updates.",
      footerNote: "Hosted on GitHub Pages · ender0zdemir.github.io",
      detailsBtn: "View Details",
      countTpl: (n, total) => `Showing ${n} of ${total} projects`,
      emptyMsg: "No projects match your current filter. Try another keyword or category.",
      themeToggleLabel: "Toggle color theme",
      closeLabel: "Close dialog"
    }
  };

  let currentLang = "tr";
  let currentFilter = "all";
  let currentQuery = "";
  let lastTriggerEl = null;

  const projectGrid = document.getElementById("project-grid");
  const statusEl = document.getElementById("results-status");
  const searchInput = document.getElementById("project-search");
  const searchForm = document.getElementById("project-search-form");
  const filterButtons = Array.from(document.querySelectorAll("#category-filters .filter-btn"));
  const langButtons = Array.from(document.querySelectorAll(".lang-switch .pill-btn"));
  const themeToggle = document.getElementById("theme-toggle");

  const dialog = document.getElementById("project-dialog");
  const dialogBadge = document.getElementById("dialog-badge");
  const dialogImage = document.getElementById("dialog-image");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogSummary = document.getElementById("dialog-summary");
  const dialogHighlights = document.getElementById("dialog-highlights");
  const dialogTech = document.getElementById("dialog-tech");
  const dialogLinks = document.getElementById("dialog-links");
  const dialogClose = dialog.querySelector(".dialog-close");

  function normalizeText(value) {
    return value
      .toLocaleLowerCase("tr-TR")
      .replace(/ı/g, "i")
      .replace(/İ/g, "i");
  }

  function applyTranslations() {
    const dict = I18N[currentLang];
    document.documentElement.lang = currentLang;
    document.title = dict.docTitle;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!(key in dict)) return;
      if (key === "heroLead" || key === "awardDesc" || key === "melisDesc" || key === "evrenDesc" || key === "aboutP2") {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key in dict) el.placeholder = dict[key];
    });

    themeToggle.setAttribute("aria-label", dict.themeToggleLabel);
    themeToggle.setAttribute("title", dict.themeToggleLabel);
    dialogClose.setAttribute("aria-label", dict.closeLabel);

    langButtons.forEach((btn) => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function renderProjects() {
    const dict = I18N[currentLang];
    const query = normalizeText(currentQuery.trim());

    const visible = PROJECTS.filter((proj) => {
      const matchesCat = currentFilter === "all" || proj.categories.includes(currentFilter);
      if (!matchesCat) return false;
      if (!query) return true;
      const haystack = normalizeText(
        [
          proj.title[currentLang],
          proj.summary[currentLang],
          proj.catLabel[currentLang],
          proj.badge[currentLang],
          ...proj.tech
        ].join(" ")
      );
      return haystack.includes(query);
    });

    statusEl.textContent = dict.countTpl(visible.length, PROJECTS.length);
    projectGrid.replaceChildren();

    if (visible.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = dict.emptyMsg;
      projectGrid.appendChild(empty);
      return;
    }

    const fragment = document.createDocumentFragment();
    visible.forEach((proj, idx) => {
      const card = document.createElement("article");
      const isFeatured = idx === 0 && currentFilter === "all" && !query && visible.length === PROJECTS.length;
      card.className = isFeatured ? "project-card project-card--featured" : "project-card";

      const media = document.createElement("div");
      media.className = "card-media";
      const img = document.createElement("img");
      img.src = proj.image;
      img.alt = proj.title[currentLang];
      img.width = 960;
      img.height = 540;
      img.loading = "lazy";
      img.decoding = "async";
      media.appendChild(img);

      const head = document.createElement("div");
      head.className = "card-head";
      const meta = document.createElement("div");
      meta.className = "card-meta";
      const cat = document.createElement("p");
      cat.className = "card-category";
      cat.textContent = proj.catLabel[currentLang];
      const badge = document.createElement("span");
      badge.className = "card-badge";
      badge.textContent = proj.badge[currentLang];
      meta.append(cat, badge);
      const h3 = document.createElement("h3");
      h3.textContent = proj.title[currentLang];
      head.append(meta, h3);

      const summary = document.createElement("p");
      summary.className = "card-summary";
      summary.textContent = proj.summary[currentLang];

      const foot = document.createElement("div");
      foot.className = "card-foot";

      const techWrap = document.createElement("div");
      techWrap.className = "card-tech";
      proj.tech.forEach((t) => {
        const pill = document.createElement("span");
        pill.className = "tech-pill";
        pill.textContent = t;
        techWrap.appendChild(pill);
      });

      const actions = document.createElement("div");
      actions.className = "card-actions";
      const detailBtn = document.createElement("button");
      detailBtn.type = "button";
      detailBtn.className = "card-btn";
      detailBtn.textContent = dict.detailsBtn;
      detailBtn.addEventListener("click", () => openProjectDialog(proj, detailBtn));
      actions.appendChild(detailBtn);

      if (proj.links.length > 0) {
        const primary = proj.links[0];
        const ext = document.createElement("a");
        ext.className = "card-ext-link";
        ext.href = primary.url;
        ext.target = "_blank";
        ext.rel = "noopener noreferrer";
        ext.textContent = `${primary.label[currentLang]} ↗`;
        actions.appendChild(ext);
      }

      foot.append(techWrap, actions);
      card.append(media, head, summary, foot);
      fragment.appendChild(card);
    });

    projectGrid.appendChild(fragment);
  }

  function openProjectDialog(proj, triggerEl) {
    lastTriggerEl = triggerEl || document.activeElement;
    dialogBadge.textContent = proj.badge[currentLang];
    dialogImage.src = proj.image;
    dialogImage.alt = proj.title[currentLang];
    dialogTitle.textContent = proj.title[currentLang];
    dialogSummary.textContent = proj.summary[currentLang];

    dialogHighlights.replaceChildren();
    proj.highlights[currentLang].forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      dialogHighlights.appendChild(li);
    });

    dialogTech.replaceChildren();
    proj.tech.forEach((t) => {
      const pill = document.createElement("span");
      pill.className = "tech-pill";
      pill.textContent = t;
      dialogTech.appendChild(pill);
    });

    dialogLinks.replaceChildren();
    proj.links.forEach((lnk) => {
      const a = document.createElement("a");
      a.className = "btn btn-primary";
      a.href = lnk.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = `${lnk.label[currentLang]} ↗`;
      dialogLinks.appendChild(a);
    });

    dialog.showModal();
  }

  dialog.addEventListener("close", () => {
    if (lastTriggerEl && typeof lastTriggerEl.focus === "function") {
      lastTriggerEl.focus();
    }
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter || "all";
      filterButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      renderProjects();
    });
  });

  searchForm.addEventListener("submit", (e) => e.preventDefault());
  searchInput.addEventListener("input", () => {
    currentQuery = searchInput.value;
    renderProjects();
  });

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang !== "tr" && lang !== "en") return;
      currentLang = lang;
      try {
        localStorage.setItem("eo-lang", lang);
      } catch (_) {}
      applyTranslations();
      renderProjects();
    });
  });

  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  function getEffectiveTheme() {
    const manual = document.documentElement.dataset.theme;
    if (manual === "dark" || manual === "light") return manual;
    return colorSchemeQuery.matches ? "dark" : "light";
  }

  themeToggle.addEventListener("click", () => {
    const next = getEffectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("eo-theme", next);
    } catch (_) {}
  });

  colorSchemeQuery.addEventListener("change", () => {
    if (!document.documentElement.dataset.theme) {
      // Automatically tracks OS preference when no manual theme is set
    }
  });

  try {
    const savedLang = localStorage.getItem("eo-lang");
    if (savedLang === "tr" || savedLang === "en") {
      currentLang = savedLang;
    }
  } catch (_) {}

  applyTranslations();
  renderProjects();
})();
