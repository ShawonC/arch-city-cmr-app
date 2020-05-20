import { headers, url } from './util';

export const createApplicant = async (applicant, token) => {
    const response = await fetch(url('/applicants/add'), {
        body: JSON.stringify(applicant),
        method: 'POST',
        ...headers(token),
    });
    return response.json();
};
