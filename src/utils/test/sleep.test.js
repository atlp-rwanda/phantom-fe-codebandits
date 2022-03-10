import sleep from '../sleep.js';

describe('Utils test', () => {
  it('Should resolve', async () => {
    const promise = await sleep(2000);
    expect(promise).toBe(undefined);
  });
  it('Should resolve', async () => {
    const promise = await sleep();

    expect(promise).toBe(undefined);
  });
  test('the fetch fails with an error', async () => {
    try {
      await sleep(2000, 'reject');
    } catch (e) {
      expect(e).toBe(undefined);
    }
  });
});
