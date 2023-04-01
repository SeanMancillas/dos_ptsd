const smellForm = document.getElementById('smellForm');
const resultList = document.getElementById('resultList');
const results = document.getElementById('results');
const planContainer = document.getElementById('planContainer');

smellForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedIndex = document.getElementById('smells').selectedIndex;
    displayResults(selectedIndex);
});

const smellsAndScents = [
    {
        smell: "Gasoline",
        scents: [
            { scent: "Ethanol", similarity: 75 },
            { scent: "Diesel", similarity: 90 },
            { scent: "Kerosene", similarity: 80 },
        ],
    },
    {
        smell: "Cigarette Smoke",
        scents: [
            { scent: "Burnt Paper", similarity: 65 },
            { scent: "Wood Smoke", similarity: 70 },
            { scent: "Charred Food", similarity: 60 },
        ],
    },
    {
        smell: "Perfume",
        scents: [
            { scent: "Floral Scented Candle", similarity: 80 },
            { scent: "Scented Lotion", similarity: 85 },
            { scent: "Air Freshener", similarity: 75 },
        ],
    },
    {
        smell: "Cleaning Products",
        scents: [
            { scent: "Lemon", similarity: 70 },
            { scent: "Pine", similarity: 80 },
            { scent: "Lavender", similarity: 65 },
        ],
    },
    // Add more smells and scents objects here
];

function displayResults(index) {
    const selectedSmell = smellsAndScents[index - 1];
    resultList.innerHTML = '';

    if (selectedSmell) {
        for (const [i, scent] of selectedSmell.scents.entries()) {
            const listItem = document.createElement('li');
            listItem.textContent = `${scent.scent} - Similarity: ${scent.similarity}% - `;

            const badge = document.createElement('span');
            badge.classList.add('ai-customized-plan');
            badge.textContent = 'AI Customized Plan';
            badge.addEventListener('click', () => displayCustomizedPlan(i));
            listItem.appendChild(badge);

            if (i === 1) {
                const trendingText = document.createElement('span');
                trendingText.classList.add('trending');
                trendingText.textContent = 'Trending with community';
                listItem.appendChild(trendingText);
            }

            resultList.appendChild(listItem);
        }
    }

    results.style.display = 'block';
}

function displayCustomizedPlan(index) {
    // Update the contents of the planContainer based on the selected scent
    planContainer.innerHTML = `
        <h2>AI Customized Plan</h2>
        <p><strong>Where to purchase the scent:</strong> [Insert information here]</p>
        <p><strong>Step-by-step instructions for safe testing:</strong></p>
        <ol>
            <li>[Step 1]</li>
            <li>[Step 2]</li>
            <li>[Step 3]</li>
            <!-- Add more steps as needed -->
        </ol>
    `;

    planContainer.style.display = 'block';
}
