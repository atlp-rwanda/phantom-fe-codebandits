import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { store } from '../../../redux/store.js';

describe('Driver Registration ', () => {
  it('Should render only the driver form', () => {
    const elem = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Operator />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
