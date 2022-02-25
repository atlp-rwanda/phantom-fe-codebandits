import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header.js';

describe('Header', () => {
  it('should render Header', () => {
    const elem = renderer.create(<Header />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
