import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Input from '../Input.js';

describe('Input', () => {
  it('should render Input', () => {
    const input = renderer
      .create(
        <BrowserRouter>
          <Input />
        </BrowserRouter>
      )
      .toJSON();
    expect(input).toMatchSnapshot();
  });
});
