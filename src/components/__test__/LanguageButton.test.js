import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import LanguageButton from '../LanguageButton.js';

describe('LanguageButton', () => {
  it('should render LanguageButton', () => {
    const elem = renderer.create(<LanguageButton />).toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('should have the English text', () => {
    const wrapper = shallow(<LanguageButton />);
    expect(wrapper.find('h1').text()).toEqual('English');
  });
});
