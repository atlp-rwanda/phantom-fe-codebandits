import React from 'react';
import renderer from 'react-test-renderer';
import LanguageButton from '../LanguageButton.js';

describe('LanguageButton', () => {
  it('should render LanguageButton', () => {
    const elem = renderer.create(<LanguageButton />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
