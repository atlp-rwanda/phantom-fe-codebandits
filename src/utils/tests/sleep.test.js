import Sleep from '../Sleep.js';

describe('Utils test', () => {
  it('Should resolve', async () => {
    const promise = await Sleep(2000);
    expect(promise).toBe(undefined);
  });
  it('Should resolve', async () => {
    const promise = await Sleep();

    expect(promise).toBe(undefined);
  });
});
