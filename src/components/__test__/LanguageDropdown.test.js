import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import LanguageDropdown from '../LanguageDropdown.js';

const wrapper = shallow(<LanguageDropdown />);

describe('LanguageDropdown', () => {
  it('It is a list of two items', () => {
    expect(wrapper.children().length).toEqual(2);
  });
  it('should render Language Dropdown', () => {
    const LanguageDpdn = renderer.create(<LanguageDropdown />).toJSON();
    expect(LanguageDpdn).toMatchSnapshot();
  });
});
