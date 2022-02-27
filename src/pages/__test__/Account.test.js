import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Account from '../Account.js';

const wrapper = renderer.create(
  <BrowserRouter>
    <Account />
  </BrowserRouter>
);

describe('Account', () => {
  it('should render Account', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <Account />
        </BrowserRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});

describe('<Account /> functions', () => {
  it('test the logout function', () => {
    const logout = jest.fn(wrapper.getInstance(), 'logout');
    expect(logout).toMatchSnapshot();
  });
});
