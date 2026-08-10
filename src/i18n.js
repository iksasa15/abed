const content = {
  ar: {
    brand: 'عبير',
    navWorks: 'أعمالي',
    navContact: 'تواصل',
    langBtn: 'EN',
    themeDark: 'الوضع الليلي',
    themeLight: 'الوضع النهاري',
    profile: {
      name: 'عبير اليعيش',
      nameEn: 'Abeer Al-Yaeesh',
      title: 'علوم حاسب · ذكاء اصطناعي · منتجات',
      location: 'الرياض، المملكة العربية السعودية',
      email: 'abeeralyaeesh12@gmail.com',
      phone: '+966 54 913 9740',
      greeting: 'هلا، أنا',
      headline:
        'أصمّم وأبني حلول رقمية بالذكاء الاصطناعي: أربط الفكرة بتجربة مستخدم واضحة، وأطوّر مسارات تقنية من الـ Backend للمنتج.',
      objective:
        'عبير اليعيش — طالبة علوم حاسب في السنة الأخيرة بالجامعة العربية المفتوحة، ومتخرجة من برنامج مطوري Apple في أكاديمية طويق. أركز على الذكاء الاصطناعي والمنتجات الرقمية: تصميم التجربة، بناء أنظمة Backend، والعمل مع فرق متعددة التخصصات من الفكرة حتى النموذج الأولي.',
    },
    stats: [
      { value: '3+', label: 'مشاريع جاهزة' },
      { value: '7+', label: 'شهادات وبرامج' },
      {
        value: 'Apple Academy',
        label: 'أكاديمية المطورين',
        logo: '/logos/apple-academy.png',
      },
      { value: 'Senior', label: 'سنة التخرج' },
    ],
    heroCtaWorks: 'من أعمالي',
    heroCtaHello: 'خلينا نتواصل',
    about: {
      kicker: 'تعريف',
      title: 'نبذة عني',
    },
    education: {
      kicker: 'المسار الزمني',
      title: 'التعليم والشهادات',
      activitiesTitle: 'التطوع والأنشطة',
      items: [
        {
          year: '2026',
          title: 'برنامج McKinsey.org Forward',
          org: 'McKinsey.org',
          meta: '2026',
          accent: 'navy',
          points: [
            'برنامج تطوير مهارات حل المشكلات والتفكير التحليلي للعمل في بيئات احترافية.',
          ],
        },
        {
          year: 'الآن',
          title: 'بكالوريوس علوم الحاسب',
          org: 'الجامعة العربية المفتوحة',
          meta: 'السنة الأخيرة · حالياً',
          accent: 'purple',
          points: [
            'أبني أساس علوم الحاسب من البرمجة وقواعد البيانات إلى تصميم الأنظمة والمنتجات.',
            'أربط الدراسة بمشاريع عملية من الفكرة حتى التسليم مع فرق متعددة التخصصات.',
          ],
        },
        {
          year: '2023',
          title: 'برنامج مطوري Apple',
          org: 'أكاديمية Apple في طويق',
          meta: '2023 – 2024',
          logo: '/logos/apple-academy.png',
          accent: 'sky',
          points: [
            'تعلّمت تطوير تطبيقات iOS باستخدام Swift و SwiftUI بتركيز على تجربة المستخدم.',
            'ساهمت في بناء Decision Dive كتطبيق تفاعلي لاكتشاف الذات.',
          ],
        },
        {
          year: '2022',
          title: 'شهادة تصميم UX/UI',
          org: 'أكاديمية طويق',
          meta: '2022',
          accent: 'pink',
          points: [
            'أسس تصميم الواجهات، تدفقات المستخدم، وبناء أنظمة تصميم واضحة.',
          ],
        },
        {
          year: '2022',
          title: 'تدريب الأمن السيبراني والبرمجة',
          org: 'الاتحاد السعودي · طويق',
          meta: '2022',
          accent: 'navy',
          points: [
            'تعرّفت على أساسيات الأمن السيبراني والبرمجة ضمن بيئة تدريب عملية.',
          ],
        },
        {
          year: '2021',
          title: 'شهادة Hour of Code',
          org: 'Code.org',
          meta: '2021',
          accent: 'sky',
        },
        {
          year: '2020',
          title: 'TOT — تدريب المدربين',
          org: 'شهادة',
          meta: '2020',
          accent: 'purple',
        },
      ],
      activities: [
        {
          year: '2024',
          title: 'عضوة نادي الحاسب',
          org: 'الجامعة العربية المفتوحة',
          meta: '2024 – 2025',
        },
        {
          year: '2024',
          title: 'وحدة العلاقات العامة',
          org: 'نادي الحاسب · الجامعة',
          meta: '2024',
        },
        {
          year: '2022',
          title: 'قائدة طلابية',
          org: 'الجامعة العربية المفتوحة',
          meta: '2022',
        },
      ],
    },
    skills: {
      kicker: 'الأدوات',
      title: 'المهارات',
      groups: [
        {
          title: 'ذكاء اصطناعي وبيانات',
          items: ['الذكاء الاصطناعي', 'تعلم الآلة', 'Python', 'MongoDB', 'SQL'],
        },
        {
          title: 'تطوير وتطبيقات',
          items: ['Swift و SwiftUI', 'Backend و APIs', 'أساسيات الحوسبة السحابية'],
        },
        {
          title: 'تصميم ومنتج',
          items: ['تصميم UX/UI', 'Figma', 'أنظمة التصميم', 'Design Thinking'],
        },
        {
          title: 'مهارات شخصية',
          items: ['حل المشكلات', 'التواصل', 'القيادة', 'العمل الجماعي'],
        },
      ],
      languages: [
        { name: 'العربية', level: 'لغة أم' },
        { name: 'الإنجليزية', level: 'بطلاقة' },
      ],
    },
    projects: {
      kicker: 'التسلسل الزمني',
      title: 'المشاريع',
      items: [
        {
          id: 'zomoroda',
          year: '2026',
          name: 'ZOMORODA',
          status: 'قيد التطوير',
          tagline: 'مساعد جمال زهري مدعوم بالذكاء الاصطناعي',
          description:
            'صممت مفهوم المنتج وتجربة المستخدم لمساعد جمال زهري ذكي. بنيت نظام تصميم كامل وخططت لميزات الذكاء الاصطناعي: التعرف على الزهور، توصيات أحمر الشفاه، شات بوت، والرؤية الحاسوبية.',
          skills: ['AI', 'Computer Vision', 'UX/UI', 'Product Design', 'Figma'],
          color: 'pink',
        },
        {
          id: 'tracker',
          year: '2026',
          name: 'AOU Study Tracker',
          status: 'مشروع التخرج · 2026',
          tagline: 'مساعد تعلم بالذكاء الاصطناعي',
          description:
            'شاركت في تطوير منصة تعليمية ذكية تساعد طلاب الجامعة على تنظيم دراستهم والاستعداد للاختبارات. قدت تطوير الـ Backend باستخدام Python و MongoDB مع إدارة قواعد البيانات وربط الـ APIs.',
          skills: ['Python', 'MongoDB', 'AI', 'Backend', 'API Integration'],
          color: 'navy',
        },
        {
          id: 'dive',
          year: '2024',
          name: 'Decision Dive',
          status: '2024',
          tagline: 'تطبيق لاكتشاف الذات',
          description:
            'صممت وطورت تطبيقاً جوالاً يرشد المستخدم عبر أسئلة تفاعلية وبطاقات تلميحات للتأمل واتخاذ القرار. ساهمت في الفكرة وتصميم التجربة والتطوير.',
          skills: ['Swift', 'SwiftUI', 'UX/UI', 'Design Thinking'],
          color: 'purple',
        },
      ],
    },
    contact: {
      kicker: 'تواصل',
      title: 'خلينا نشتغل سوا',
      text: 'تقدرين تراسليني على الإيميل أو تتواصلين بالجوال.',
      emailBtn: 'الإيميل',
    },
    footer: 'عبير اليعيش',
  },
  en: {
    brand: 'Abeer',
    navWorks: 'Work',
    navContact: 'Contact',
    langBtn: 'ع',
    themeDark: 'Dark mode',
    themeLight: 'Light mode',
    profile: {
      name: 'Abeer Al-Yaeesh',
      nameEn: 'عبير اليعيش',
      title: 'CS · AI · Product',
      location: 'Riyadh, Saudi Arabia',
      email: 'abeeralyaeesh12@gmail.com',
      phone: '+966 54 913 9740',
      greeting: 'Hi, I’m',
      headline:
        'I design and build AI-powered digital products — connecting clear UX with solid backend paths from idea to delivery.',
      objective:
        'Abeer Al-Yaeesh — Computer Science senior at Arab Open University and Apple Developer Academy (TUWAIQ) graduate. I focus on AI and digital products: UX design, backend systems, and collaborating across disciplines from ideation to prototype.',
    },
    stats: [
      { value: '3+', label: 'Shipped projects' },
      { value: '7+', label: 'Certificates' },
      {
        value: 'Apple Academy',
        label: 'Developer Academy',
        logo: '/logos/apple-academy.png',
      },
      { value: 'Senior', label: 'Graduation year' },
    ],
    heroCtaWorks: 'See my work',
    heroCtaHello: "Let's talk",
    about: {
      kicker: 'About',
      title: 'About me',
    },
    education: {
      kicker: 'Timeline',
      title: 'Education & certificates',
      activitiesTitle: 'Volunteering & activities',
      items: [
        {
          year: '2026',
          title: 'McKinsey.org Forward Program',
          org: 'McKinsey.org',
          meta: '2026',
          accent: 'navy',
          points: [
            'Problem-solving and analytical thinking for professional environments.',
          ],
        },
        {
          year: 'Now',
          title: 'B.Sc. Computer Science',
          org: 'Arab Open University',
          meta: 'Senior year · Current',
          accent: 'purple',
          points: [
            'Building a CS foundation from programming and databases to systems and product design.',
            'Connecting coursework to practical projects with multidisciplinary teams.',
          ],
        },
        {
          year: '2023',
          title: 'Apple Developer Program',
          org: 'Apple Academy at TUWAIQ',
          meta: '2023 – 2024',
          logo: '/logos/apple-academy.png',
          accent: 'sky',
          points: [
            'Built iOS apps with Swift and SwiftUI with a strong UX focus.',
            'Contributed to Decision Dive, an interactive self-discovery app.',
          ],
        },
        {
          year: '2022',
          title: 'UX/UI Design Certificate',
          org: 'TUWAIQ Academy',
          meta: '2022',
          accent: 'pink',
          points: [
            'Interface design fundamentals, user flows, and clear design systems.',
          ],
        },
        {
          year: '2022',
          title: 'Cybersecurity & Programming Internship',
          org: 'Saudi Federation · TUWAIQ',
          meta: '2022',
          accent: 'navy',
          points: [
            'Hands-on introduction to cybersecurity and programming fundamentals.',
          ],
        },
        {
          year: '2021',
          title: 'Hour of Code Certificate',
          org: 'Code.org',
          meta: '2021',
          accent: 'sky',
        },
        {
          year: '2020',
          title: 'TOT — Training of Trainers',
          org: 'Certificate',
          meta: '2020',
          accent: 'purple',
        },
      ],
      activities: [
        {
          year: '2024',
          title: 'Computer Club Member',
          org: 'Arab Open University',
          meta: '2024 – 2025',
        },
        {
          year: '2024',
          title: 'Public Relations Unit',
          org: 'Computer Club · AOU',
          meta: '2024',
        },
        {
          year: '2022',
          title: 'Student Leader',
          org: 'Arab Open University',
          meta: '2022',
        },
      ],
    },
    skills: {
      kicker: 'Toolkit',
      title: 'Skills',
      groups: [
        {
          title: 'AI & Data',
          items: ['Artificial Intelligence', 'Machine Learning', 'Python', 'MongoDB', 'SQL'],
        },
        {
          title: 'Development',
          items: ['Swift & SwiftUI', 'Backend & APIs', 'Cloud Computing Basics'],
        },
        {
          title: 'Design & Product',
          items: ['UX/UI Design', 'Figma', 'Design Systems', 'Design Thinking'],
        },
        {
          title: 'Soft Skills',
          items: ['Problem Solving', 'Communication', 'Leadership', 'Teamwork'],
        },
      ],
      languages: [
        { name: 'Arabic', level: 'Native' },
        { name: 'English', level: 'Fluent' },
      ],
    },
    projects: {
      kicker: 'Timeline',
      title: 'Projects',
      items: [
        {
          id: 'zomoroda',
          year: '2026',
          name: 'ZOMORODA',
          status: 'In progress',
          tagline: 'AI-powered floral beauty assistant',
          description:
            'Designed the product concept and UX for an AI floral beauty assistant. Built a full design system and planned AI features: flower recognition, lipstick recommendations, chatbot, and computer vision.',
          skills: ['AI', 'Computer Vision', 'UX/UI', 'Product Design', 'Figma'],
          color: 'pink',
        },
        {
          id: 'tracker',
          year: '2026',
          name: 'AOU Study Tracker',
          status: 'Graduation project · 2026',
          tagline: 'AI learning assistant',
          description:
            'Co-developed an AI learning platform helping students organize studies and prepare for exams. Led backend with Python and MongoDB — APIs, database, and server-side logic.',
          skills: ['Python', 'MongoDB', 'AI', 'Backend', 'API Integration'],
          color: 'navy',
        },
        {
          id: 'dive',
          year: '2024',
          name: 'Decision Dive',
          status: '2024',
          tagline: 'Self-discovery application',
          description:
            'Designed and developed a mobile app guiding self-reflection through interactive questions and hint-based cards. Contributed ideation, UX/UI, and development.',
          skills: ['Swift', 'SwiftUI', 'UX/UI', 'Design Thinking'],
          color: 'purple',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Let’s build together',
      text: 'Reach me by email or phone.',
      emailBtn: 'Email',
    },
    footer: 'Abeer Al-Yaeesh',
  },
}

export default content
