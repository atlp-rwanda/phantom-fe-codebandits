import React from 'react';
import renderer from 'react-test-renderer';
import WithClickOutside from '../WithClickOutside.js';

const wrapper = renderer.create(<WithClickOutside />);

describe('withClickOutside', () => {
  it('should render withClickOutside', () => {
    const withClickOutside = renderer.create(<WithClickOutside />).toJSON();
    expect(withClickOutside).toMatchSnapshot();
  });
});

describe('<WithClickOutside /> functions', () => {
  it('test the Component function', () => {
    const Component = jest.fn(wrapper.getInstance(), 'Component');
    expect(Component).toMatchSnapshot();
  });
});
