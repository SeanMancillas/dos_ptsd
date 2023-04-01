document.getElementById("smellForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedSmell = document.getElementById("smells").value;

    if (selectedSmell) {
        document.getElementById("results").style.display = "block";
        const resultList = document.getElementById("resultList");

        // Display sample data for demo purposes
        resultList.innerHTML = `
            <li><span class="ai-customized-plan">AI Customized Plan</span> Diesel <span class="trending">(Trending with community)</span></li>
            <li><span class="ai-customized-plan">AI Customized Plan</span> Gasoline</li>
            <li><span class="ai-customized-plan">AI Customized Plan</span> Kerosene</li>
        `;

        // Display Diesel AI Customized Plan if selected smell is "Gasoline"
        if (selectedSmell === "1") {
            const planContainer = document.getElementById("planContainer");
            planContainer.innerHTML = `
                <h2>AI Customized Plan: Diesel</h2>
                <h3>Where to purchase the scent:</h3>
                <p><a href="https://www.amazon.com/Boostnatics-Diesel-Fuel-Scented-Candle/dp/B06XDNBX69">Boostnatics Diesel Fuel Scented Candle [$23.95]</a></p>
                <h3>How to test in a safe way:</h3>
                <ol>
                    <li>Find a quiet, comfortable, and well-ventilated space where you can practice the exposure exercise.</li>
                    <!-- Add the rest of the steps here -->
                </ol>
                <button onclick="startExposure()">Start the exposure</button>
            `;
        }
    }
});

function startExposure() {
    document.getElementById("timerSection").style.display = "block";
    startTimer();
}

let timerInterval;
let remainingSeconds = 5 * 60;

function startTimer() {
    timerInterval = setInterval(function () {
        remainingSeconds--;

        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;

        document.getElementById("timer").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        if (remainingSeconds === 0) {
            clearInterval(timerInterval);
            playBeeps();
            showFeedbackModal();
        }
    }, 1000);
}

function pauseResumeTimer() {
    const pauseResumeBtn = document.getElementById("pauseResumeBtn");
    if (pauseResumeBtn.textContent === "Pause") {
        clearInterval(timerInterval);
        pauseResumeBtn.textContent = "Resume";
    } else {
        startTimer();
        pauseResumeBtn.textContent = "Pause";
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    remainingSeconds = 5 * 60;
    document.getElementById("timer").textContent = "05:00";
    document.getElementById("pauseResumeBtn").textContent = "Pause";
}

function playBeeps() {
    const beep = new Audio("assets/beep.mp3");
    beep.play();
    setTimeout(() => beep.play(), 1000);
    setTimeout(() => beep.play(), 2000);
}

function showFeedbackModal() {
    document.getElementById("feedbackModal").style.display = "block";
}

function submitFeedback() {
    document.getElementById("feedbackModal").style.display = "none";
    // Process the feedback data as needed
}
