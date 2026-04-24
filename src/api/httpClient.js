import { env } from '../config/env';
import { createQueryString } from '../utils/queryString';

async function request(endpoint, options = {}) {
  const {
    method = 'GET',
    params,
    data,
    headers = {},
    signal,
  } = options;

  const url = `${env.apiBaseUrl}${endpoint}${createQueryString(params)}`;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: data ? JSON.stringify(data) : undefined,
    signal,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Something went wrong while calling the API.');
  }

  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }

  return response.text();
}

export const httpClient = {
  get: (endpoint, options) => request(endpoint, { ...options, method: 'GET' }),
  post: (endpoint, data, options) =>
    request(endpoint, { ...options, method: 'POST', data }),
  put: (endpoint, data, options) =>
    request(endpoint, { ...options, method: 'PUT', data }),
  patch: (endpoint, data, options) =>
    request(endpoint, { ...options, method: 'PATCH', data }),
  delete: (endpoint, options) => request(endpoint, { ...options, method: 'DELETE' }),
};
