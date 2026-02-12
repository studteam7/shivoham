// Feature 2: Career Discovery & Option C: Advanced Search

// State for careers
// Data embedded directly to ensure it works without a local server (file:// protocol compatibility)
const allCareers = [
    {
        "id": 1,
        "title": "Software Engineer",
        "category": "Technology",
        "stream": "Science (PCM)",
        "description": "Design, develop, and test software applications and systems.",
        "eligibility": "Class 12 Science (PCM)",
        "skills": ["Coding", "Problem Solving", "Logic"],
        "education": "B.Tech in CS/IT or BCA",
        "duration": "4 Years",
        "nextSteps": ["JEE Mains", "State Entrance Exams"],
        "tags": ["high-paying", "desk-job"]
    },
    {
        "id": 2,
        "title": "Doctor (MBBS)",
        "category": "Healthcare",
        "stream": "Science (PCB)",
        "description": "Diagnose and treat patients' illnesses and injuries.",
        "eligibility": "Class 12 Science (PCB)",
        "skills": ["Empathy", "Biology", "Patience"],
        "education": "MBBS",
        "duration": "5.5 Years",
        "nextSteps": ["NEET UG"],
        "tags": ["essential", "respected"]
    },
    {
        "id": 3,
        "title": "Chartered Accountant",
        "category": "Business",
        "stream": "Commerce",
        "description": "Manage financial accounts, improved budgeting, and auditing.",
        "eligibility": "Class 12 Commerce",
        "skills": ["Accounting", "Math", "Analysis"],
        "education": "CA Foundation -> Inter -> Final",
        "duration": "4-5 Years",
        "nextSteps": ["Register with ICAI"],
        "tags": ["finance", "professional"]
    },
    {
        "id": 4,
        "title": "Graphic Designer",
        "category": "Creative",
        "stream": "Arts/Humanities",
        "description": "Create visual concepts to communicate ideas that inspire and captivate.",
        "eligibility": "Class 12 (Any Stream)",
        "skills": ["Creativity", "Software Tools", "Visual Eye"],
        "education": "B.Des or Diploma in Graphic Design",
        "duration": "3-4 Years",
        "nextSteps": ["Design Entrance Exams (NID, NIFT)"],
        "tags": ["agencies", "freelance"]
    },
    {
        "id": 5,
        "title": "Civil Services (IAS/IPS)",
        "category": "Government",
        "stream": "Any Stream",
        "description": "Serve the nation by implementing government policies and administration.",
        "eligibility": "Any Graduate",
        "skills": ["Leadership", "General Knowledge", "Ethics"],
        "education": "Bachelor's Degree",
        "duration": "3 Years (Degree) + Prep",
        "nextSteps": ["UPSC CSE Exam"],
        "tags": ["prestigious", "public-service"]
    },
    {
        "id": 6,
        "title": "Data Scientist",
        "category": "Technology",
        "stream": "Science (PCM)",
        "description": "Analyze complex data to help organizations make better decisions.",
        "eligibility": "Class 12 Science (PCM)",
        "skills": ["Statistics", "Programming", "Machine Learning"],
        "education": "B.Tech or B.Sc in Data Science/Stats",
        "duration": "3-4 Years",
        "nextSteps": ["Entrance Exams"],
        "tags": ["trending", "analytical"]
    },
    {
        "id": 7,
        "title": "Psychologist",
        "category": "Healthcare",
        "stream": "Arts/Humanities",
        "description": "Study human behavior and help people manage mental health issues.",
        "eligibility": "Class 12 (preferably Psychology)",
        "skills": ["Listening", "Empathy", "Analysis"],
        "education": "BA/B.Sc Psychology -> MA/M.Sc",
        "duration": "5 Years (with Masters)",
        "nextSteps": ["University Entrance Exams"],
        "tags": ["mental-health", "counseling"]
    },
    {
        "id": 8,
        "title": "Investment Banker",
        "category": "Business",
        "stream": "Commerce",
        "description": "Help companies and governments raise capital and provide financial advice.",
        "eligibility": "Class 12 Commerce/Science",
        "skills": ["Finance", "Communication", "Math"],
        "education": "B.Com/BBA -> MBA (Finance)",
        "duration": "5-6 Years",
        "nextSteps": ["CAT/GMAT for MBA"],
        "tags": ["high-stress", "wealth"]
    },
    {
        "id": 9,
        "title": "Architect",
        "category": "Creative",
        "stream": "Science (PCM)",
        "description": "Plan and design houses, factories, office buildings, and other structures.",
        "eligibility": "Class 12 Science (PCM)",
        "skills": ["Drawing", "Math", "Creativity"],
        "education": "B.Arch",
        "duration": "5 Years",
        "nextSteps": ["NATA / JEE Main Paper 2"],
        "tags": ["construction", "design"]
    },
    {
        "id": 10,
        "title": "Commercial Pilot",
        "category": "Vocational",
        "stream": "Science (PCM)",
        "description": "Fly aircraft to transport passengers and cargo.",
        "eligibility": "Class 12 Science (PCM)",
        "skills": ["Focus", "Technical Knowledge", "Health"],
        "education": "CPL Training",
        "duration": "18-24 Months",
        "nextSteps": ["DGCA Exams", "Flight Training"],
        "tags": ["travel", "adventure"]
    },
    {
        "id": 11,
        "title": "Journalist",
        "category": "Creative",
        "stream": "Arts/Humanities",
        "description": "Research, write, and report news stories for media outlets.",
        "eligibility": "Class 12 (Any Stream)",
        "skills": ["Writing", "Curiosity", "Communication"],
        "education": "BJMC (Bachelor of Journalism)",
        "duration": "3 Years",
        "nextSteps": ["Media Entrance Exams"],
        "tags": ["media", "news"]
    },
    {
        "id": 12,
        "title": "Biotechnologist",
        "category": "Technology",
        "stream": "Science (PCB/PCM)",
        "description": "Use living systems to develop products like medicines and food.",
        "eligibility": "Class 12 Science",
        "skills": ["Biology", "Lab Skills", "Research"],
        "education": "B.Tech/B.Sc Biotechnology",
        "duration": "3-4 Years",
        "nextSteps": ["Entrance Exams"],
        "tags": ["research", "innovation"]
    },
    {
        "id": 13,
        "title": "Hotel Management",
        "category": "Vocational",
        "stream": "Any Stream",
        "description": "Manage operations in hotels, resorts, and hospitality businesses.",
        "eligibility": "Class 12 (Any Stream)",
        "skills": ["Communication", "Service", "Management"],
        "education": "BHM / B.Sc Hospitality",
        "duration": "3-4 Years",
        "nextSteps": ["NCHMCT JEE"],
        "tags": ["hospitality", "customer-service"]
    },
    {
        "id": 14,
        "title": "Lawyer",
        "category": "Government",
        "stream": "Any Stream",
        "description": "Advise and represent clients in legal matters.",
        "eligibility": "Class 12 (Any Stream)",
        "skills": ["Argument", "Reading", "Logic"],
        "education": "BA LLB (Integrated)",
        "duration": "5 Years",
        "nextSteps": ["CLAT", "AILET"],
        "tags": ["court", "legal"]
    },
    {
        "id": 15,
        "title": "Fashion Designer",
        "category": "Creative",
        "stream": "Any Stream",
        "description": "Design clothing and accessories depending on trends.",
        "eligibility": "Class 12 (Any Stream)",
        "skills": ["Drawing", "Trend Awareness", "Creativity"],
        "education": "B.Des in Fashion Design",
        "duration": "4 Years",
        "nextSteps": ["NIFT Entrance"],
        "tags": ["fashion", "glamour"]
    },
    {
        "id": 16,
        "title": "Digital Marketer",
        "category": "Business",
        "stream": "Any Stream",
        "description": "Promote products and brands using digital channels.",
        "eligibility": "Class 12 (Varied)",
        "skills": ["Social Media", "Analytics", "Creativity"],
        "education": "BBA / Certificate Courses",
        "duration": "3-6 Months (Cert) to 3 Years (Degree)",
        "nextSteps": ["Online Certifications"],
        "tags": ["online", "marketing"]
    },
    {
        "id": 17,
        "title": "Nurse",
        "category": "Healthcare",
        "stream": "Science (PCB)",
        "description": "Provide care to patients and assist doctors.",
        "eligibility": "Class 12 Science (PCB)",
        "skills": ["Care", "Medical Knowledge", "Patience"],
        "education": "B.Sc Nursing",
        "duration": "4 Years",
        "nextSteps": ["Nursing Entrance Exams"],
        "tags": ["care", "essential"]
    },
    {
        "id": 18,
        "title": "Merchant Navy Officer",
        "category": "Vocational",
        "stream": "Science (PCM)",
        "description": "Operate and manage commercial ships.",
        "eligibility": "Class 12 Science (PCM)",
        "skills": ["Physical Fitness", "Technical", "Discipline"],
        "education": "B.Sc Nautical Science / B.Tech Marine",
        "duration": "3-4 Years",
        "nextSteps": ["IMU CET"],
        "tags": ["sea", "adventure"]
    },
    {
        "id": 19,
        "title": "Teacher / Professor",
        "category": "Government",
        "stream": "Any Stream",
        "description": "Educate students in schools or colleges.",
        "eligibility": "Graduate + B.Ed (School) / PhD (College)",
        "skills": ["Communication", "Patience", "Knowledge"],
        "education": "B.Ed / Masters",
        "duration": "2-5 Years post-grad",
        "nextSteps": ["CTET / NET"],
        "tags": ["education", "respect"]
    },
    {
        "id": 20,
        "title": "Interior Designer",
        "category": "Creative",
        "stream": "Any Stream",
        "description": "Design functional and safe indoor spaces.",
        "eligibility": "Class 12 (Any Stream)",
        "skills": ["Creativity", "Spatial Awareness", "Color"],
        "education": "B.Des Interior Design",
        "duration": "4 Years",
        "nextSteps": ["Design Entrance"],
        "tags": ["homes", "decor"]
    },
    {
        "id": 21,
        "title": "Mechanical Engineer",
        "category": "Technology",
        "stream": "Science (PCM)",
        "description": "Design and manufacture mechanical systems.",
        "eligibility": "Class 12 Science (PCM)",
        "skills": ["Physics", "Math", "Machines"],
        "education": "B.Tech Mechanical",
        "duration": "4 Years",
        "nextSteps": ["JEE / State Exams"],
        "tags": ["machines", "core"]
    },
    {
        "id": 22,
        "title": "Company Secretary",
        "category": "Business",
        "stream": "Commerce",
        "description": "Ensure company complies with legal and statutory regulations.",
        "eligibility": "Class 12 (Any Stream but Commerce preferred)",
        "skills": ["Law", "Compliance", "Management"],
        "education": "CS Foundation -> Executive -> Professional",
        "duration": "3-4 Years",
        "nextSteps": ["Register with ICSI"],
        "tags": ["corporate", "law"]
    },
    {
        "id": 23,
        "title": "Artist / Painter",
        "category": "Creative",
        "stream": "Arts/Humanities",
        "description": "Create original works of art.",
        "eligibility": "Class 12 (Any Stream)",
        "skills": ["Artistic", "Imagination", "Skill"],
        "education": "BFA (Bachelor of Fine Arts)",
        "duration": "4 Years",
        "nextSteps": ["Art School Entrance"],
        "tags": ["freelance", "expression"]
    },
    {
        "id": 24,
        "title": "Pharmacist",
        "category": "Healthcare",
        "stream": "Science (PCB)",
        "description": "Dispense medications and advise patients on usage.",
        "eligibility": "Class 12 Science (PCB)",
        "skills": ["Chemistry", "Detail-oriented", "Ethics"],
        "education": "B.Pharma",
        "duration": "4 Years",
        "nextSteps": ["Pharmacy Entrance"],
        "tags": ["medicine", "retail"]
    },
    {
        "id": 25,
        "title": "Indian Army Officer",
        "category": "Government",
        "stream": "Any Stream",
        "description": "Serve in the land-based branch of the Indian Armed Forces.",
        "eligibility": "Class 12 (NDA) or Graduate (CDS)",
        "skills": ["Courage", "Leadership", "Fitness"],
        "education": "NDA Training / IMA",
        "duration": "3-4 Years Training",
        "nextSteps": ["NDA / CDS Exam"],
        "tags": ["patriotism", "defense"]
    },
    {
        "id": 26,
        "title": "Plumber",
        "category": "Vocational",
        "stream": "Any Stream",
        "description": "Install and repair piping systems and fixtures.",
        "eligibility": "Class 10 + ITI Certification",
        "skills": ["Problem Solving", "Physical Stamina", "Technical Skills"],
        "education": "ITI in Plumbing",
        "duration": "1-2 Years",
        "nextSteps": ["Apprenticeship"],
        "tags": ["essential", "hands-on"]
    },
    {
        "id": 27,
        "title": "Electrician",
        "category": "Vocational",
        "stream": "Any Stream",
        "description": "Install and maintain electrical systems in buildings.",
        "eligibility": "Class 10 + ITI Certification",
        "skills": ["Safety Focus", "Technical Knowledge", "Precision"],
        "education": "ITI in Electrician Trade",
        "duration": "2 Years",
        "nextSteps": ["Apprenticeship", "Licensing"],
        "tags": ["essential", "skilled-trade"]
    },
    {
        "id": 28,
        "title": "Lab Technician",
        "category": "Healthcare",
        "stream": "Science (PCB)",
        "description": "Perform tests and analyze results in medical labs.",
        "eligibility": "Class 12 Science + DMLT",
        "skills": ["Attention to Detail", "Lab Safety", "Equipment Handling"],
        "education": "Diploma in Medical Lab Technology (DMLT)",
        "duration": "2 Years",
        "nextSteps": ["B.Sc MLT"],
        "tags": ["lab", "healthcare"]
    }
];

// DOM Elements
const careerGrid = document.getElementById('career-grid');
const searchInput = document.getElementById('career-search');
const searchBtn = document.getElementById('search-btn');
const streamFilter = document.getElementById('stream-filter');
const categoryFilter = document.getElementById('category-filter');
const resetBtn = document.getElementById('reset-filters');
const modal = document.getElementById('career-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Init
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderCareers(allCareers);

    // Event Listeners
    searchBtn.addEventListener('click', filterCareers);
    searchInput.addEventListener('input', debounce(filterCareers, 300));
    streamFilter.addEventListener('change', filterCareers);
    categoryFilter.addEventListener('change', filterCareers);
    resetBtn.addEventListener('click', resetFilters);

    // Modal Close
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});

// Fetch Data - REMOVED to prevent CORS issues
/*
async function fetchCareers() {
    try {
        const response = await fetch('assets/data/careers.json');
        if (!response.ok) throw new Error('Failed to load career data');
        
        allCareers = await response.json();
        renderCareers(allCareers);
    } catch (error) {
        console.error("Error fetching careers:", error);
        careerGrid.innerHTML = `<p class="error-msg">Failed to load careers. Please try again later.</p>`;
    }
}
*/

// Render Careers
function renderCareers(careers) {
    careerGrid.innerHTML = '';

    if (careers.length === 0) {
        careerGrid.innerHTML = `<p class="no-results">No careers found matching your criteria.</p>`;
        return;
    }

    careers.forEach(career => {
        const card = document.createElement('div');
        card.classList.add('career-card');
        card.innerHTML = `
            <div class="career-card-header">
                <div>
                    <h4>${career.title}</h4>
                    <small>${career.category}</small>
                </div>
                <div class="career-icon-box">
                    <i class="fas fa-briefcase"></i>
                </div>
            </div>
            <div class="career-card-body">
                <p>${career.description.substring(0, 80)}...</p>
                <div class="career-tags">
                    <span>${career.stream}</span>
                    <span>${career.duration}</span>
                </div>
            </div>
            <div class="career-card-footer">
                <button class="btn btn-outline btn-sm" onclick="showCareerDetails(${career.id})">View Details</button>
            </div>
        `;
        careerGrid.appendChild(card);
    });
}

// Filter Logic
function filterCareers() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedStream = streamFilter.value;
    const selectedCategory = categoryFilter.value;

    const filtered = allCareers.filter(career => {
        const matchesSearch = career.title.toLowerCase().includes(searchTerm) ||
            career.skills.some(s => s.toLowerCase().includes(searchTerm)) ||
            career.tags.some(t => t.toLowerCase().includes(searchTerm));

        const matchesStream = selectedStream === 'all' || career.stream.includes(selectedStream) || (selectedStream === 'Science (PCM)' && career.stream.includes('Science')); // Simple stream logic

        // Refined Logic for Stream
        // If specific stream selected (e.g. PCM), include "Any Stream" or specific match
        // For simplicity in this demo, we check simple includes or exact matches for 'Any Stream' handling
        const streamCheck = checkStreamMatch(career.stream, selectedStream);

        const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory;

        return matchesSearch && streamCheck && matchesCategory;
    });

    renderCareers(filtered);
}

function checkStreamMatch(careerStream, filterStream) {
    if (filterStream === 'all') return true;
    if (careerStream === 'Any Stream') return true; // Careers open to all
    if (careerStream.includes(filterStream)) return true;

    // Special case for Science
    if (filterStream.startsWith('Science') && careerStream === 'Class 12 Science') return true;

    return false;
}

function resetFilters() {
    searchInput.value = '';
    streamFilter.value = 'all';
    categoryFilter.value = 'all';
    renderCareers(allCareers);
}

// Global scope for HTML onclick
window.showCareerDetails = (id) => {
    const career = allCareers.find(c => c.id === id);
    if (!career) return;

    const modalContent = `
        <h2 style="color: var(--primary-color)">${career.title}</h2>
        <p class="subtitle" style="color: #6B7280; margin-bottom: 20px;">${career.category} | ${career.stream}</p>
        
        <div class="detail-section">
            <h4>Description</h4>
            <p>${career.description}</p>
        </div>

        <div style="display: flex; gap: 20px; margin-top: 20px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 200px;">
                <h4><i class="fas fa-check-circle" style="color: var(--accent-color)"></i> Eligibility</h4>
                <p>${career.eligibility}</p>
            </div>
             <div style="flex: 1; min-width: 200px;">
                <h4><i class="fas fa-clock" style="color: var(--secondary-color)"></i> Duration</h4>
                <p>${career.duration}</p>
            </div>
        </div>

        <div class="detail-section" style="margin-top: 20px;">
            <h4>Education Path</h4>
            <p class="edu-path"><i class="fas fa-graduation-cap"></i> ${career.education}</p>
        </div>
        
        <div class="detail-section" style="margin-top: 20px;">
            <h4>Key Skills</h4>
            <div class="skills-list">
                ${career.skills.map(skill => `<span class="skill-tag" style="background: #E5E7EB; padding: 5px 10px; border-radius: 15px; margin-right: 5px; display: inline-block;">${skill}</span>`).join('')}
            </div>
        </div>

         <div class="detail-section" style="margin-top: 20px;">
            <h4>Next Steps</h4>
             <ul style="list-style-type: disc; padding-left: 20px;">
                ${career.nextSteps.map(step => `<li>${step}</li>`).join('')}
            </ul>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

// Debounce Utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
