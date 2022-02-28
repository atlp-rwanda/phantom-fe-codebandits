import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import SideNav from '../SideNav.js';

describe('SideNav', () => {
  it('should render the SideNav component', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <SideNav />)
        </MemoryRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
