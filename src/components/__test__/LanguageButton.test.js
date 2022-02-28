import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import LanguageButton from '../LanguageButton.js';

describe('LanguageButton', () => {
  it('should render LanguageButton', () => {
    const elem = renderer.create(<LanguageButton />).toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('It should test the setOpen function', () => {
    const setOpen = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <LanguageButton setOpen={setOpen()} />
      </MemoryRouter>
    );
    const button = wrapper.find('button');
    button.simulate('click');
    expect(setOpen).toBeCalledTimes(1);
  });
});
