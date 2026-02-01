import careersData from '../data/careers.json';

export const getRecommendations = (userProfile) => {
    // Ported from backend/services/recommendation_service.py
    const userSkills = userProfile.skills || {};
    const userInterests = new Set(userProfile.interests || []);

    const recommendations = careersData.map(career => {
        let score = 50; // Base score

        // 1. Interest Match
        const careerInterests = new Set([
            ...(career.tags || []),
            ...(career.related || [])
        ]);

        if (userInterests.has(career.category)) {
            score += 10;
        }

        const commonInterests = [...userInterests].filter(x => careerInterests.has(x));
        score += commonInterests.length * 5;

        // 2. Skill Category Match
        if ((userSkills.coding || 0) > 3 && (career.tags.includes('Coding') || career.tags.includes('Tech'))) score += 15;
        if ((userSkills.data || 0) > 3 && (career.tags.includes('Data') || career.tags.includes('Logic'))) score += 15;
        if ((userSkills.design || 0) > 3 && (career.tags.includes('Design') || career.tags.includes('Creative'))) score += 15;
        if ((userSkills.business || 0) > 3 && (career.tags.includes('Business') || career.tags.includes('Strategy'))) score += 15;
        if ((userSkills.arts || 0) > 3 && (career.tags.includes('Art') || career.tags.includes('Performance'))) score += 15;

        // Cap score
        score = Math.min(score, 98);

        // Add minimal jitter for realism and consistent sorting when scores vary slightly
        score += Math.floor(Math.random() * 5);

        return {
            career,
            score,
            reasoning: career.reasoning || `Matches your profile strengths in ${career.tags[0] || 'general areas'}.`
        };
    });

    // Sort descending by score
    recommendations.sort((a, b) => b.score - a.score);

    // Return top 30
    return recommendations.slice(0, 30);
};
