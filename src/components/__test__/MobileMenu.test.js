import React from 'react';
import renderer from 'react-test-renderer';
import MobileMenu from '../MobileMenu.js';

describe('MobileMenu', () => {
  it('should render Mobile menu', () => {
    const elem = renderer.create(<MobileMenu />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
