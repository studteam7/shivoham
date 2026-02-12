# PathPilot 🚀

PathPilot is a modern, student-friendly career guidance website designed to help students (Classes 6-12) discover their perfect career path. Built with pure HTML, CSS, and JavaScript.

## 🌟 Features

### 1. Career Awareness
- Educates students on the importance of early career planning.
- Visual storytelling about the consequences of uninformed decisions.

### 2. Explore Careers (Catalog & Search)
- **Comprehensive Catalog**: Browse 25+ career options across Science, Commerce, Arts, and Vocational streams.
- **Advanced Filtering**: Filter by stream (PCM, PCB, Commerce, etc.) and category (Technology, Healthcare, Creative, etc.).
- **Smart Search**: Real-time search by title, skills, or tags.
- **Detailed Insights**: Modal view for eligibility, skills, education path, and duration.

### 3. Interactive Career Quiz
- "Find Your Match" quiz with 5-10 engaging questions.
- Analyzes interests and personality to suggest the best-fit career category.
- Provides personalized career recommendations based on quiz results.

### 4. Feedback System
- Integrated feedback form to collect user suggestions and bug reports.
- Data is persisted locally using browser `localStorage`.

## 🛠️ Technical Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+).
- **Styling**: CSS Variables, Grid, Flexbox, Responsive Media Queries.
- **Icons**: FontAwesome.
- **Fonts**: Google Fonts (Poppins, Inter).
- **Data**: JSON-based data management.

## 📂 Project Structure

```
pathpilot/
│
├── index.html          # Main application entry point
├── css/
│   ├── style.css       # Global styles and variables
│   └── responsive.css  # Mobile and Tablet adaptations
├── js/
│   ├── main.js         # Navigation and SPA logic
│   ├── careers.js      # Discovery, Search, and Modal logic
│   ├── quiz.js         # Quiz state and matching logic
│   └── feedback.js     # Feedback form handling
└── assets/
    └── data/
        └── careers.json # Career database (25+ entries)
```

## 🚀 How to Run
1.  **Clone or Download** this repository.
2.  Open the folder in your code editor (VS Code recommended).
3.  Open `index.html` in your browser (Double click or use Live Server).
4.  No backend server or installation required!

## 📱 Mobile First
PathPilot is optimized for:
- **Mobile**: Stacked layouts, hamburger menu, touch-friendly targets.
- **Tablet**: Adaptive grids for career cards.
- **Desktop**: Full wide-screen experience.

## ❤️ Credits
- **Icons**: FontAwesome
- **Fonts**: Google Fonts
- **Concept**: PathPilot EdTech Initiative

---
*Helping students pilot their future, one click at a time.*
