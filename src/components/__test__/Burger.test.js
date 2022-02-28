import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Burger from '../Burger.js';

describe('Burger Component', () => {
  it('should have three horizontal lines', () => {
    const wrapper = shallow(<Burger />);
    const value = wrapper.children().length;
    expect(value).toEqual(3);
  });
  it('it should render the Burger component', () => {
    const burger = renderer
      .create(
        <MemoryRouter>
          <Burger />
        </MemoryRouter>
      )
      .toJSON();
    expect(burger).toMatchSnapshot();
  });
});
