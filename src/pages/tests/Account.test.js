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

const wrapper = shallow(<Login />);
console.log(wrapper.debug());

describe('Login page tests', () => {
  it('renders without errors', () => {
    wrapper;
  });
  it('has one child element', () => {
    expect(wrapper.children().length).toEqual(1);
  });
  it('has one form element', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });
  it('has the image of a bus', () => {
    expect(wrapper.find('img').prop('alt')).toEqual(
      'vector image of a bus on map'
    );
  });
  it('has a h2 with text login', () => {
    expect(wrapper.find('h2').text()).toEqual('Login');
  });
  it('has one button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
  it('has a button with text Login', () => {
    expect(wrapper.find('button').text()).toEqual('Login');
  });
  it('has two input elements', () => {
    expect(wrapper.find('input').length).toEqual(2);
  });
  it('has input for email', () => {
    expect(wrapper.find('input[name="email"]').length).toBe(1);
  });
  it('has input for password', () => {
    expect(wrapper.find('input[name="password"]').length).toBe(1);
  });
  it('has one h4 elemet', () => {
  expect(wrapper.find('h4').length).toEqual(1);
  });
  it('has forgot password heading', () => {
    expect(wrapper.find('h4').text()).toEqual('Forgot password?');
  });
});
