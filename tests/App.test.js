import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { store } from '../src/redux/store.js';
import App, { MainRoutes } from '../src/App.js';

describe('App test ', () => {
  it('Should render app', () => {
    const elem = renderer.create(<App />).toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should render MainRoutes', () => {
    const elem = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
