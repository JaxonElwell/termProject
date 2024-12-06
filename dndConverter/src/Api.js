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
    const response = await fetch(`${API_BASE_URL}/api/creature/${userId}`);
    if (!response.ok) {
        throw new Error(`Failed to get creatures: ${response.statusText}`);
    }
    return await response.json();
};

// Get all creatures regardless of user
export const getCreaturesAll = async () => {
    const response = await fetch(`${API_BASE_URL}/api/creatures`);
    if (!response.ok) {
        throw new Error(`Failed to get creatures: ${response.statusText}`);
    }
    return await response.json();
};

// Login
export const login = async (username, password) => {
    console.log('Logging in with:', username, password);

    try {
        const response = await fetch(`${API_BASE_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        console.log('Response status:', response.status); // Log the response status

        if (!response.ok) {
            throw new Error('Invalid login credentials');
        }

        const data = await response.json();
        console.log('Login successful:', data);

        // Store userId in localStorage and navigate to a different page
        localStorage.setItem('userId', data.userId);
        window.location.href = '/profile'; // Redirect to the profile page or any protected route
    } catch (error) {
        console.error('Login failed:', error.message);
        alert('Login failed: ' + error.message);
    }
};

// Register
export const register = async (username, password) => {
    console.log('Registering with:', username, password
    );

    try {
        const response = await fetch(`${API_BASE_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        console.log('Response status:', response.status); // Log the response status

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        alert('Registration successful');
    } catch (error) {
        console.error('Registration failed:', error.message);
        alert('Registration failed: ' + error.message);
    }
}