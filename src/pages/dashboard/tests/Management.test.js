import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { store } from '../../../redux/store.js';
import Management from '../Management';

describe('Registration', () => {
  describe('Operators', () => {
    it('Should render the management page', () => {
      const elem = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <Management />
            </BrowserRouter>
          </Provider>
        )
        .toJSON();
      expect(elem).toMatchSnapshot();
    });
  });
});
