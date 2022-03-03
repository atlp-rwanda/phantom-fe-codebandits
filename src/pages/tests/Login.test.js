import { mount, shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import renderer, { act } from 'react-test-renderer';

import Login from '../Login.js';

const wrapper = renderer.create(
  <BrowserRouter>
    <Login />
  </BrowserRouter>
);
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  register: jest.fn(),
  handleSubmit: jest.fn()
}));

describe('Login snapshot test', () => {
  it('should render Login', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('test the onValid function', () => {
    const onValid = jest.fn(wrapper.getInstance(), 'onValid');
    expect(onValid).toMatchSnapshot();
  });
});

describe('Login page tests', () => {
  const wrapper = shallow(<Login />);
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
  it('has one h4 element', () => {
    expect(wrapper.find('h4').length).toEqual(1);
  });
  it('has forgot password heading', () => {
    expect(wrapper.find('h4').text()).toEqual('Forgot password?');
  });
});

describe('Landing page functionality tests', () => {
  const handleSubmitMock = jest.fn();
  const wrapper = mount(
    <MemoryRouter>
      <Login handleSubmit={handleSubmitMock()} />)
    </MemoryRouter>
  );
  const loginBtn = wrapper.find('#login-btn');
  it('calls handleSubmit function on form submit', () => {
    act(() => {
      loginBtn.simulate('click');
      expect(handleSubmitMock).toBeCalledTimes(1);
    });
  });
});
