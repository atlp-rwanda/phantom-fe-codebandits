import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { store } from '../../../redux/store.js';
import UpdateProfile from '../UpdateProfile.js';

describe('UpdateProfile', () => {
  it('should render the UpdateProfile component', () => {
    const elem = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <UpdateProfile />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('It should test the setOpen function', () => {
    const handleUpdate = jest.fn();
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <UpdateProfile handleUpdate={handleUpdate()} />
        </MemoryRouter>
      </Provider>
    );
    const button = component.find('#update');
    button.simulate('click');
    expect(handleUpdate).toBeCalledTimes(1);
  });
});
