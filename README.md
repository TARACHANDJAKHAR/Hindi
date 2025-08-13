# Hindi Cell - SVNIT Website

This repository contains the source code for the **Hindi Cell** website of Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat.  
The site is built with simple HTML, CSS, and images, and is designed to promote the use of the Hindi language and showcase cell activities.

---

## 📂 Project Structure

```
HindiCell-Website/
│
├── index.html          # Home page
├── about.html          # About the Hindi Cell
├── events.html         # List of events
├── resources.html      # Resources and links
├── achievements.html   # Achievements of the cell
├── contact.html        # Contact details and form
│
├── style.css           # Common stylesheet
├── .gitignore          # Git ignore file
│
├── images/             # Logos, banners, and images
│   ├── README.md       # Image requirements and specifications
│   └── favicon.ico     # Website favicon (placeholder)
│
└── downloads/          # Downloadable documents
    └── README.md       # Document requirements and specifications
```

---

## 🛠️ How to View Locally

1. Clone or download this repository:

   git clone https://github.com/TARACHANDJAKHAR/Hindi.git
   
2. Open the project folder:

   cd HindiCell-Website
   
3. Open `index.html` in your browser:
   - Double-click the file **or**
   - Run with a local server for smoother navigation:
   
     python -m http.server
     
     Then visit: **http://localhost:8000**

---

## 📑 Pages

- **Home (`index.html`)** – Welcome banner and introduction
- **About (`about.html`)** – Information about the Hindi Cell
- **Events (`events.html`)** – Upcoming and past events
- **Resources (`resources.html`)** – Tools, documents, and useful links
- **Achievements (`achievements.html`)** – Accomplishments of the cell
- **Contact (`contact.html`)** – Contact form and details

---

## 🎨 Styling

All pages share the same `style.css` file for consistent look and feel:
- Responsive header with Government of India and SVNIT logos
- Top navigation bar with hover effects and active state styling
- Animated news ticker with scrolling text
- **Dark/Light theme toggle with system preference detection**
- Smooth transitions and animations for theme switching
- Footer with copyright information
- Mobile-responsive design

### 🌙 Dark Theme Features
- **Automatic Detection**: Detects user's system theme preference
- **Manual Toggle**: Beautiful toggle button in the header (🌙/☀️)
- **Persistent**: Remembers user's choice across sessions
- **Smooth Transitions**: Elegant animations when switching themes
- **Enhanced Contrast**: Optimized colors for both light and dark modes
- **System Sync**: Automatically follows system theme changes (if no manual preference set)

---

## 📌 Current Status

✅ **Completed:**
- HTML structure for all pages
- CSS styling with responsive design
- Navigation with active state indicators
- News ticker with scrolling animation
- Lightbox functionality for event gallery
- Meta descriptions and SEO improvements
- Directory structure for images and downloads
- **Dark/Light theme toggle system**
- **System theme preference detection**
- **Smooth theme transitions and animations**

⚠️ **Next Steps:**
- Add actual images to the `images/` folder
- Add PDF documents to the `downloads/` folder
- Replace placeholder favicon with actual icon
- Consider adding a contact form backend

---

## 🚀 Advanced Features

### Theme System
The website now includes a sophisticated theme management system:
- **`theme.js`**: Centralized theme management class
- **CSS Variables**: Dynamic theming using CSS custom properties
- **Local Storage**: Persistent theme preferences
- **Media Queries**: System theme detection
- **Event System**: Custom events for theme changes

### Usage
```javascript
// Access theme manager instance
const themeManager = window.themeManager;

// Get current theme
const currentTheme = themeManager.getCurrentTheme();

// Set theme programmatically
themeManager.setTheme('dark');

// Listen for theme changes
window.addEventListener('themeChanged', (e) => {
    console.log('Theme changed to:', e.detail.theme);
});
```

---

## 📄 License

This project is created for **Hindi Cell - SVNIT**.  
Not intended for commercial use without permission.