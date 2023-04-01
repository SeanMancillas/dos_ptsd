const smellForm = document.getElementById('smellForm');
const resultList = document.getElementById('resultList');
const results = document.getElementById('results');

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
        for (const scent of selectedSmell.scents) {
            const listItem = document.createElement('li');
            listItem.textContent = `${scent.scent} - Similarity: ${scent.similarity}% - Plan: [Customized plan]`;
            resultList.appendChild(listItem);
        }
    }

    results.style.display = 'block';
}
