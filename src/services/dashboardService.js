import { httpClient } from '../api/httpClient';

export const dashboardService = {
  getPosts: (limit = 6, signal) =>
    httpClient.get('/posts', {
      params: { _limit: limit },
      signal,
    }),
};
