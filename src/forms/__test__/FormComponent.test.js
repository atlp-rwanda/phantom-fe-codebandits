import { mount, shallow } from 'enzyme';
import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import Button from '../../components/Button.js';
import { FormComponent } from "../FormComponent.js";
import {driverInputs} from "../FormInputs.js"
 
describe('Form Component', ()=>{
    it('Should render a form Componet', ()=>{
        const elem = renderer
        .create(
            <MemoryRouter>
                <FormComponent />
            </MemoryRouter>
        )
        .toJSON();
        expect(elem).toMatchSnapshot();
    })
})

describe('Form Components and actions', ()=>{
    const called = inputs={driverInputs}, type={"Submit"}, callback={oninvalid()}, redirect={'/dahsbord'};
    it('should render a Button of Submit', () => {
        const wrapper = mount(
          <MemoryRouter>
            <FormComponent  />
          </MemoryRouter>
        );
        expect(wrapper.find('Button').length).toEqual(1);
      });

      it('should render a Label Component', () => {
        const wrapper = mount(
          <MemoryRouter>
            <FormComponent />
          </MemoryRouter>
        );
        expect(wrapper.find('LabelComponent').length).toEqual(7);
      });

      it('Test click Event ', ()=>{
          const mockCallBack = jest.fn();
          const button = shallow(<Button onClick={mockCallBack}>ok!</Button>)
          console.log(button)
        button.find('Button').simulate('click');

          expect(mockCallBack).toHaveBeenCalledTimes(1)

      })

      it('Test Submit action on Form ', ()=>{
        const wrapper = shallow(<FormComponent />);
        const name = simulateChangeOnInput(wrapper, 'input#name')

    })
})