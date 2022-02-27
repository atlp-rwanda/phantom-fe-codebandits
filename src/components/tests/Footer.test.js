import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { store } from '../../redux/store.js';
import Footer from '../Footer.js';

const wrapper = mount(
  <Provider store={store}>
<<<<<<< HEAD
    <BrowserRouter>
    <Footer />
  </BrowserRouter>
  </Provider>
  
=======
  <BrowserRouter>
  <Footer />
</BrowserRouter>
</Provider>
>>>>>>> 753acfa (adds crud operations for buses)
);

describe('Footer', () => {
  it('should render Footer', () => {
    const footer = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
          <Footer />
        </BrowserRouter>
        </Provider>
        
      )
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
  it('contains one child elements element', () => {
    const value = wrapper.children().length;
    expect(value).toEqual(1);
  });
});
