const isProd = import.meta.env.PROD;

export const API_URL = isProd ? '/api' : 'http://localhost:3000/api';
