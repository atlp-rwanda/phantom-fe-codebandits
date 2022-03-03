import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../Header.js';

describe('Header', () => {
  it('should render Header', () => {
    const header = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });

  it('It should test the setOpen function', () => {
    const setOpen = jest.fn();
    const component = mount(
      <MemoryRouter>
        <Header setOpen={setOpen()} />
      </MemoryRouter>
    );
    const button = component.find('#toggle');
    button.simulate('click');
    expect(setOpen).toBeCalledTimes(1);
  });

  it('It should test the open status', () => {
    const open = true;
    const wrapper = mount(
      <MemoryRouter>
        <Header open={open} />
      </MemoryRouter>
    );
    const img = wrapper.find('img');
    expect(img.length).toEqual(1);
  });
});
