import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Buses from '../Buses.js';

describe('Buses form component test', () => {
  it('it should render Buses form component', () => {
    const busesForm = renderer
      .create(
        <MemoryRouter>
          <Buses />
        </MemoryRouter>
      )
      .toJSON();
    expect(busesForm).toMatchSnapshot();
  });
  it('it should call form action on submit', () => {
    const formActionMock = jest.fn();
    const wrapper = mount(<Buses formAction={formActionMock()} />);
    const busesForm = wrapper.find('form');
    busesForm.simulate('submit',{
      busType:"Coaster",
      seats:"30",
      company:"Virunga"
    }),
    expect(formActionMock).toBeCalledTimes(1);
  });
});
