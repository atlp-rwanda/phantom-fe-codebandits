import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RegisterRoute from '../RegisterRoute.js'

describe('Register Page', () => {
  it('should render the register component', () => {
    const elem = renderer
      .create(
          <MemoryRouter>
            <RegisterRoute />
          </MemoryRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should render the Route component', () => {
   const wrapper = mount(
	<MemoryRouter>
	<RegisterRoute />
  </MemoryRouter>
   )
   expect(wrapper.find('RouteComponent').length).toEqual(1)
  });
});
