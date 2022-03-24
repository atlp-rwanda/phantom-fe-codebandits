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
  it('It should test the setopen function', () => {
    const open = false;
    const setOpen = jest.fn();
    const component = mount(
      <MemoryRouter>
        <SideBar setOpen={() => setOpen(!open)} />
      </MemoryRouter>
    );
    const button = component.find('#button');
    button.simulate('click');
    expect(setOpen).not.toBeCalledTimes(1);
  });
});
