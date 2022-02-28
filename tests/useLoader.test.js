import { act, renderHook } from '@testing-library/react-hooks';
import { useLoader } from '../src/useLoader.js';

describe('Loading', () => {
  it('loads the skeleton UI on start', () => {
    const { result } = renderHook(useLoader);

    act(() => {
      result.current.setLoading(true);
    });

    expect(result.current.loading).toBe(true);
  });

  it('stops loading the skeleton UI after after timeout', () => {
    const { result } = renderHook(useLoader);

    act(() => {
      result.current.setLoading(false);
    });

    expect(result.current.loading).toBe(false);
  });
});
