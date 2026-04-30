import { useCallback, useRef } from 'react';
import { Card } from '../../components/common/Card';
import { PageHeader } from '../../components/common/PageHeader';
import { ErrorState } from '../../components/feedback/ErrorState';
import { Loader } from '../../components/feedback/Loader';
import { PostList } from '../../features/dashboard/components/PostList';
import { useAsync } from '../../hooks/useAsync';
import { dashboardService } from '../../services/dashboardService';

export function DashboardPage() {
  const abortRef = useRef(null);

  const loadPosts = useCallback(async () => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    return dashboardService.getPosts(6, abortRef.current.signal);
  }, []);

  const { data, isLoading, error, execute } = useAsync(loadPosts);

  return (
    <div className="grid gap-6">
      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="This page already demonstrates a real API flow, loading state, error handling, and reusable UI blocks."
        action={
          <button
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
            type="button"
            onClick={() => execute().catch(() => null)}
          >
            Refresh Data
          </button>
        }
      />

      <Card title="Latest API Results">
        {isLoading ? <Loader label="Fetching posts..." /> : null}
        {error ? (
          <ErrorState
            message={error.message || 'Unable to fetch posts.'}
            onRetry={() => execute().catch(() => null)}
          />
        ) : null}
        {!isLoading && !error ? <PostList posts={data} /> : null}
      </Card>
    </div>
  );
}
