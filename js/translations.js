/**
 * Bilingual Data & Translations Dictionary for Kareem Mohamed's Portfolio
 * Languages: English (en) and Arabic (ar)
 */

const i18nData = {
  en: {
    // Navigation
    nav: {
      about: "About",
      education: "Education",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      cvBtn: "Resume",
      themeToggle: "Toggle theme",
      langToggle: "العربية"
    },

    // Hero Section
    hero: {
      badge: "Available for Software & Data Engineering Roles",
      greeting: "Hello, I am",
      name: "Kareem Mohamed",
      title: "Computer Science Student & Data Engineering Trainee (DEPI)",
      bio: "Aspiring Software & Data Engineer specialized in algorithmic problem solving, backend systems, and scalable data pipelines.",
      ctaProjects: "Explore Projects",
      ctaContact: "Get In Touch",
      ctaCV: "View Curriculum Vitae",
      stats: {
        gpa: "3.2",
        gpaLabel: "Academic GPA / 4.0",
        training: "DEPI",
        trainingLabel: "Data Engineering"
      },
      terminal: {
        header: "kareem_profile.py",
        runBtn: "Execute",
        outputStatus: "Ready",
        runningText: "Executing pipeline...",
        successText: "Pipeline execution verified: 100% test coverage"
      }
    },

    // About & Education Section
    about: {
      sectionBadge: "Profile & Academic Path",
      sectionTitle: "About & Education",
      sectionDesc: "Grounding theoretical algorithmic rigor with modern enterprise architectures and analytical data workflows.",
      
      aboutCardTitle: "Engineering Philosophy",
      aboutCardP1: "I am a Computer Science student at Modern Academy for Engineering and Technology with a dedicated focus on building robust backend services and data-intensive systems. My journey bridges the discipline of competitive programming with practical engineering at DEPI and Ray Group.",
      aboutCardP2: "Whether optimizing dynamic programming solutions on Codeforces, constructing multi-tier ASP.NET Core applications, or transforming raw telemetry with Pandas and SQL Server, I aim for scalable, maintainable, and high-performance software.",
      
      educationTitle: "Academic Education",
      degree: "Bachelor of Science in Computer Science",
      institution: "Modern Academy for Engineering and Technology",
      location: "Cairo, Egypt",
      gradDate: "Expected July 2028",
      gpaBadge: "GPA: 3.2 / 4.0",
      
      courseworkTitle: "Relevant Academic Coursework",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++/Java)",
        "Relational Database Management Systems (RDBMS)",
        "Systems Programming",
        "Computer Architecture",
        "Web Development Fundamentals"
      ],

      spokenLanguagesTitle: "Spoken Languages",
      spokenLanguages: [
        { name: "Arabic", level: "Native Proficiency" },
        { name: "English", level: "Full Professional Fluency" }
      ],

      highlights: [
        {
          title: "Algorithmic Precision",
          desc: "100+ competitive programming challenges solved with an emphasis on graph algorithms and dynamic programming."
        },
        {
          title: "Data Pipelines",
          desc: "Crafting structured ingestion, schema normalization, and exploratory transformations using Pandas and SQL."
        },
        {
          title: "Clean Architecture",
          desc: "Applying SOLID design principles, decoupled dependency injection, and normalized relational databases."
        }
      ]
    },

    // Skills Section
    skills: {
      sectionBadge: "Technical Arsenal",
      sectionTitle: "Technical Competencies",
      sectionDesc: "A comprehensive breakdown of programming languages, frameworks, data science libraries, and development tools.",
      filterAll: "All Skills",
      filterLanguages: "Languages",
      filterFrameworks: "Frameworks & Core",
      filterData: "Data Science",
      filterTools: "Tools & RDBMS",
      categories: {
        languages: "Programming Languages",
        frameworks: "Frameworks & Competencies",
        dataScience: "Data Science & Python",
        tools: "Tools & Technologies"
      }
    },

    // Experience Section
    experience: {
      sectionBadge: "Career & Training Journey",
      sectionTitle: "Experience & Technical Training",
      sectionDesc: "Hands-on industrial specialization tracks in enterprise backend architecture, competitive algorithmic tracks, and data engineering.",
      items: [
        {
          role: "Data Engineering Trainee",
          company: "Digital Egypt Pioneers Initiative (DEPI)",
          period: "July 2026 - Present",
          badge: "Active Traineeship",
          description: "Undergoing intensive industrial specialization in data pipeline engineering, relational schemas, and large-scale data manipulation. Constructing end-to-end data processing pipelines using Python, Pandas, NumPy, and Matplotlib alongside relational data modelling.",
          highlights: [
            "Data pipeline design and automated ETL workflows",
            "Relational schema modelling and database query tuning",
            "Data cleaning, exploratory data analysis (EDA), and numerical computation with Pandas & NumPy"
          ],
          technologies: ["Data Engineering", "Pandas", "NumPy", "Matplotlib", "SQL", "ETL", "Python"]
        },
        {
          role: "ASP.NET Core MVC Web Development Trainee",
          company: "Ray Group",
          period: "2026",
          badge: "Full-Stack Traineeship",
          description: "Architected full-stack enterprise web applications using C#, ASP.NET Core MVC, Clean Architecture, and Microsoft SQL Server integration. Designed modular controllers, repository patterns, entity models, and secure authentication flows.",
          highlights: [
            "Implemented enterprise Clean Architecture patterns separating domain, infrastructure, and presentation",
            "Integrated Microsoft SQL Server with Entity Framework Core and normalized schemas",
            "Built robust RESTful endpoints and secure session/authentication handling"
          ],
          technologies: ["C#", "ASP.NET Core MVC", "Clean Architecture", "SQL Server", "EF Core", "RESTful APIs"]
        },
        {
          role: "Technical Track Member (Competitive Programming)",
          company: "ECPC Training Community",
          period: "Nov 2025 - Present",
          badge: "Algorithmic Track",
          description: "Engaged in an intensive problem-solving track, solving 100+ algorithmic challenges across Codeforces and LeetCode. Achieved a top-5 ranking in university-wide ECPC mock competitions through optimized algorithmic implementations.",
          highlights: [
            "Solved 100+ problems covering Graph Theory, Dynamic Programming, and Greedy algorithms",
            "Secured Top 5 standing in university-wide competitive programming mock contests",
            "Mastered time and space complexity optimizations in modern C++"
          ],
          technologies: ["C++", "Data Structures", "Algorithms", "Graph Theory", "Dynamic Programming", "Codeforces"]
        }
      ]
    },

    // Projects Section
    projects: {
      sectionBadge: "Featured Work",
      sectionTitle: "Engineered Projects",
      sectionDesc: "Selected software and database systems demonstrating cross-platform development and relational data architecture.",
      viewCode: "Source Code",
      viewDetails: "System Details",
      modalClose: "Close Window",
      architectureBadge: "Architecture & Design",
      items: [
        {
          id: "weather-app",
          title: "Weather Mobile Application",
          type: "Mobile Engineering",
          date: "Apr 2026",
          summary: "Cross-platform mobile application delivering real-time weather analytics via asynchronous RESTful APIs with dynamic state management and offline fallback handling.",
          stack: ["Flutter", "Dart", "REST APIs", "Android Studio"],
          features: [
            "Real-time meteorological telemetry and multi-city forecasting with responsive UI",
            "Asynchronous HTTP networking with robust error handling and offline fallback states",
            "Dynamic state management separating UI rendering from network synchronization",
            "Cross-platform responsive design optimized for diverse screen form factors"
          ],
          architectureDetails: "Engineered with clean architectural separation in Flutter. Data streams asynchronously fetch real-time payloads from RESTful APIs, with local caching mechanisms preventing blank states in transient network disruptions."
        },
        {
          id: "library-system",
          title: "Library Management System",
          type: "Desktop & Database Systems",
          date: "Apr 2025",
          summary: "Desktop management portal built with normalized 3NF database schemas and secure JDBC database communication for transactional integrity.",
          stack: ["Java", "SQL Server", "JDBC", "3NF Database Design"],
          features: [
            "Strictly normalized Third Normal Form (3NF) relational database schema eliminating anomalies",
            "Secure JDBC database communication layer utilizing prepared statements against SQL injection",
            "Automated book issue/return tracking, overdue penalty calculations, and inventory audits",
            "Desktop graphical interface offering high-efficiency data filtering and transactional updates"
          ],
          architectureDetails: "Constructed on relational database principles. Designed relational tables in 3NF to maintain referential integrity. Leveraged Java Database Connectivity (JDBC) with strict connection pooling and prepared statements for high performance."
        }
      ]
    },

    // Contact Section
    contact: {
      sectionBadge: "Initiate Communication",
      sectionTitle: "Get In Touch",
      sectionDesc: "Whether you have an opportunity, a technical collaboration, or an internship inquiry, my inbox is always open.",
      availabilityBadge: "Open to Internships & Engineering Roles",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      locationLabel: "Location",
      locationValue: "Cairo, Egypt",
      linkedinLabel: "LinkedIn Profile",
      githubLabel: "GitHub Profile",
      copySuccess: "Copied to clipboard!",
      clickToCopy: "Click to copy",
      formName: "Your Full Name",
      formEmail: "Your Email Address",
      formSubject: "Subject / Role",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      formSending: "Transmitting...",
      formSent: "Message Received! Thank you for reaching out.",
      formError: "Please ensure all fields are filled properly."
    },

    // CV Modal
    cvModal: {
      title: "Curriculum Vitae",
      subtitle: "Kareem Mohamed — Software & Data Engineering Profile",
      printBtn: "Print / Save PDF",
      closeBtn: "Close Preview"
    },

    // Footer
    footer: {
      builtWith: "Designed with minimalist precision using pure HTML5, CSS3 & JavaScript.",
      rights: "All rights reserved.",
      backToTop: "Back to Top"
    }
  },

  ar: {
    // Navigation
    nav: {
      about: "نبذة عني",
      education: "التعليم",
      skills: "المهارات",
      experience: "الخبرات",
      projects: "المشاريع",
      contact: "تواصل معي",
      cvBtn: "السيرة الذاتية",
      themeToggle: "تبديل المظهر",
      langToggle: "English"
    },

    // Hero Section
    hero: {
      badge: "متاح لفرص هندسة البرمجيات وهندسة البيانات",
      greeting: "مرحباً، أنا",
      name: "كريم محمد",
      title: "طالب علوم حاسب ومتدرب في هندسة البيانات (مبادرة رواد مصر الرقمية DEPI)",
      bio: "مهندس برمجيات وبيانات واعد، متخصص في حل المشكلات البرمجية المعقدة، بناء الأنظمة الخلفية القوية، وتطوير خطوط معالجة وتدفق البيانات بكفاءة عالية.",
      ctaProjects: "استكشف المشاريع",
      ctaContact: "تواصل معي",
      ctaCV: "عرض السيرة الذاتية",
      stats: {
        gpa: "3.2",
        gpaLabel: "المعدل التراكمي / 4.0",
        training: "DEPI",
        trainingLabel: "هندسة البيانات"
      },
      terminal: {
        header: "kareem_profile.py",
        runBtn: "تشغيل",
        outputStatus: "جاهز",
        runningText: "جاري تنفيذ خط معالجة البيانات...",
        successText: "تم التحقق من تشغيل خط البيانات بنجاح: تغطية اختبارات 100%"
      }
    },

    // About & Education Section
    about: {
      sectionBadge: "الملف التعريفي والمسار الأكاديمي",
      sectionTitle: "نبذة عني والتعليم",
      sectionDesc: "الجمع بين التفكير الخوارزمي الدقيق، المعماريات البرمجية الحديثة، ومعالجة البيانات الموسعة.",
      
      aboutCardTitle: "فلسفة الهندسة البرمجية",
      aboutCardP1: "أنا طالب علوم حاسب في الأكاديمية الحديثة للهندسة والتكنولوجيا، أكرس اهتمامي لبناء أنظمة خلفية متينة وتطبيقات بيانات متطورة. يجمع مساري بين الانضباط المستمد من البرمجة التنافسية والخبرة العملية في مبادرة رواد مصر الرقمية (DEPI) ومجموعة راي.",
      aboutCardP2: "سواء كان ذلك من خلال تحسين خوارزميات البرمجة الديناميكية على Codeforces، أو بناء تطبيقات مؤسسية متكاملة باستخدام ASP.NET Core، أو معالجة البيانات الضخمة عبر Pandas وSQL Server، فإن هدفي الدائم هو بناء برمجيات قابلة للتوسع وعالية الأداء.",
      
      educationTitle: "التعليم الأكاديمي",
      degree: "بكالوريوس في علوم الحاسب",
      institution: "الأكاديمية الحديثة للهندسة والتكنولوجيا",
      location: "القاهرة، مصر",
      gradDate: "تاريخ التخرج المتوقع: يوليو 2028",
      gpaBadge: "المعدل التراكمي: 3.2 / 4.0",
      
      courseworkTitle: "أبرز المقررات الدراسية الأكاديمية",
      coursework: [
        "هياكل البيانات والخوارزميات (Data Structures & Algorithms)",
        "البرمجة كائنية التوجه (OOP بـ C++/Java)",
        "أنظمة إدارة قواعد البيانات العلائقية (RDBMS)",
        "برمجة النظم (Systems Programming)",
        "معمارية وبنية الحاسب (Computer Architecture)",
        "أساسيات تطوير الويب (Web Development Fundamentals)"
      ],

      spokenLanguagesTitle: "اللغات المتقنة",
      spokenLanguages: [
        { name: "العربية", level: "اللغة الأم (إتقان تام)" },
        { name: "الإنجليزية", level: "طلاقة احترافية كاملة" }
      ],

      highlights: [
        {
          title: "الدقة الخوارزمية",
          desc: "حل أكثر من 100 مسألة برمجية تنافسية مع التركيز على خوارزميات الرسوم البيانية (Graph Theory) والبرمجة الديناميكية."
        },
        {
          title: "خطوط تدفق البيانات",
          desc: "بناء وتصميم تدفقات استخراج وتحويل وتحميل البيانات (ETL) وتحليلها باستخدام مكتبات بايثون وSQL."
        },
        {
          title: "المعمارية البرمجية النظيفة",
          desc: "تطبيق مبادئ SOLID والمعمارية النظيفة (Clean Architecture) مع قواعد بيانات علائقية متوافقة مع معايير التسوية."
        }
      ]
    },

    // Skills Section
    skills: {
      sectionBadge: "الترسانة التقنية",
      sectionTitle: "المهارات والقدرات التقنية",
      sectionDesc: "استعراض شامل للغات البرمجة، أطر العمل، مكتبات علوم البيانات، وأدوات التطوير وقواعد البيانات.",
      filterAll: "جميع المهارات",
      filterLanguages: "لغات البرمجة",
      filterFrameworks: "أطر العمل والمنهجيات",
      filterData: "علوم البيانات",
      filterTools: "الأدوات وقواعد البيانات",
      categories: {
        languages: "لغات البرمجة",
        frameworks: "أطر العمل والقدرات الأساسية",
        dataScience: "علوم البيانات ومكتبات بايثون",
        tools: "الأدوات والتقنيات"
      }
    },

    // Experience Section
    experience: {
      sectionBadge: "المسار المهني والتدريب الفني",
      sectionTitle: "الخبرات والتدريب التقني",
      sectionDesc: "مسارات تدريبية متخصصة ومكثفة في هندسة البيانات، تطوير تطبيقات الويب للمؤسسات، والبرمجة التنافسية.",
      items: [
        {
          role: "متدرب في هندسة البيانات (Data Engineering Trainee)",
          company: "مبادرة رواد مصر الرقمية (DEPI)",
          period: "يوليو 2026 - الحالي",
          badge: "تدريب تخصصي نشط",
          description: "برنامج تدريبي تخصصي مكثف في تصميم خطوط تدفق البيانات (Data Pipelines)، المخططات العلائقية، ومعالجة البيانات الضخمة. بناء تدفقات متكاملة لاستخراج ومعالجة وتحليل البيانات باستخدام بايثون ومكتبات Pandas وNumPy وMatplotlib.",
          highlights: [
            "تصميم خطوط معالجة وتدفق البيانات وتدفقات ETL الآلية",
            "تصميم المخططات العلائقية وتحسين أداء استعلامات قواعد البيانات",
            "تنظيف البيانات والتحليل الاستكشافي (EDA) والحسابات العددية المتقدمة"
          ],
          technologies: ["هندسة البيانات", "Pandas", "NumPy", "Matplotlib", "SQL", "ETL", "Python"]
        },
        {
          role: "متدرب تطوير تطبيقات الويب بـ ASP.NET Core MVC",
          company: "مجموعة راي (Ray Group)",
          period: "2026",
          badge: "تدريب تطوير شامل",
          description: "تصميم وبناء تطبيقات ويب مؤسسية متكاملة باستخدام لغة #C وإطار العمل ASP.NET Core MVC، مع الالتزام بمبادئ المعمارية النظيفة (Clean Architecture) والربط مع Microsoft SQL Server.",
          highlights: [
            "تطبيق مبادئ المعمارية النظيفة مع فصل طبقات النطاق والبنية التحتية والعرض",
            "التكامل مع Microsoft SQL Server عبر Entity Framework Core ومخططات منضبطة",
            "بناء واجهات برمجية RESTful قوية ونظم مصادقة وجلسات آمنة للمستخدمين"
          ],
          technologies: ["#C", "ASP.NET Core MVC", "Clean Architecture", "SQL Server", "EF Core", "RESTful APIs"]
        },
        {
          role: "عضو المسار التقني (البرمجة التنافسية الخوارزمية)",
          company: "مجتمع تدريب البرمجة التنافسية (ECPC Community)",
          period: "نوفمبر 2025 - الحالي",
          badge: "مسار خوارزمي متقدم",
          description: "المشاركة في مسار خوارزمي مكثف لحل المشكلات المعقدة، مع حل أكثر من 100 مسألة على منصات Codeforces وLeetCode. تحقيق المركز ضمن أفضل 5 فرق في المسابقات التجريبية للجامعة.",
          highlights: [
            "حل أكثر من 100 مسألة في نظريات الرسوم البيانية، البرمجة الديناميكية، والخوارزميات الجشعة",
            "تحقيق المركز ضمن أفضل 5 في مسابقات المحاكاة لـ ECPC على مستوى الجامعة",
            "إتقان تحسين التعقيد الزمني والمكاني (Time & Space Complexity) باستخدام ++C"
          ],
          technologies: ["++C", "هياكل البيانات", "الخوارزميات", "Graph Theory", "Dynamic Programming", "Codeforces"]
        }
      ]
    },

    // Projects Section
    projects: {
      sectionBadge: "أبرز الأعمال",
      sectionTitle: "المشاريع البرمجية",
      sectionDesc: "مجموعة مختارة من الأنظمة البرمجية وقواعد البيانات التي تبرز الكفاءة في التطوير متعدد المنصات وتصميم البيانات العلائقية.",
      viewCode: "الكود المصدري",
      viewDetails: "تفاصيل النظام",
      modalClose: "إغلاق النافذة",
      architectureBadge: "المعمارية والتصميم",
      items: [
        {
          id: "weather-app",
          title: "تطبيق طقس متطور للأجهزة الذكية (Weather App)",
          type: "تطوير تطبيقات الهواتف",
          date: "أبريل 2026",
          summary: "تطبيق هاتف متعدد المنصات يوفر تحليلات لحظية للطقس والتنبؤات الجوية عبر واجهات RESTful البرمجية غير المتزامنة مع إدارة ديناميكية للحالة ودعم العمل دون اتصال.",
          stack: ["Flutter", "Dart", "REST APIs", "Android Studio"],
          features: [
            "عرض لحظي لقياسات الطقس وتوقعات متعددة المدن مع واجهة استخدام مرنة",
            "اتصال شبكي غير متزامن مع معالجة استباقية للأخطاء وحفظ محلي للبيانات في حال انقطاع الشبكة",
            "فصل محكم بين إدارة الحالة وعرض الواجهات الرسومية",
            "تصميم متجاوب وسلس متوافق مع مختلف أحجام الشاشات"
          ],
          architectureDetails: "تم البناء باستخدام إطار Flutter باتباع فصل معماري نظيف. يتم جلب تدفقات البيانات بشكل غير متزامن من واجهات RESTful، مع آليات حفظ محلي ذكية تمنع الشاشات الفارغة أثناء تذبذب الاتصال."
        },
        {
          id: "library-system",
          title: "نظام إدارة المكتبات المتكامل (Library Management)",
          type: "أنظمة سطح المكتب وقواعد البيانات",
          date: "أبريل 2025",
          summary: "بوابة سطح مكتب لإدارة موارد المكتبات مبنية على مخططات قواعد بيانات منضبطة وفق معيار التسوية الثالث (3NF) واتصال JDBC آمن ومحمي.",
          stack: ["Java", "SQL Server", "JDBC", "3NF Database Design"],
          features: [
            "مخطط قاعدة بيانات علائقية منضبط بدقة وفق النموذج الطبيعي الثالث (3NF) لمنع تكرار وتعارض البيانات",
            "طبقة اتصال JDBC آمنة تعتمد على Prepared Statements للوقاية التامة من ثغرات SQL Injection",
            "نظام آلي لتتبع استعارة وإرجاع الكتب، واحتساب غرامات التأخير، والجرد الفوري للكتب",
            "واجهة مستخدم رسومية سريعة تتيح تصفية السجلات وإجراء المعاملات اللحظية بكفاءة عالية"
          ],
          architectureDetails: "مبني وفق مبادئ قواعد البيانات العلائقية الصارمة. تم تصميم الجداول وفق النموذج 3NF لضمان التكامل المرجعي للبيانات، مع استخدام مكتبة JDBC ونظام إدارة اتصالات يضمن أعلى درجات الموثوقية والأمان."
        }
      ]
    },

    // Contact Section
    contact: {
      sectionBadge: "بدء التواصل",
      sectionTitle: "تواصل معي",
      sectionDesc: "سواء كنت مهتماً بفرصة تدريبية، عمل هندسي، أو تعاون تقني، يسعدني دائماً تواصلك.",
      availabilityBadge: "متاح لفرص التدريب والأدوار الهندسية",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "رقم الهاتف",
      locationLabel: "الموقع الجغرافي",
      locationValue: "القاهرة، مصر",
      linkedinLabel: "حساب LinkedIn",
      githubLabel: "حساب GitHub",
      copySuccess: "تم النسخ إلى الحافظة بنجاح!",
      clickToCopy: "انقر للنسخ",
      formName: "الاسم بالكامل",
      formEmail: "البريد الإلكتروني",
      formSubject: "الموضوع / الفرصة",
      formMessage: "رسالتك",
      formSubmit: "إرسال الرسالة",
      formSending: "جاري الإرسال...",
      formSent: "تم استلام رسالتك بنجاح! شكراً لتواصلك.",
      formError: "يرجى التأكد من ملء جميع الحقول بشكل صحيح."
    },

    // CV Modal
    cvModal: {
      title: "السيرة الذاتية",
      subtitle: "كريم محمد — الملف الفني في هندسة البرمجيات والبيانات",
      printBtn: "طباعة / حفظ كملف PDF",
      closeBtn: "إغلاق المعاينة"
    },

    // Footer
    footer: {
      builtWith: "تم التصميم والتطوير بأسلوب تبسيطي حديث باستخدام خالص تقنيات HTML5 وCSS3 وJavaScript.",
      rights: "جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى"
    }
  }
};

// Skill Data Model for dynamic rendering & category filtering
const skillsData = [
  // Languages
  { name: "C++", category: "languages", icon: "cpp", level: "Advanced", desc: "Competitive programming, memory control & algorithms" },
  { name: "Python", category: "languages", icon: "python", level: "Proficient", desc: "Data pipelines, scripting & scientific computing" },
  { name: "C#", category: "languages", icon: "csharp", level: "Proficient", desc: "ASP.NET Core backend & enterprise services" },
  { name: "Java", category: "languages", icon: "java", level: "Proficient", desc: "OOP principles, JDBC systems & desktop software" },
  { name: "SQL", category: "languages", icon: "sql", level: "Advanced", desc: "Complex queries, indexing & schema architecture" },
  { name: "Dart", category: "languages", icon: "dart", level: "Intermediate", desc: "Cross-platform mobile applications with Flutter" },
  { name: "JavaScript", category: "languages", icon: "javascript", level: "Proficient", desc: "Modern ES6+, DOM manipulation & interactive web" },
  { name: "HTML5", category: "languages", icon: "html5", level: "Advanced", desc: "Semantic markup, accessibility & responsive structure" },
  { name: "CSS3", category: "languages", icon: "css3", level: "Advanced", desc: "CSS Grid, Flexbox, custom variables & animations" },

  // Frameworks & Core
  { name: "Data Engineering", category: "frameworks", icon: "dataeng", level: "Specialization", desc: "ETL workflows, pipeline architecture & analytics" },
  { name: "ASP.NET Core MVC", category: "frameworks", icon: "dotnet", level: "Proficient", desc: "Clean Architecture, Web APIs & controllers" },
  { name: "Flutter", category: "frameworks", icon: "flutter", level: "Intermediate", desc: "Mobile UI, state management & REST integration" },
  { name: "RESTful APIs", category: "frameworks", icon: "api", level: "Proficient", desc: "HTTP endpoints, JSON payloads & client integration" },
  { name: "Data Structures & Algorithms", category: "frameworks", icon: "dsa", level: "Core Strength", desc: "Graph theory, DP, trees, time/space complexity" },
  { name: "Object-Oriented Design (OOD)", category: "frameworks", icon: "ood", level: "Core Strength", desc: "Encapsulation, inheritance, polymorphism, patterns" },
  { name: "SOLID Principles", category: "frameworks", icon: "solid", level: "Core Strength", desc: "Maintainable, extensible & modular architecture" },
  { name: "RDBMS Concepts", category: "frameworks", icon: "rdbms", level: "Advanced", desc: "3NF normalization, ACID transactions, integrity" },

  // Data Science & Python
  { name: "Pandas", category: "dataScience", icon: "pandas", level: "Proficient", desc: "DataFrames, data cleaning, aggregation & filtering" },
  { name: "NumPy", category: "dataScience", icon: "numpy", level: "Proficient", desc: "Multidimensional arrays & high-speed vector math" },
  { name: "Matplotlib", category: "dataScience", icon: "matplotlib", level: "Proficient", desc: "Data visualization, statistical plotting & dashboards" },

  // Tools & Technologies
  { name: "Git", category: "tools", icon: "git", level: "Daily Workflow", desc: "Version control, branching strategies & history management" },
  { name: "GitHub", category: "tools", icon: "github", level: "Daily Workflow", desc: "Remote repositories, code collaboration & showcases" },
  { name: "SQL Server (SSMS)", category: "tools", icon: "ssms", level: "Proficient", desc: "Database administration, T-SQL scripting & tuning" },
  { name: "Android Studio", category: "tools", icon: "android", level: "Proficient", desc: "Mobile emulation, debugging & Flutter tooling" },
  { name: "Visual Studio", category: "tools", icon: "visualstudio", level: "Daily Workflow", desc: ".NET enterprise development, profiling & debugging" },
  { name: "VS Code", category: "tools", icon: "vscode", level: "Daily Workflow", desc: "Primary polyglot editor & workspace environment" },
  { name: "Jupyter Notebook", category: "tools", icon: "jupyter", level: "Proficient", desc: "Interactive data analysis, prototyping & reporting" }
];
