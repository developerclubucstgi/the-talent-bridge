import { useCallback, useEffect, useState } from 'react';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export function useAsync(asyncFunction, immediate = true) {
  const [state, setState] = useState(initialState);

  const execute = useCallback(async () => {
    setState({ data: null, isLoading: true, error: null });

    try {
      const data = await asyncFunction();
      setState({ data, isLoading: false, error: null });
      return data;
    } catch (error) {
      setState({ data: null, isLoading: false, error });
      throw error;
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
