import { shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Account from '../Account.js';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

describe('Login', () => {
  it('should render Login', () => {
    const elem = renderer
      .create(
        <div>
          <BrowserRouter>
            <Account />
          </BrowserRouter>
        </div>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});

const wrapper = shallow(<Account />);

describe('Login page tests', () => {
  it('renders without errors', () => {
    wrapper;
  });
  it('has one child element', () => {
    expect(wrapper.children().length).toEqual(1);
  });
});
