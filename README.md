# Kareem Mohamed — Professional Portfolio Website

A modern, clean, and fully responsive portfolio website engineered for **Kareem Mohamed** (Computer Science Student & Data Engineering Trainee at DEPI), built strictly using pure **HTML5, CSS3, and modern JavaScript (ES6+)**.

---

## 🎨 Design & Aesthetic Guidelines

- **Monochromatic Palette**: Built on deep charcoal/off-black backgrounds (`#121212`), crisp white headings (`#f5f5f7`), and sophisticated neutral slate/gray accents (`#71717a`, `#a1a1aa`, `rgba(255,255,255,0.08)`).
- **Strictly NO Personal Photos**: Replaced portrait placeholders with an interactive **Bento Code Terminal** (`kareem_profile.py`) with line-by-line syntax highlighting and dynamic test runner, alongside a live **Data Pipeline Visualizer** (Raw Data ➔ Pandas/NumPy ➔ SQL Server ➔ Analytics).
- **Typography**: Google Fonts [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for Latin, [`Cairo`](https://fonts.google.com/specimen/Cairo) for Arabic, and [`JetBrains Mono`](https://fonts.google.com/specimen/JetBrains+Mono) for code syntax.

---

## 🚀 Key Features

1. **Bilingual Support (i18n)**:
   - Full toggle between **English** and **Arabic (العربية)**.
   - Dynamic direction flipping (`dir="ltr"` ↔ `dir="rtl"`) with mirrored layouts, typography, arrows, and timeline indicators.
   - Complete professional Arabic translations for every section, coursework item, skill, experience, project, contact info, and modal.
2. **Persistent Theme Switcher**:
   - Smooth toggle between **Dark Mode** and **Light Mode**.
   - Preserves state across browser sessions via `localStorage`.
3. **Interactive Bento Terminal**:
   - Live code simulation with an interactive `Execute` button that triggers simulated execution and diagnostic verification.
4. **Interactive Technical Skills Matrix**:
   - Filter tabs: *All Skills*, *Languages*, *Frameworks & Core*, *Data Science*, *Tools & RDBMS*.
   - Custom monochromatic SVG icons and proficiency badges for all 24 tracked technologies.
5. **Detailed Project Modals**:
   - Architectural breakdown, system design diagrams, key features, and source code shortcuts for both featured projects.
6. **Curriculum Vitae (CV) Modal & PDF Export**:
   - Clean printable resume view with a one-click `Print / Save PDF` action configured with `@media print` styling.
7. **Interactive Contact Channels**:
   - Click-to-copy utility for email (`km6482271@gmail.com`) and phone (`(+20) 10-1392-9964`) with toast notifications.
   - Working contact form with real-time field validation and simulated transmission states.

---

## 📁 Project Structure

```
portfolio_2/
├── index.html            # Semantic HTML5 structure with bilingual data attributes & accessible elements
├── css/
│   └── style.css         # Modern CSS3 with custom variables, grid/flexbox, animations, RTL & print styles
├── js/
│   ├── translations.js   # Complete bilingual dictionary (EN & AR) and skills dataset
│   └── main.js           # Core state management, i18n switcher, theme switcher, modal & toast handlers
└── README.md             # Project documentation and specifications
```

---

## 💻 How to Run Locally

You can run the portfolio locally using any standard static file server or directly by opening `index.html` in your web browser:

### Option 1: Python HTTP Server (Recommended)
```bash
python -m http.server 8080
```
Then navigate to: `http://localhost:8080`

### Option 2: Node.js (npx serve)
```bash
npx serve .
```

### Option 3: Direct File Opening
Double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari.

---

## 👤 Profile Data Summary

- **Name**: Kareem Mohamed
- **Role**: Computer Science Student & Data Engineering Trainee (DEPI)
- **Institution**: Modern Academy for Engineering and Technology (B.Sc. in Computer Science, GPA: 3.2/4.0, Expected July 2028)
- **Track**: Digital Egypt Pioneers Initiative (DEPI) Data Engineering Trainee & ECPC Algorithmic Track (100+ solved problems)
- **Contact**: km6482271@gmail.com | (+20) 10-1392-9964 | [LinkedIn](https://linkedin.com/in/kareemmohamed) | [GitHub](https://github.com/Kareem19mohamed)
