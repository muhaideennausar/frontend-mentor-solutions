const summaryList = document.getElementById("summary-list");
const averageScoreEl = document.getElementById("average-score");
const resultLabelEl = document.getElementById("result-label");
const resultDescriptionEl = document.getElementById("result-description");

const categoryClassMap = {
    Reaction: {
        wrapper: "result-card result-reaction",
        text: "medium-18-red",
        alt: "2D Illustration of Energy Icon"
    },
    Memory: {
        wrapper: "result-card result-memory",
        text: "medium-18-orange",
        alt: "2D Illustration of Memory Icon"
    },
    Verbal: {
        wrapper: "result-card result-verbal",
        text: "medium-18-green",
        alt: "2D Illustration of Chat Bubble Icon"
    },
    Visual: {
        wrapper: "result-card result-visual",
        text: "medium-18-blue",
        alt: "2D Illustration of Eye Icon"
    }
};

function getResultDetails(score) {
    if (score >= 90) {
        return {
            label: "Excellent",
            description: "You scored higher than most of the people who have taken these tests."
        };
    }

    if (score >= 75) {
        return {
            label: "Great",
            description: "You scored higher than 65% of the people who have taken these tests."
        };
    }

    if (score >= 60) {
        return {
            label: "Good",
            description: "You performed well and showed strong results across multiple areas."
        };
    }

    return {
        label: "Keep going",
        description: "You can improve your score with more practice and consistency."
    };
}

async function loadSummaryData() {
    try {
        const response = await fetch("./data.json");
        const data = await response.json();

        summaryList.innerHTML = data
            .map((item) => {
                const styles = categoryClassMap[item.category];

                return `
          <span class="${styles.wrapper}">
            <img src="${item.icon}" alt="${styles.alt}">
            <p class="${styles.text}">${item.category}</p>
            <p>${item.score}<span> / 100</span></p>
          </span>
        `;
            })
            .join("");

        const total = data.reduce((sum, item) => sum + item.score, 0);
        const average = Math.round(total / data.length);

        averageScoreEl.textContent = average;

        const resultDetails = getResultDetails(average);
        resultLabelEl.textContent = resultDetails.label;
        resultDescriptionEl.textContent = resultDetails.description;
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
}

loadSummaryData();
