import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { store } from '../../redux/store.js';
import Account from '../Account.js';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

describe('Account', () => {
  it('should render the account page', () => {
    const elem = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Account />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});

describe('Account functionality tests', () => {
  const logoutMock = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Account logout={logoutMock()} />
      </MemoryRouter>
    </Provider>
  );
  const logoutBtn = wrapper.find('#logout');
  it('should call logout function when logout button clicked', () => {
    logoutBtn.simulate('click');
    expect(logoutMock).toHaveBeenCalled();
  });
});
