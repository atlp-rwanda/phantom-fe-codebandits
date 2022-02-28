import React from 'react';
import renderer from 'react-test-renderer';
import SkeletonScreen from '../SkeletonScreen.js';

describe('SkeletonScreen', () => {
  it('should render SkeletonScreen', () => {
    const elem = renderer.create(<SkeletonScreen />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
