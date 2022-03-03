import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Intro from '../Intro.js';

describe('Intro', () => {
  it('contains one child elements', () => {
    const component = shallow(<Intro />);
    const value = component.children().length;
    expect(value).toEqual(2);
  });
  it('should render Intro', () => {
    const intro = renderer.create(<Intro />).toJSON();
    expect(intro).toMatchSnapshot();
  });
});
