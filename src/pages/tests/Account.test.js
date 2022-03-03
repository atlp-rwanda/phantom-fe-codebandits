import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Account from '../Account.js';

describe('Account', () => {
  it('should render Account', () => {
    const elem = renderer
      .create(
        <div>
          <BrowserRouter>
            <Account />
          </BrowserRouter>
        </div>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
