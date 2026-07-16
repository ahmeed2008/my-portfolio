/* ============================================
   LUMINOUS MONO — Portfolio Script
   Animations & Interactivity
   ============================================ */

const translations = {
  en: {
    langToggle: "AR",
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",
    heroLabel: "Mobile Application Developer",
    heroName: "Ahmed<br>Sweid",
    heroTagline: 'Flutter &amp; Android Developer with <strong>4+ years</strong> of experience building secure, scalable mobile applications across IoT, Healthcare, Fintech &amp; E-commerce.',
    statYears: "Years Exp",
    statProjects: "Projects",
    statMentored: "Mentored",
    heroBtnProjects: "View Projects",
    heroBtnContact: "Get in Touch",
    scrollText: "Scroll",
    aboutLabel: "About",
    aboutTitle: "Professional Profile",
    about1: 'With <strong>4+ years</strong> of experience in Flutter and Android development, I have a strong command of software engineering and development processes. I\'ve developed and maintained complex mobile applications for startups, multinational clients, and government organizations across IoT, Healthcare, E-commerce, and Gaming sectors.',
    about2: 'I specialize in <strong>end-to-end architecture</strong>, leading teams to build secure, scalable mobile solutions. From IoT sensor communication via BLE/USB to complex data visualisation and cloud integration — I deliver production-ready applications with clean architecture and robust testing.',
    about3: 'Looking for a <strong>Flutter / Mobile Lead</strong> role where I can leverage my expertise in architecture design, team mentoring, and cross-platform development to build impactful products.',
    expLabel: "Experience",
    expTitle: "Career Journey",
    exp1Title: "Mobile Lead",
    exp1Company: "Blueray Automation",
    exp1Date: "Mar 2023 — Present",
    exp1Details: '<li>Led end-to-end architecture of <strong>4 mobile applications</strong> for Newgas (Ghana)</li><li>Customer App, Onboarding App, Distributor App &amp; Delivery App</li><li>Driving operational efficiency through robust design &amp; security measures</li><li>Team and project management across full product lifecycle</li>',
    exp2Title: "Associate Developer",
    exp2Company: "IdeastoImpacts Pvt Ltd",
    exp2Date: "Feb 2022 — Dec 2022",
    exp2Details: '<li>Enhanced and maintained Play Store apps across IoT, Healthcare, Sports &amp; Gaming</li><li>Fixed bugs, added features, refactored code, gathered client requirements</li><li>Migrated native Android apps to Flutter</li><li>Built end-to-end applications from concept to deployment</li>',
    projLabel: "Projects",
    projTitle: "Featured Work",
    proj1Title: "NewGas Applications",
    proj1Desc: "Complete ecosystem for LPG cylinder management: Customer App, Onboarding, Distributor stock/SKU tracking, and Delivery management with real-time tracking.",
    proj2Title: "Infinite Uptime IDE Config",
    proj2Desc: "Industrial IoT predictive maintenance app using BLE &amp; IoT sensors. REST API integration for SSO, product flavors, R&amp;D and documentation.",
    proj3Title: "IDAP Configuration Debug App",
    proj3Desc: "Migrated native BLE Android app to Flutter. Rewrote 3,000+ lines of Java with complex data handling algorithms into clean Dart code.",
    proj4Title: "Snap-On Mobile App",
    proj4Desc: "Industry 4.0 app communicating with sensors via USB, extracting data, executing data science algorithms for graph generation &amp; server upload.",
    proj5Title: "KareCirc",
    proj5Desc: "Healthcare app monitoring elderly health via Fitbit &amp; Apple Watch data. Features geofencing, UI development &amp; AWS Amplify datastore.",
    proj6Title: "Moviels Taxi Service",
    proj6Desc: "Enhanced and maintained customer &amp; driver apps for Uber-like taxi service, fixing critical bugs, updating UI, and adding new features.",
    skillsLabel: "Skills",
    skillsTitle: "Technologies &amp; Expertise",
    skillLang: "Languages",
    skillFrameworks: "Frameworks &amp; Architecture",
    skillCloud: "Cloud &amp; Services",
    skillDb: "Databases &amp; Storage",
    skillTools: "Tools &amp; DevOps",
    skillSpecial: "Specialties",
    eduLabel: "Education",
    eduTitle: "Academic Background",
    eduDegree: "B.E Computer Science",
    eduSchool: "Sandip Institute of Technology and Research Center",
    eduMeta: "Savitribai Phule Pune University · Aug 2017 – Jul 2021",
    eduCourses: "Key Coursework:",
    leadLabel: "Leadership",
    leadTitle: "Beyond Code",
    lead1Title: "Project Mentoring",
    lead1Desc: 'Educating and mentoring junior developers on Flutter development. Mentored <strong>25+ juniors</strong> on mobile app development.',
    lead2Title: "GDSC Team Member",
    lead2Desc: "Google Developer Student Club at SITRC. Organized tech events to spread technology awareness on campus. Jun 2020 – Jul 2021.",
    lead3Title: "Hackathon Organizer",
    lead3Desc: 'Awarded for organizing the first 48hr hackathon with <strong>38 teams</strong> participating. Coordinated the entire event end-to-end.',
    contactLabel: "Contact",
    contactTitle: "Let's Work Together",
    contactDesc: "I'm always open to new opportunities, collaborations, and interesting projects. Whether you have a job offer, a project idea, or just want to say hello — I'd love to hear from you.",
    footer: "&copy; 2026 Ahmed Sweid. Built with the Luminous Mono design system."
  },
  ar: {
    langToggle: "EN",
    navAbout: "عني",
    navExperience: "الخبرة",
    navProjects: "المشاريع",
    navSkills: "المهارات",
    navContact: "تواصل",
    heroLabel: "مطور تطبيقات الهاتف",
    heroName: "أحمد<br>سويد",
    heroTagline: 'مطور <strong>Flutter و Android</strong> بخبرة أكثر من <strong>4 سنوات</strong> في بناء تطبيقات الهاتف الآمنة والقابلة للتوسع عبر إنترنت الأشياء والرعاية الصحية والمالية والتجارة الإلكترونية.',
    statYears: "سنوات خبرة",
    statProjects: "مشاريع",
    statMentored: "تم تدريبهم",
    heroBtnProjects: "عرض المشاريع",
    heroBtnContact: "تواصل معي",
    scrollText: "اسحب للأسفل",
    aboutLabel: "عني",
    aboutTitle: "الملف الشخصي",
    about1: 'بخبرة تزيد عن <strong>4 سنوات</strong> في تطوير Flutter و Android، أمتلك خبرة قوية في هندسة البرمجيات وعمليات التطوير. قمت بتطوير وصيانة تطبيقات هاتف معقدة للشركات الناشئة والعملاء متعددي الجنسيات والمؤسسات الحكومية عبر قطاعات إنترنت الأشياء والرعاية الصحية والتجارة الإلكترونية والألعاب.',
    about2: 'أتخصص في <strong>الهيكلة الشاملة</strong>، وأقود الفرق لبناء حلول هاتف آمنة وقابلة للتوسع. من التواصل مع أجهزة الاستشعار عبرBLE/USB إلى تصوير البيانات المعقدة وتكامل السحابة — أقدم تطبيقات جاهزة للإنتاج بهيكل نظيف واختبارات قوية.',
    about3: 'أبحث عن دور <strong>قائد Flutter / الهاتف</strong> يمكنني فيه الاستفادة من خبرتي في تصميم الهيكلة وتدريب الفرق والتطوير عبر المنصات المختلفة لبناء منتجات مؤثرة.',
    expLabel: "الخبرة",
    expTitle: "مسيرة المهنة",
    exp1Title: "قائد التطوير للهاتف",
    exp1Company: "Blueray Automation",
    exp1Date: "مارس 2023 — الحالي",
    exp1Details: '<li>قيادة الهيكل الشامل لـ <strong>4 تطبيقات هاتف</strong> لشركة Newgas (غانا)</li><li>تطبيق العملاء، تطبيق التأهيل، تطبيق الموزع، وتطبيق التوصيل</li><li>تحسين الكفاءة التشغيلية من خلال التصميم القوي وتدابير الأمان</li><li>إدارة الفريق والمشاريع عبر دورة حياة المنتج الكاملة</li>',
    exp2Title: "مطور مساعد",
    exp2Company: "IdeastoImpacts Pvt Ltd",
    exp2Date: "فبراير 2022 — ديسمبر 2022",
    exp2Details: '<li>تحسين وصيانة تطبيقات Play Store عبر إنترنت الأشياء والرعاية الصحية والرياضات والألعاب</li><li>إصلاح الأخطاء البرمجية، إضافة الميزات، إعادة هيكلة الكود، وجمع متطلبات العملاء</li><li>ترحيل تطبيقات Android الأصلية إلى Flutter</li><li>بناء تطبيقات شاملة من المفهوم إلى النشر</li>',
    projLabel: "المشاريع",
    projTitle: "أعمال مميزة",
    proj1Title: "تطبيقات NewGas",
    proj1Desc: "نظام شامل لإدارة أسطوانات الغاز: تطبيق العملاء، التأهيل، تتبع مخزون الموزع، وإدارة التوصيل مع التتبع في الوقت الفعلي.",
    proj2Title: "إعداد Infinite Uptime IDE",
    proj2Desc: "تطبيق الصيانة التنبؤية لإنترنت الأشياء الصناعي باستخدام أجهزة استشعار BLE و IoT. تكامل REST API لـ SSO، نكهات المنتج، البحث والتوثيق.",
    proj3Title: "تطبيق تهيئة IDAP للتصحيح",
    proj3Desc: "ترحيل تطبيق BLE الأصلي للAndroid إلى Flutter. إعادة كتابة أكثر من 3000 سطر من Java بخوارزميات معالجة البيانات المعقدة إلى كود Dart نظيف.",
    proj4Title: "تطبيق Snap-On للهاتف",
    proj4Desc: "تطبيق صناعي 4.0 يتواصل مع أجهزة الاستشعار عبر USB، واستخراج البيانات، وتنفيذ خوارزميات علم البيانات لتوليد الرفع والرفع على الخادم.",
    proj5Title: "KareCirc",
    proj5Desc: "تطبيق رعاية صحية لمتابعة صحة كبار السن عبر بيانات Fitbit و Apple Watch. يتضمن تحديد الموقع الجغرافي وتطوير واجهة المستخدم وتخزين AWS Amplify.",
    proj6Title: "خدمة Moviels التاكسي",
    proj6Desc: "تحسين وصيانة تطبيقات العملاء والسائقين لخدمة التاكسي مماثل لـ Uber، وإصلاح الأخطاء الحرجة، وتحديث واجهة المستخدم، وإضافة ميزات جديدة.",
    skillsLabel: "المهارات",
    skillsTitle: "التقنيات والخبرات",
    skillLang: "لغات البرمجة",
    skillFrameworks: "الأطر والهيكلة",
    skillCloud: "السحابة والخدمات",
    skillDb: "قواعد البيانات والتخزين",
    skillTools: "الأدوات و DevOps",
    skillSpecial: "التخصصات",
    eduLabel: "التعليم",
    eduTitle: "الخلفية الأكاديمية",
    eduDegree: "بكالوريوس هندسة الحاسوب",
    eduSchool: "معهد سانديب للتكنولوجيا ومركز الأبحاث",
    eduMeta: "جامعة سافيترا باي بوني · أغسطس 2017 – يوليو 2021",
    eduCourses: "المقررات الرئيسية:",
    leadLabel: "القيادة",
    leadTitle: "ما وراء الكود",
    lead1Title: "تدريب المشاريع",
    lead1Desc: 'تعليم وتدريب المطورين juniors على تطوير Flutter. قمت بتدريب <strong>أكثر من 25 مطوراً</strong> على تطوير تطبيقات الهاتف.',
    lead2Title: "عضو فريق GDSC",
    lead2Desc: "نادي مطوري Google للطلاب في SITRC. نظّم فعاليات تقنية لنشر الوعي التقني في الحرم الجامعي. يونيو 2020 – يوليو 2021.",
    lead3Title: "منظم هاكاثون",
    lead3Desc: 'حاز على تقدير لتنظيم أول هاكاثون لمدة 48 ساعة مع مشاركة <strong>38 فريقاً</strong>. تنسيق الحدث بالكامل من البداية إلى النهاية.',
    contactLabel: "تواصل",
    contactTitle: "دعنا نعمل معاً",
    contactDesc: "أنا دائماً منفتح على الفرص الجديدة والتعاون والمشاريع المثيرة. سواء كان لديك عرض وظيفة أو فكرة مشروع أو تريد فقط أن تقول مرحاً — يسعدني سماعك.",
    footer: "&copy; 2026 أحمد سويد. صُنع بتصميم Luminous Mono."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('lang') || 'en';
  let currentTheme = localStorage.getItem('theme') || 'light';

  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  setTheme(currentTheme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'UL') {
          el.innerHTML = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });
  }

  setLanguage(currentLang);

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  /* --- Navbar Scroll Effect --- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile Nav Toggle --- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* --- Scroll Reveal (Intersection Observer) --- */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* --- Counter Animation --- */
  const counters = document.querySelectorAll('.stat-number');

  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const max = parseInt(target.getAttribute('data-count'), 10);
          animateCounter(target, max);
          counterObserver.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  function animateCounter(element, max) {
    const duration = 1500;
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * max);
      element.textContent = current + '+';

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = max + '+';
      }
    }

    requestAnimationFrame(update);
  }

  /* --- Smooth scroll for anchor links (fallback) --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  /* --- Parallax effect on hero --- */
  const hero = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero-bg');

  if (hero && heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      const heroHeight = hero.offsetHeight;
      if (scrollY <= heroHeight) {
        const progress = scrollY / heroHeight;
        heroBg.style.transform = `translateY(${progress * 30}px)`;
        heroBg.style.opacity = 1 - progress * 0.5;
      }
    }, { passive: true });
  }

  /* --- Mouse move parallax on photo frame --- */
  const photoFrame = document.querySelector('.photo-frame');

  if (photoFrame) {
    photoFrame.addEventListener('mousemove', (e) => {
      const rect = photoFrame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -6;
      const rotateY = (x - centerX) / centerX * 6;
      photoFrame.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    photoFrame.addEventListener('mouseleave', () => {
      photoFrame.style.transform = 'perspective(600px) rotateX(0) rotateY(0)';
    });
  }

});
