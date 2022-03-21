import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RouteEdit from '../RouteEdit.js'

describe('Edit Page', () => {
  it('should render the Edit component', () => {
    const elem = renderer
      .create(
          <MemoryRouter>
            <RouteEdit />
          </MemoryRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should render the Route component', () => {
   const wrapper = mount(
	<MemoryRouter>
	<RouteEdit />
  </MemoryRouter>
   )
   expect(wrapper.find('RouteComponent').length).toEqual(1)
  });
});
