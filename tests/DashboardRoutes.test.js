import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import DashboardRoutes from '../src/DashboardRoutes.js';

describe('DashboardRoutes', () => {
  it('should render the DashboardRoutes component', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <DashboardRoutes />)
        </MemoryRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
