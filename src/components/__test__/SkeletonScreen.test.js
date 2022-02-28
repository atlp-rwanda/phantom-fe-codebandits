import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SkeletonScreen from '../SkeletonScreen.js';

describe('SkeletonScreen', () => {
  it('should render SkeletonScreen', () => {
    const skelUI = renderer
      .create(
        <MemoryRouter>
          <SkeletonScreen />
        </MemoryRouter>
      )
      .toJSON();
    expect(skelUI).toMatchSnapshot();
  });
});
