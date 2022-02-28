import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { store } from '../../../redux/store.js';
import Profile from '../Profile.js';

describe('Profile', () => {
  it('should render the Profile component', () => {
    const elem = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('It should test the setOpen function', () => {
    const onChange = jest.fn();
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Profile onChange={onChange()} />
        </MemoryRouter>
      </Provider>
    );
    const button = component.find('#photo-upload');
    button.simulate('click');
    expect(onChange).toBeCalledTimes(1);
  });
  it('It should test the setOpen function', () => {
    const dispatch = jest.fn();
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Profile dispatch={dispatch()} />
        </MemoryRouter>
      </Provider>
    );
    const button = component.find('#photo-upload');
    button.simulate('click');
    expect(dispatch).toBeCalledTimes(1);
  });
});
