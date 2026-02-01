const BASE_URL = '/api';

export const api = {
    // Profile
    saveProfile: async (data) => {
        const res = await fetch(`${BASE_URL}/profile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.json();
    },

    getProfile: async (userId) => {
        const res = await fetch(`${BASE_URL}/profile/${userId}`);
        return res.json();
    },

    // Careers & Recommendations
    getRecommendations: async (profile) => {
        const res = await fetch(`${BASE_URL}/recommendations`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profile)
        });
        return res.json();
    },

    getSimulation: async (careerId) => {
        const res = await fetch(`${BASE_URL}/simulator/${careerId}`);
        return res.json();
    },

    submitSimulation: async (careerId, answers) => {
        const res = await fetch(`${BASE_URL}/simulator/${careerId}/result`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answers })
        });
        return res.json();
    },

    getNetwork: async () => {
        const res = await fetch(`${BASE_URL}/careers/network`);
        return res.json();
    },

    getAllCareers: async () => {
        const res = await fetch(`${BASE_URL}/careers`);
        return res.json();
    },

    compareCareers: async (idA, idB) => {
        const res = await fetch(`${BASE_URL}/compare?careerA=${idA}&careerB=${idB}`);
        return res.json();
    }
};
