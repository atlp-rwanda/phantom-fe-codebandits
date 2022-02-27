import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SideBar from '../SideBar.js';
import { Provider } from 'react-redux';
import { store } from '../../redux/store.js';

describe('SideBar', () => {
  it('should render the SideBar component', () => {
    const elem = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <SideBar />
          </MemoryRouter>
        </Provider>
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
