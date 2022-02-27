import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Login from '../Login.js';

const wrapper = renderer.create(
  <BrowserRouter>
    <Login />
  </BrowserRouter>
);

describe('Login', () => {
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
});

describe('<Login /> functions', () => {
  it('test the onValid function', () => {
    const onValid = jest.fn(wrapper.getInstance(), 'onValid');
    expect(onValid).toMatchSnapshot();
  });
  it('test the onErros function', () => {
    const onErros = jest.fn(wrapper.getInstance(), 'onErros');
    expect(onErros).toMatchSnapshot();
  });
});
