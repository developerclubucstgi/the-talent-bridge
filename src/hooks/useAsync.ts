import { useCallback, useEffect, useState } from 'react';

interface AsyncState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

interface UseAsyncReturn<T> extends AsyncState<T> {
  execute: () => Promise<T>;
}

const initialState: AsyncState<unknown> = {
  data: null,
  isLoading: false,
  error: null,
};

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true
): UseAsyncReturn<T> {
  const [state, setState] = useState<AsyncState<T>>(initialState as AsyncState<T>);

  const execute = useCallback(async (): Promise<T> => {
    setState({ data: null, isLoading: true, error: null });

    try {
      const data = await asyncFunction();
      setState({ data, isLoading: false, error: null });
      return data;
    } catch (error) {
      const errorObject = error instanceof Error ? error : new Error(String(error));
      setState({ data: null, isLoading: false, error: errorObject });
      throw errorObject;
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute().catch(() => null);
    }
  }, [execute, immediate]);

  return {
    ...state,
    execute,
  };
}
