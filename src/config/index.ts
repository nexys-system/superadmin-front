export const appTitle = process.env.REACT_APP_APP_TITLE || 'Awesome App';

export const withBackend =
  process.env.REACT_APP_WITH_BACKEND === 'true' ? true : false;

export const gitHubRepoUrl =
  process.env.REACT_APP_GITHUB_REPO_URL ||
  'https://github.com/nexys-system/superadmin-front';
