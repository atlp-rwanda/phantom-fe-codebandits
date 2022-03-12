import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SideBar from '../SideBar.js';

describe('SideBar', () => {
  it('should render the SideBar component', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <SideBar />)
        </MemoryRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('It should test the logout function', () => {
    const logout = jest.fn();
    const component = mount(
      <MemoryRouter>
        <SideBar logout={logout()} />
      </MemoryRouter>
    );
    const button = component.find('#logout');
    button.simulate('click');
    expect(logout).toBeCalledTimes(1);
  });
});
