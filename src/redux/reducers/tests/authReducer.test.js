import { loginUser, logoutUser, authReducer } from '../authReducer.js';

describe('authReducer tests', () => {
  it('user should be not authenticated by default', () => {
    expect(authReducer(undefined, {})).toEqual({
      authenticated: false,
      user: null
    });
  });
  it('user should authenticate users', () => {
    expect(
      authReducer({ authenticated: false, user: null }, loginUser)
    ).toEqual({
      authenticated: true,
      user: undefined
    });
  });
  it('user should logout authenticated users', () => {
    expect(
      authReducer({ authenticated: true, user: undefined }, logoutUser)
    ).toEqual({
      authenticated: false,
      user: null
    });
  });
});
