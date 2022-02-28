import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../Footer.js';

const wrapper = mount(
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);

describe('Footer', () => {
  it('should render Footer', () => {
    const footer = renderer
      .create(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
  it('contains one child elements element', () => {
    const value = wrapper.children().length;
    expect(value).toEqual(1);
  });
});
