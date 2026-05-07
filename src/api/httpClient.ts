import { env } from '../config/env';
import { createQueryString } from '../utils/queryString';

interface RequestOptions {
  method?: string;
  params?: Record<string, unknown>;
  data?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

async function request(endpoint: string, options: RequestOptions = {}): Promise<unknown> {
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
  get: (endpoint: string, options?: RequestOptions) => request(endpoint, { ...options, method: 'GET' }),
  post: (endpoint: string, data?: unknown, options?: RequestOptions) =>
    request(endpoint, { ...options, method: 'POST', data }),
  put: (endpoint: string, data?: unknown, options?: RequestOptions) =>
    request(endpoint, { ...options, method: 'PUT', data }),
  patch: (endpoint: string, data?: unknown, options?: RequestOptions) =>
    request(endpoint, { ...options, method: 'PATCH', data }),
  delete: (endpoint: string, options?: RequestOptions) => request(endpoint, { ...options, method: 'DELETE' }),
};
