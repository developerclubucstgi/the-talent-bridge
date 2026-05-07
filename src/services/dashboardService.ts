import { httpClient } from '../api/httpClient';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const dashboardService = {
  getPosts: (limit = 6, signal?: AbortSignal): Promise<Post[]> =>
    httpClient.get('/posts', {
      params: { _limit: limit },
      signal,
    }) as Promise<Post[]>,
};
