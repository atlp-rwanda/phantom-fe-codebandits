import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MobileMenu from '../MobileMenu.js';

describe('MobileMenu', () => {
  it('should render Mobile menu', () => {
    const mobileMenu = renderer
      .create(
        <BrowserRouter>
          <MobileMenu />
        </BrowserRouter>
      )
      .toJSON();
    expect(mobileMenu).toMatchSnapshot();
  });
});
