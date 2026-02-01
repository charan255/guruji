import careersData from '../data/careers.json';
import { getRecommendations } from '../utils/recommendationEngine';
import { getSimulation, evaluateSubmission } from '../utils/simulationEngine';
import networkData from '../data/network.json';

// Mock Network Match Scores for graph visualization
const getEnrichedNetwork = () => {
    const enrichedNodes = networkData.nodes.map(node => ({
        ...node,
        match: Math.floor(Math.random() * 50) + 40 // 40-90% match range
    }));
    return {
        nodes: enrichedNodes,
        links: networkData.links
    };
};

export const api = {
    // User Profile
    saveProfile: async (profileData) => {
        return new Promise(resolve => setTimeout(() => resolve({ success: true, id: 'user_123' }), 500));
    },

    getProfile: async () => {
        return new Promise(resolve => setTimeout(() => resolve({ name: "User", skills: {} }), 300));
    },

    // Recommendations
    getRecommendations: async (profile) => {
        const results = getRecommendations(profile);
        return new Promise(resolve => setTimeout(() => resolve(results), 600));
    },

    // Simulation
    getSimulation: async (careerId) => {
        const sim = getSimulation(careerId);
        return new Promise(resolve => setTimeout(() => resolve(sim), 400));
    },

    submitSimulation: async (careerId, answers) => {
        const result = evaluateSubmission(careerId, answers);
        return new Promise(resolve => setTimeout(() => resolve(result), 800));
    },

    // Network / Comparison
    getNetwork: async () => {
        const network = getEnrichedNetwork();
        return new Promise(resolve => setTimeout(() => resolve(network), 400));
    },

    // Comparison data
    getAllCareers: async () => {
        return new Promise(resolve => setTimeout(() => resolve(careersData), 100));
    }
};
