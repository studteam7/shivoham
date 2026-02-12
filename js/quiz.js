// Feature 3: Interactive Career Quiz

// Quiz Data
const quizQuestions = [
    {
        id: 1,
        question: "Which subject do you enjoy studying the most?",
        options: [
            { text: "Mathematics & Physics", category: "Technology" }, // Engineering
            { text: "Biology & Chemistry", category: "Healthcare" }, // Medical
            { text: "Economics & Accounts", category: "Business" }, // Commerce
            { text: "History, Literature, or Art", category: "Creative" } // Arts
        ]
    },
    {
        id: 2,
        question: "What do you like doing in your free time?",
        options: [
            { text: "Solving puzzles or coding", category: "Technology" },
            { text: "Helping people or volunteering", category: "Healthcare" },
            { text: "Organizing events or selling things", category: "Business" },
            { text: "Drawing, writing, or designing", category: "Creative" }
        ]
    },
    {
        id: 3,
        question: "What kind of work environment do you prefer?",
        options: [
            { text: "Working with computers and data", category: "Technology" },
            { text: "Working in a hospital or lab", category: "Healthcare" },
            { text: "Working in a corporate office", category: "Business" },
            { text: "Working in a studio or outdoors", category: "Creative" }
        ]
    },
    {
        id: 4,
        question: "How do you approach a problem?",
        options: [
            { text: "Analyze it logically and find a solution", category: "Technology" },
            { text: "Think about how it affects others", category: "Healthcare" },
            { text: "Look for a profitable solution", category: "Business" },
            { text: "Think of a unique, out-of-the-box solution", category: "Creative" }
        ]
    },
    {
        id: 5,
        question: "What is your dream goal?",
        options: [
            { text: "Inventing something new", category: "Technology" },
            { text: "Saving lives or curing diseases", category: "Healthcare" },
            { text: "Running my own company", category: "Business" },
            { text: "Creating a masterpiece (art/book/film)", category: "Creative" }
        ]
    }
];

// State
let currentQuestionIndex = 0;
let scores = {
    "Technology": 0,
    "Healthcare": 0,
    "Business": 0,
    "Creative": 0
    // "Government" and "Vocational" can be secondary matches or added to questions
};

// DOM Elements
const startBtn = document.getElementById('start-quiz-btn');
const quizIntro = document.getElementById('quiz-intro');
const quizQuestionsContainer = document.getElementById('quiz-questions');
const questionCard = document.getElementById('question-card');
const progressBar = document.getElementById('progress-bar');
const quizResults = document.getElementById('quiz-results');
const resultsList = document.getElementById('results-list');
const retakeBtn = document.getElementById('retake-quiz-btn');

// Init
document.addEventListener('DOMContentLoaded', () => {
    startBtn.addEventListener('click', startQuiz);
    retakeBtn.addEventListener('click', resetQuiz);
});

function startQuiz() {
    quizIntro.style.display = 'none';
    quizQuestionsContainer.style.display = 'block';
    currentQuestionIndex = 0;
    // Reset scores
    scores = { "Technology": 0, "Healthcare": 0, "Business": 0, "Creative": 0 };
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];

    // Update Progress Bar
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    let html = `<h3>${question.question}</h3>`;
    question.options.forEach(option => {
        html += `<button class="question-option" onclick="selectAnswer('${option.category}')">${option.text}</button>`;
    });

    questionCard.innerHTML = html;
}

// Exposed to global scope for HTML onclick
window.selectAnswer = (category) => {
    // Add score
    if (scores[category] !== undefined) {
        scores[category]++;
    }

    // Next Question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
};

async function showResults() {
    quizQuestionsContainer.style.display = 'none';
    quizResults.style.display = 'block';
    progressBar.style.width = '100%';

    // Calculate Top Match
    const sortedCategories = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topCategory = sortedCategories[0][0];
    const topScore = sortedCategories[0][1];

    let resultHTML = `
        <div class="result-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
            <h4 style="color: var(--primary-color);">Your Dominant Personality: <span style="font-size: 1.5em; display:block; margin-top:10px;">${topCategory}</span></h4>
            <p>Based on your answers, you lean towards <strong>${topCategory}</strong> related fields.</p>
        </div>
        <h4>Recommended Careers:</h4>
    `;

    // Fetch matches from JSON (reusing fetched data logic would be better, but fetching again is simpler for decoupling)
    try {
        const response = await fetch('assets/data/careers.json');
        const allCareers = await response.json();

        // Filter by top category
        const matches = allCareers.filter(c => c.category === topCategory).slice(0, 3);

        if (matches.length > 0) {
            resultHTML += `<div style="display: grid; gap: 10px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">`;
            matches.forEach(career => {
                resultHTML += `
                    <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #E5E7EB;">
                        <h5>${career.title}</h5>
                        <small>${career.stream}</small>
                        <button class="btn btn-sm btn-outline" style="margin-top: 10px;" onclick="location.hash='#explore'; setTimeout(() => { navigateTo('explore'); document.getElementById('career-search').value = '${career.title}'; document.getElementById('search-btn').click(); }, 500);">View Details</button>
                    </div>
                `;
            });
            resultHTML += `</div>`;
        } else {
            resultHTML += `<p>No specific careers found, but check out the ${topCategory} section in Explore!</p>`;
        }

    } catch (e) {
        console.error(e);
        resultHTML += `<p>Could not load recommendations. Please check the Explore section.</p>`;
    }

    resultsList.innerHTML = resultHTML;
}

function resetQuiz() {
    quizResults.style.display = 'none';
    quizIntro.style.display = 'block';
    currentQuestionIndex = 0;
}
