import axios from 'axios';
import sampleResponse from '../mocks/sample_response.json';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
});

/**
 * Submit a VCF file and drug list for pharmacogenomic analysis.
 * Falls back to mock data when no backend URL is configured.
 */
export async function analyzeVcf(file, drug) {
    // Mock mode — return sample data when no backend is configured
    if (!BASE_URL) {
        await new Promise((r) => setTimeout(r, 1200)); // simulate latency
        return { data: sampleResponse };
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('drug', drug);

    return api.post('/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
}

export default api;
