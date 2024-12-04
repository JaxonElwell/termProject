// Contains helper functions for API requests

const API_BASE_URL = 'http://localhost:5000';

// Add a creature
export const addCreature = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/creature`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`Failed to add creature: ${response.statusText}`);
    }
    return await response.json();
};

// Get a creature
export const getCreature = async (userId, name) => {
    const response = await fetch(`${API_BASE_URL}/api/creature/${userId}/${name}`);
    if (!response.ok) {
        throw new Error(`Failed to get creature: ${response.statusText}`);
    }
    return await response.json();
};

// Get all creatures
export const getCreatures = async (userId) => {
    const response = await fetch(`${API_BASE_URL}/api/creatures/${userId}`);
    if (!response.ok) {
        throw new Error(`Failed to get creatures: ${response.statusText}`);
    }
    return await response.json();
};