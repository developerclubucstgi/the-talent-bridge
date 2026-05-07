interface EnvConfig {
  appName: string;
  apiBaseUrl: string;
}

export const env: EnvConfig = {
  appName: import.meta.env.VITE_APP_NAME || 'React API Template',
  apiBaseUrl:
    import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
};
