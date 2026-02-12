// Feature Option I: Feedback System with LocalStorage

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackSuccess = document.getElementById('feedback-success');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('feedback-name').value;
            const type = document.getElementById('feedback-type').value;
            const message = document.getElementById('feedback-msg').value;

            // Create Feedback Object
            const feedbackItem = {
                id: Date.now(),
                name: name || 'Anonymous',
                type: type,
                message: message,
                date: new Date().toLocaleDateString()
            };

            // Save to LocalStorage
            saveFeedback(feedbackItem);

            // UI Feedback
            feedbackForm.reset();
            feedbackForm.style.display = 'none';
            feedbackSuccess.style.display = 'block';

            // Reset after 3 seconds
            setTimeout(() => {
                feedbackSuccess.style.display = 'none';
                feedbackForm.style.display = 'block';
            }, 3000);
        });
    }
});

function saveFeedback(feedback) {
    let existingFeedback = JSON.parse(localStorage.getItem('pathpilot_feedback')) || [];
    existingFeedback.push(feedback);
    localStorage.setItem('pathpilot_feedback', JSON.stringify(existingFeedback));
    console.log("Feedback saved:", feedback);
}
