document.addEventListener('DOMContentLoaded', () => {
    // Inject Chatbot HTML
    const chatbotHTML = `
        <button id="chat-widget-btn" class="chat-widget-btn">
            <i class="fas fa-robot"></i>
        </button>
        <div id="chat-window" class="chat-window">
            <div class="chat-header">
                <h3><i class="fas fa-robot"></i> PathPilot Assistant</h3>
                <button id="close-chat" class="close-chat"><i class="fas fa-times"></i></button>
            </div>
            <div id="chat-messages" class="chat-messages">
                <!-- Messages will appear here -->
            </div>
            <div class="chat-input-area">
                <div id="chat-options" class="chat-options">
                    <!-- Options buttons will appear here -->
                </div>
            </div>
        </div>
    `;

    // Create a container for the chatbot and append to body
    const chatContainer = document.createElement('div');
    chatContainer.innerHTML = chatbotHTML;
    document.body.appendChild(chatContainer);

    // Elements
    const chatBtn = document.getElementById('chat-widget-btn');
    const chatWindow = document.getElementById('chat-window');
    const closeBtn = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');

    // State
    let isOpen = false;

    // Toggle Chat
    function toggleChat() {
        isOpen = !isOpen;
        if (isOpen) {
            chatWindow.classList.add('active');
            if (chatMessages.children.length === 0) {
                initChat();
            }
        } else {
            chatWindow.classList.remove('active');
        }
    }

    chatBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Chat Logic
    function addMessage(text, isUser = false) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message');
        msgDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addOptions(options) {
        chatOptions.innerHTML = '';
        options.forEach(option => {
            const btn = document.createElement('button');
            btn.classList.add('chat-option-btn');
            btn.textContent = option.text;
            btn.onclick = () => handleOptionClick(option);
            chatOptions.appendChild(btn);
        });
    }

    function handleOptionClick(option) {
        addMessage(option.text, true);
        chatOptions.innerHTML = ''; // Clear options

        // Simulate thinking delay
        setTimeout(() => {
            if (option.action) {
                option.action();
            } else if (option.nextId) {
                renderStep(option.nextId);
            }
        }, 500);
    }

    // Chat Flow Data
    const chatFlow = {
        start: {
            text: "Hi there! I'm your PathPilot assistant. How can I help you today?",
            options: [
                { text: "Help me find a career", nextId: 'stream_selection' },
                { text: "I'm confused about my stream", nextId: 'stream_advice' },
                { text: "Looking for specific career info", nextId: 'search_help' }
            ]
        },
        stream_selection: {
            text: "Great! Let's start with your interests. Which subject do you enjoy the most?",
            options: [
                { text: "Science & Math (PCM)", nextId: 'pcm_careers' },
                { text: "Biology & Health (PCB)", nextId: 'pcb_careers' },
                { text: "Money & Business (Commerce)", nextId: 'commerce_careers' },
                { text: "Arts, History & Creativity", nextId: 'arts_careers' }
            ]
        },
        stream_advice: {
            text: "Choosing a stream is crucial. \n\nScience: For engineering/medical.\nCommerce: For finance/business.\nArts: For creative/civil services.\n\nWhat sounds most like you?",
            options: [
                { text: "I like building things/Logic", nextId: 'pcm_careers' },
                { text: "I like helping people/Biology", nextId: 'pcb_careers' },
                { text: "I like managing money", nextId: 'commerce_careers' },
                { text: "I like writing/designing", nextId: 'arts_careers' }
            ]
        },
        search_help: {
            text: "You can use the 'Explore Careers' section to search for specific jobs like 'Doctor', 'Pilot', or 'Designer'. Would you like me to take you there?",
            options: [
                {
                    text: "Yes, take me there", action: () => {
                        toggleChat();
                        window.location.hash = 'explore';
                        navigateTo('explore'); // Assuming navigateTo is global from main.js
                    }
                },
                { text: "No, ask something else", nextId: 'start' }
            ]
        },
        // Career Suggestions
        pcm_careers: {
            text: "Based on Science (PCM), you might like these:",
            options: [
                { text: "Software Engineer", action: () => showCareer(1) },
                { text: "Mechanical Engineer", action: () => showCareer(21) },
                { text: "Architect", action: () => showCareer(9) },
                { text: "Pilot", action: () => showCareer(10) },
                { text: "Start Over", nextId: 'start' }
            ]
        },
        pcb_careers: {
            text: "Based on Science (PCB), consider these:",
            options: [
                { text: "Doctor (MBBS)", action: () => showCareer(2) },
                { text: "Nurse", action: () => showCareer(17) },
                { text: "Pharmacist", action: () => showCareer(24) },
                { text: "Biotechnologist", action: () => showCareer(12) },
                { text: "Start Over", nextId: 'start' }
            ]
        },
        commerce_careers: {
            text: "For Commerce lovers, these are great options:",
            options: [
                { text: "Chartered Accountant", action: () => showCareer(3) },
                { text: "Investment Banker", action: () => showCareer(8) },
                { text: "Company Secretary", action: () => showCareer(22) },
                { text: "Digital Marketer", action: () => showCareer(16) },
                { text: "Start Over", nextId: 'start' }
            ]
        },
        arts_careers: {
            text: "Arts & Humanities allow for these creative paths:",
            options: [
                { text: "Civil Services (IAS)", action: () => showCareer(5) },
                { text: "Graphic Designer", action: () => showCareer(4) },
                { text: "Journalist", action: () => showCareer(11) },
                { text: "Psychologist", action: () => showCareer(7) },
                { text: "Start Over", nextId: 'start' }
            ]
        }
    };

    function renderStep(stepId) {
        const step = chatFlow[stepId];
        addMessage(step.text);
        if (step.options) {
            addOptions(step.options);
        }
    }

    function initChat() {
        renderStep('start');
    }

    function showCareer(id) {
        addMessage("Opening details for you...");
        setTimeout(() => {
            toggleChat();
            window.showCareerDetails(id); // Using the global function from careers.js
        }, 800);
    }
});
