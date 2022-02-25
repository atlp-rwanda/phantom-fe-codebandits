import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from '../Footer.js';

describe('Footer', () => {
  it('should render Footer', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
