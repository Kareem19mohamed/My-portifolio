/**
 * Kareem Mohamed — Modern Monochromatic Portfolio
 * Core Application Logic & Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    lang: localStorage.getItem('km_lang') || 'en',
    theme: localStorage.getItem('km_theme') || 'dark',
    activeSkillCategory: 'all',
    activeModal: null
  };

  // DOM Elements Cache
  const htmlRoot = document.documentElement;
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('navLinks');
  const mobileToggle = document.getElementById('mobileToggle');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const sunIcon = themeToggleBtn.querySelector('.theme-icon-sun');
  const moonIcon = themeToggleBtn.querySelector('.theme-icon-moon');

  const skillsGrid = document.getElementById('skillsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const timelineContainer = document.getElementById('timelineContainer');
  const projectsGrid = document.getElementById('projectsGrid');
  const courseworkContainer = document.getElementById('courseworkContainer');
  const spokenLangsContainer = document.getElementById('spokenLangsContainer');
  const aboutHighlightsContainer = document.getElementById('aboutHighlightsContainer');

  const runCodeBtn = document.getElementById('runCodeBtn');
  const terminalStatusMsg = document.getElementById('terminalStatusMsg');
  const terminalOutput = document.getElementById('terminalOutput');

  const contactForm = document.getElementById('contactForm');
  const toastContainer = document.getElementById('toastContainer');

  // Modals
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalFooterClose = document.getElementById('modalFooterClose');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectBody = document.getElementById('modalProjectBody');

  const cvModal = document.getElementById('cvModal');
  const cvModalBtn = document.getElementById('cvModalBtn');
  const heroCvBtn = document.getElementById('heroCvBtn');
  const cvModalCloseBtn = document.getElementById('cvModalCloseBtn');
  const cvFooterClose = document.getElementById('cvFooterClose');
  const cvPrintBtn = document.getElementById('cvPrintBtn');
  const cvModalBody = document.getElementById('cvModalBody');

  /* --------------------------------------------------------------------------
     Theme Management
     -------------------------------------------------------------------------- */
  function applyTheme(theme) {
    state.theme = theme;
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('km_theme', theme);

    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }

  themeToggleBtn.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  /* --------------------------------------------------------------------------
     Internationalization (i18n) & Language Switching
     -------------------------------------------------------------------------- */
  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  function applyLanguage(lang) {
    state.lang = lang;
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('km_lang', lang);

    const langData = i18nData[lang];
    if (!langData) return;

    // 1. Update text of all static [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = getNestedTranslation(langData, key);
      if (translation !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    // 2. Re-render dynamic sections with current language
    renderAboutHighlights();
    renderCoursework();
    renderSpokenLanguages();
    renderSkills();
    renderTimeline();
    renderProjects();
    renderCvContent();

    // 3. Update document title for SEO
    if (lang === 'ar') {
      document.title = "كريم محمد | طالب علوم حاسب ومتدرب هندسة بيانات";
    } else {
      document.title = "Kareem Mohamed | Computer Science Student & Data Engineering Trainee";
    }
  }

  langToggleBtn.addEventListener('click', () => {
    const nextLang = state.lang === 'en' ? 'ar' : 'en';
    applyLanguage(nextLang);
  });

  /* --------------------------------------------------------------------------
     Render Dynamic Components
     -------------------------------------------------------------------------- */

  // About Section Highlights
  function renderAboutHighlights() {
    const t = i18nData[state.lang].about;
    aboutHighlightsContainer.innerHTML = t.highlights.map(item => `
      <div class="highlight-item">
        <div class="highlight-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        <div class="highlight-content">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Education Coursework Tags
  function renderCoursework() {
    const t = i18nData[state.lang].about;
    courseworkContainer.innerHTML = t.coursework.map(course => `
      <span class="tag">${course}</span>
    `).join('');
  }

  // Spoken Languages Cards
  function renderSpokenLanguages() {
    const t = i18nData[state.lang].about;
    spokenLangsContainer.innerHTML = t.spokenLanguages.map(item => `
      <div class="spoken-lang-card">
        <div class="spoken-lang-name">${item.name}</div>
        <div class="spoken-lang-level">${item.level}</div>
      </div>
    `).join('');
  }

  // Technical Skills Cards
  function getSkillSvg(icon) {
    // Monochromatic SVG icons tailored for each technology
    const svgs = {
      cpp: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8l-4 4 4 4M8 12h8"/><circle cx="12" cy="12" r="10"/></svg>`,
      python: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
      csharp: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 9h6M9 15h6M12 6v12"/></svg>`,
      java: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>`,
      sql: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      dart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 4 21 12 3 20 6 12 3 4"/></svg>`,
      javascript: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 8v8a2 2 0 0 1-2 2h-1M9 15a2 2 0 0 0 2 2h1"/></svg>`,
      html5: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      css3: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 3h16l-2 15-6 3-6-3L4 3z"/></svg>`,
      dataeng: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      dotnet: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>`,
      flutter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="14 4 4 14 14 24"/><polyline points="9 9 19 19"/></svg>`,
      api: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
      dsa: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M12 8v4M7 17l3.5-5M17 17l-3.5-5"/></svg>`,
      ood: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="8" height="8" rx="2"/><rect x="14" y="2" width="8" height="8" rx="2"/><rect x="8" y="14" width="8" height="8" rx="2"/><path d="M6 10v2a2 2 0 0 0 2 2h4M18 10v2a2 2 0 0 1-2 2h-4"/></svg>`,
      solid: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      rdbms: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/><rect x="2" y="3" width="20" height="18" rx="2"/></svg>`,
      pandas: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="18" rx="1"/><rect x="14" y="3" width="7" height="18" rx="1"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
      numpy: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l8-4 8 4v10l-8 4-8-4V7z"/><polyline points="12 3 12 21"/><polyline points="4 7 20 7"/></svg>`,
      matplotlib: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><line x1="2" y1="20" x2="22" y2="20"></line></svg>`,
      git: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"/></svg>`,
      github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
      ssms: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      android: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10h16v10H4zM7 6l-2-3M17 6l2-3"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/></svg>`,
      visualstudio: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="17 2 7 12 17 22 22 18 22 6 17 2"/><polygon points="7 12 2 8 2 16 7 12"/></svg>`,
      vscode: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.5 3.5l-9 8 9 8 5-4.5v-7z"/><path d="M7.5 11.5L2 7.5v9z"/></svg>`,
      jupyter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`
    };

    return svgs[icon] || `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>`;
  }

  function renderSkills() {
    const filtered = skillsData.filter(skill => {
      if (state.activeSkillCategory === 'all') return true;
      return skill.category === state.activeSkillCategory;
    });

    skillsGrid.innerHTML = filtered.map(skill => `
      <div class="skill-card">
        <div class="skill-card-top">
          <div class="skill-icon-wrap">
            ${getSkillSvg(skill.icon)}
          </div>
          <span class="skill-level-badge">${skill.level}</span>
        </div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-desc">${skill.desc}</div>
      </div>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeSkillCategory = btn.getAttribute('data-category');
      renderSkills();
    });
  });

  // Experience Timeline
  function renderTimeline() {
    const t = i18nData[state.lang].experience;
    timelineContainer.innerHTML = t.items.map(item => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <div class="timeline-role">${item.role}</div>
              <div class="timeline-company">${item.company}</div>
            </div>
            <span class="timeline-badge">${item.badge}</span>
          </div>

          <div class="timeline-period">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${item.period}</span>
          </div>

          <p class="timeline-desc">${item.description}</p>

          <div class="timeline-highlights">
            ${item.highlights.map(h => `
              <div class="timeline-highlight-item">${h}</div>
            `).join('')}
          </div>

          <div class="timeline-tags">
            ${item.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Engineered Projects Grid
  function renderProjects() {
    const t = i18nData[state.lang].projects;
    projectsGrid.innerHTML = t.items.map(project => `
      <div class="project-card">
        <div class="project-visual-header">
          <div class="project-schematic-icon">
            ${project.id === 'weather-app' ? `
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              </svg>
            ` : `
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            `}
          </div>
        </div>

        <div class="project-top">
          <span class="project-type">${project.type}</span>
          <span class="project-date">${project.date}</span>
        </div>

        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>

        <div class="project-features">
          ${project.features.map(f => `<div class="project-feature">${f}</div>`).join('')}
        </div>

        <div class="project-stack">
          ${project.stack.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>

        <div class="project-actions">
          <button type="button" class="btn btn-secondary details-btn" data-project-id="${project.id}" style="padding: 0.55rem 1.15rem; font-size: 0.85rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>${t.viewDetails}</span>
          </button>
          
          <a href="https://github.com/Kareem19mohamed" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 0.55rem 1.15rem; font-size: 0.85rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>${t.viewCode}</span>
          </a>
        </div>
      </div>
    `).join('');

    // Attach click listeners to Details buttons
    document.querySelectorAll('.details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project-id');
        openProjectModal(projectId);
      });
    });
  }

  // Project Details Modal Handler
  function openProjectModal(projectId) {
    const t = i18nData[state.lang].projects;
    const project = t.items.find(p => p.id === projectId);
    if (!project) return;

    modalProjectTitle.textContent = project.title;
    modalProjectBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="tag" style="background:var(--accent-subtle); color:var(--text-primary); font-weight:700;">${project.type} • ${project.date}</span>
      </div>
      <p style="color:var(--text-secondary); line-height: 1.7; font-size:1.02rem; margin-bottom: 1.75rem;">
        ${project.summary}
      </p>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size:1rem; font-weight:700; margin-bottom: 0.75rem; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em;">
          ${t.architectureBadge}
        </h4>
        <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding: 1.25rem; font-size:0.95rem; line-height:1.7; color:var(--text-secondary);">
          ${project.architectureDetails}
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size:1rem; font-weight:700; margin-bottom: 0.75rem; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em;">
          Key Implemented Features
        </h4>
        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          ${project.features.map(feat => `
            <div style="display:flex; align-items:flex-start; gap:0.6rem; color:var(--text-secondary); font-size:0.92rem;">
              <span style="color:var(--accent-base); font-weight:800;">✓</span>
              <span>${feat}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h4 style="font-size:1rem; font-weight:700; margin-bottom: 0.75rem; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em;">
          Technology Stack
        </h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
          ${project.stack.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
      </div>
    `;

    projectModal.classList.add('active');
    state.activeModal = projectModal;
  }

  // Render CV Content (Clean Printable Layout)
  function renderCvContent() {
    const isAr = state.lang === 'ar';
    const langData = i18nData[state.lang];

    cvModalBody.innerHTML = `
      <div class="cv-preview-paper" dir="${isAr ? 'rtl' : 'ltr'}">
        <div class="cv-header-block">
          <div class="cv-name">${isAr ? 'كريم محمد' : 'Kareem Mohamed'}</div>
          <div style="font-size:1.05rem; font-weight:600; color:var(--text-primary); margin-top:0.25rem;">
            ${isAr ? 'طالب علوم حاسب ومتدرب هندسة بيانات' : 'Computer Science Student & Data Engineering Trainee'}
          </div>
          <div class="cv-meta-row">
            <span>📧 km6482271@gmail.com</span>
            <span dir="ltr">📞 (+20) 10-1392-9964</span>
            <span>📍 ${isAr ? 'القاهرة، مصر' : 'Cairo, Egypt'}</span>
            <span>🔗 linkedin.com/in/kareemmohamed</span>
            <span>💻 github.com/Kareem19mohamed</span>
          </div>
        </div>

        <!-- Academic Education -->
        <div class="cv-section">
          <div class="cv-section-title">${isAr ? 'التعليم الأكاديمي' : 'Academic Education'}</div>
          <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--text-primary);">
            <div>Modern Academy for Engineering and Technology</div>
            <div>${isAr ? 'المتوقع: يوليو 2028' : 'Expected July 2028'}</div>
          </div>
          <div style="color:var(--text-secondary); margin-bottom:0.4rem;">
            Bachelor of Science in Computer Science — <strong>GPA: 3.2 / 4.0</strong>, Cairo, Egypt
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted);">
            <strong>${isAr ? 'المقررات الرئيسية:' : 'Relevant Coursework:'}</strong> 
            Data Structures & Algorithms, OOP (C++/Java), RDBMS, Systems Programming, Computer Architecture, Web Development Fundamentals.
          </div>
        </div>

        <!-- Experience & Technical Training -->
        <div class="cv-section">
          <div class="cv-section-title">${isAr ? 'الخبرات والتدريب التقني' : 'Experience & Technical Training'}</div>
          
          <div style="margin-bottom:1rem;">
            <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--text-primary);">
              <div>Data Engineering Trainee — Digital Egypt Pioneers Initiative (DEPI)</div>
              <div>${isAr ? 'يوليو 2026 - الحالي' : 'July 2026 - Present'}</div>
            </div>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:0.25rem;">
              Intensive specialization in data pipeline design, relational schemas, data manipulation using Pandas, NumPy, and Matplotlib.
            </p>
          </div>

          <div style="margin-bottom:1rem;">
            <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--text-primary);">
              <div>ASP.NET Core MVC Web Development Trainee — Ray Group</div>
              <div>2026</div>
            </div>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:0.25rem;">
              Architected full-stack enterprise web apps using C#, ASP.NET Core MVC, Clean Architecture, and Microsoft SQL Server integration.
            </p>
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--text-primary);">
              <div>Technical Track Member (Competitive Programming) — ECPC Training Community</div>
              <div>${isAr ? 'نوفمبر 2025 - الحالي' : 'Nov 2025 - Present'}</div>
            </div>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:0.25rem;">
              Solved 100+ algorithmic problems across Codeforces/LeetCode (DP, Graph Theory); Top-5 university ranking in ECPC mock competitions.
            </p>
          </div>
        </div>

        <!-- Projects -->
        <div class="cv-section">
          <div class="cv-section-title">${isAr ? 'المشاريع الهندسية' : 'Engineered Projects'}</div>
          
          <div style="margin-bottom:0.85rem;">
            <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--text-primary);">
              <div>Weather Mobile Application (Flutter, Dart, REST APIs)</div>
              <div>${isAr ? 'أبريل 2026' : 'Apr 2026'}</div>
            </div>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:0.2rem;">
              Cross-platform mobile app delivering real-time weather analytics via asynchronous RESTful APIs with dynamic state management and offline fallback handling.
            </p>
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--text-primary);">
              <div>Library Management System (Java, SQL Server, JDBC, 3NF)</div>
              <div>${isAr ? 'أبريل 2025' : 'Apr 2025'}</div>
            </div>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:0.2rem;">
              Desktop management portal with normalized 3NF database schemas and secure JDBC database communication.
            </p>
          </div>
        </div>

        <!-- Skills Summary -->
        <div class="cv-section" style="margin-bottom:0;">
          <div class="cv-section-title">${isAr ? 'المهارات التقنية واللغات' : 'Technical Skills & Languages'}</div>
          <div style="font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">
            <strong>Languages:</strong> C++, Python, C#, Java, SQL, Dart, JavaScript, HTML, CSS<br>
            <strong>Frameworks & Core:</strong> Data Engineering, ASP.NET Core MVC, Flutter, RESTful APIs, DSA, OOD, SOLID, RDBMS<br>
            <strong>Data Science:</strong> Pandas, NumPy, Matplotlib<br>
            <strong>Tools:</strong> Git, GitHub, SQL Server (SSMS), Android Studio, Visual Studio, VS Code, Jupyter Notebook<br>
            <strong>Spoken:</strong> Arabic (Native), English (Fluent)
          </div>
        </div>
      </div>
    `;
  }

  // Modal Close & Triggers
  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    state.activeModal = null;
  }

  modalCloseBtn.addEventListener('click', () => closeModal(projectModal));
  modalFooterClose.addEventListener('click', () => closeModal(projectModal));

  cvModalBtn.addEventListener('click', () => {
    renderCvContent();
    cvModal.classList.add('active');
    state.activeModal = cvModal;
  });

  heroCvBtn.addEventListener('click', () => {
    renderCvContent();
    cvModal.classList.add('active');
    state.activeModal = cvModal;
  });

  cvModalCloseBtn.addEventListener('click', () => closeModal(cvModal));
  cvFooterClose.addEventListener('click', () => closeModal(cvModal));

  // Print CV Button
  cvPrintBtn.addEventListener('click', () => {
    window.print();
  });

  // Close modals on clicking overlay background
  [projectModal, cvModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.activeModal) {
      closeModal(state.activeModal);
    }
  });

  /* --------------------------------------------------------------------------
     Terminal Simulation Interactive Logic
     -------------------------------------------------------------------------- */
  runCodeBtn.addEventListener('click', () => {
    const t = i18nData[state.lang].hero.terminal;
    runCodeBtn.disabled = true;
    terminalStatusMsg.textContent = t.runningText;
    terminalOutput.style.color = '#fbbf24';

    setTimeout(() => {
      terminalStatusMsg.textContent = t.successText;
      terminalOutput.style.color = '#10b981';
      runCodeBtn.disabled = false;
      showToast(state.lang === 'ar' ? 'تم تشغيل الاختبار بنجاح!' : 'Diagnostic passed successfully!');
    }, 900);
  });

  /* --------------------------------------------------------------------------
     Toast Notification System
     -------------------------------------------------------------------------- */
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  /* --------------------------------------------------------------------------
     Clipboard Copy Utility
     -------------------------------------------------------------------------- */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-clipboard');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const successMsg = i18nData[state.lang].contact.copySuccess;
        showToast(successMsg);
      } catch (err) {
        // Fallback for browsers with strict clipboard permissions
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast(i18nData[state.lang].contact.copySuccess);
      }
    });
  });

  /* --------------------------------------------------------------------------
     Contact Form Handler
     -------------------------------------------------------------------------- */
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const subject = document.getElementById('senderSubject').value.trim();
    const message = document.getElementById('senderMessage').value.trim();
    const submitBtn = document.getElementById('submitFormBtn');
    const submitText = document.getElementById('submitBtnText');

    const t = i18nData[state.lang].contact;

    if (!name || !email || !message) {
      showToast(t.formError, 'error');
      return;
    }

    submitBtn.disabled = true;
    submitText.textContent = t.formSending;

    // Simulate reliable async transmission
    setTimeout(() => {
      submitBtn.disabled = false;
      submitText.textContent = t.formSubmit;
      contactForm.reset();
      showToast(t.formSent);
    }, 1000);
  });

  /* --------------------------------------------------------------------------
     Navbar Scroll & Active Section Highlighting
     -------------------------------------------------------------------------- */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });

  // Close mobile menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
    });
  });

  // Active section indicator via Intersection Observer
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => observer.observe(sec));

  /* --------------------------------------------------------------------------
     Initialization
     -------------------------------------------------------------------------- */
  applyTheme(state.theme);
  applyLanguage(state.lang);
});
