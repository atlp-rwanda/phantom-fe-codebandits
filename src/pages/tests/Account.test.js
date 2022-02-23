import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
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
<<<<<<< HEAD:src/pages/tests/Account.test.js
        <div>
          <BrowserRouter>
            <Account />
          </BrowserRouter>
        </div>
=======
        <Provider store={store}>
          <BrowserRouter>
            <Account />
          </BrowserRouter>
        </Provider>
>>>>>>> 10d962d (Add the driver page):src/pages/__test__/Account.test.js
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});

describe('Account functionality tests', () => {
  const logoutMock = jest.fn();
  const wrapper = mount(
    <MemoryRouter>
      <Account logout={logoutMock()} />
    </MemoryRouter>
  );
  const logoutBtn = wrapper.find('button');
  it('should call logout function when logout button clicked', () => {
    logoutBtn.simulate('click');
    expect(logoutMock).toHaveBeenCalled();
  });
});
