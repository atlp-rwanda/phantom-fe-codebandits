import { mount, shallow } from 'enzyme';
import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import Button from '../../components/Button.js';
import { FormComponent } from "../FormComponent.js";
import {driverInputs} from "../FormInputs.js"
 
describe('Form Component', ()=>{
    it('Should render a form Componet', ()=>{
        const wrapper = renderer
        .create(
            <MemoryRouter>
                <FormComponent />
            </MemoryRouter>
        )
        .toJSON();
        expect(elem).toMatchSnapshot();
    })
})

describe('Tests of Inside components', ()=>{
  const wrapper = shallow(<FormComponent />)

  it('Should have only one form element inside operator', ()=>{
    expect(wrapper.find('form').length).toEqual(1);
});
it('Should have only one image of bus for operator', ()=>{
  expect(wrapper.find('List').length).toEqual(1);
});
})