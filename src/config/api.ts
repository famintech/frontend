export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_URL || 'https://api.famin.cloud/v1',
    WEBSOCKET_URL: import.meta.env.VITE_WS_URL || 'wss://api.famin.cloud',
    APP_URL: import.meta.env.VITE_APP_URL || 'https://siren.famin.cloud'
};

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/users/register',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
        VERIFY_EMAIL: '/auth/verify-email',
        REFRESH_TOKEN: '/auth/refresh-token',
        LOGOUT: '/auth/logout'
    }
};