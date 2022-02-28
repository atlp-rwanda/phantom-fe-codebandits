import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { store } from '../../redux/store.js';
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
