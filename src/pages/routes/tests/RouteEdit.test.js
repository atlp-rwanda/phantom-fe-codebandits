import axios from '@utils/Api.js';
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RouteEdit from '../RouteEdit.js';

const axiosSpy = jest.spyOn(axios, 'get');
axiosSpy.mockReturnValue(() => {
  return {
    id: 1,
    destination1: 'Gakenke'
  };
});
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
    );
    expect(wrapper.find('RouteComponent').length).toEqual(1);
  });
});
