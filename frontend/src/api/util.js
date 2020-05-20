export const headers = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export const url = (endpoint) => {
    return `${process.env.API_BASE_URL}${endpoint}`;
};
