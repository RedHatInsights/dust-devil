import useChrome from '@redhat-cloud-services/frontend-components/useChrome';
import { useToken } from '../useToken';
import { renderHook } from '@testing-library/react';

jest.mock('@redhat-cloud-services/frontend-components/useChrome');

describe('Use token hook', () => {
  it('returns the token', async () => {
    const testToken = '1234';

    (useChrome as jest.Mock).mockReturnValue({
      auth: {
        getToken: () => new Promise(resolve => resolve(testToken))
      }
    });

    const token = renderHook(useToken);
    expect(await token.result.current).toBe(testToken);
  });
});
