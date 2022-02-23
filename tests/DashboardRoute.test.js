import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import DashboardRoute from '../src/DashboardRoutes.js';

describe('Dashboard route testing', () => {
  it('Should render the dashboard routes', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <DashboardRoute />
        </BrowserRouter>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
