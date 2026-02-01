import simulationsData from '../data/simulations.json';

export const getSimulation = (careerId) => {
    const sim = simulationsData.find(s => s.career_id === careerId);
    if (!sim) {
        // Fallback generic simulation
        return {
            career_id: careerId,
            scenarios: [
                {
                    id: "gen_1",
                    description: "You are faced with a critical decision in your daily work. Deadlines are tight.",
                    options: [
                        { id: "a", text: "Prioritize quality over speed.", score: 10 },
                        { id: "b", text: "Ship fast and fix later.", score: 5 }
                    ]
                }
            ]
        };
    }
    return sim;
};

export const evaluateSubmission = (careerId, answers) => {
    // Simple verification logic
    // answers is { scenarioId: selectedOptionId }

    // Calculate score
    let totalScore = 0;
    const sim = getSimulation(careerId);

    sim.scenarios.forEach(scenario => {
        const selectedOptionId = answers[scenario.id];
        const option = scenario.options.find(o => o.id === selectedOptionId);
        if (option) {
            totalScore += option.score || 0;
        }
    });

    // Normalize to 0-100
    // Assuming max score per question is ~10 and usually 1 question for now
    const normalizedScore = Math.min(Math.max(totalScore * 10, 40), 95);

    return {
        career_id: careerId,
        score: normalizedScore,
        feedback: normalizedScore > 80 ? "Excellent natural aptitude!" : "Good effort, with room for growth.",
        enjoyment_score: Math.floor(Math.random() * 30) + 70 // Mock enjoyment
    };
};
