import React from 'react';
import { Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { store } from '../../redux/store.js';
import DashboardRouter from '../DashboardRouter.js';

describe('DashboardRouter tests', () => {
  it('it should render DashboardRouter', () => {
    const elem = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <DashboardRouter />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
