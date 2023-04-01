document.getElementById("smellForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const smellSelection = document.getElementById("smells").value;
    const resultsContainer = document.getElementById("results");
    const resultList = document.getElementById("resultList");

    if (smellSelection === "1") {
        resultList.innerHTML = `
            <li>
                Diesel Fuel Scented Candle
                <span class="badge">AI Customized Plan</span>
            </li>
            <!-- Add other results as needed -->
        `;
        resultsContainer.style.display = "block";
    } else {
        resultsContainer.style.display = "none";
    }
});

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("badge")) {
        const planContainer = document.getElementById("planContainer");
        planContainer.innerHTML = `
            <h2>AI Customized Plan</h2>
            <p>
                Where to purchase the scent:
                <a href="https://www.amazon.com/Boostnatics-Diesel-Fuel-Scented-Candle/dp/B06XDNBX69">Boostnatics Diesel Fuel Scented Candle [$23.95]</a>
            </p>
            <p>How to test in a safe way via step-by-step instructions:</p>
            <ol>
                <li>...</li>
                <!-- Add the steps here -->
            </ol>
            <button onclick="startExposure()">Start the exposure</button>
        `;
        planContainer.style.display = "block";
    }
});

let timer;
let timerRunning = false;
let timeLeft = 300; // In seconds

function startExposure() {
    document.getElementById("timerSection").style.display = "block";
    timerRunning = true;
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        timerRunning = false;
        showFeedbackModal();
    } else {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById("timer").innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
}

function pauseResumeTimer() {
    if (timerRunning) {
        clearInterval(timer);
        timerRunning = false;
        document.getElementById("pauseResumeBtn").innerText = "Resume";
    } else {
        timer = setInterval(updateTimer, 1000);
        timerRunning = true;
        document.getElementById("pauseResumeBtn").innerText = "Pause";
    }
}

function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    timeLeft = 300;
    document.getElementById("timer").innerText = "05:00";
    document.getElementById("pauseResumeBtn").innerText = "Pause";
}

function showFeedbackModal() {
    document.getElementById("feedbackModal").style.display = "block";
}

function submitFeedback() {
    document.getElementById("feedbackModal").style.display = "none";
}
