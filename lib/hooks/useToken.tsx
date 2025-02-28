import useChrome from '@redhat-cloud-services/frontend-components/useChrome';

/**
 * Use Token returns a promise that resolves to the token for the currently
 * authenticated user
 */
export const useToken = () => {
  const chrome = useChrome();
  return chrome.auth.getToken();
};
