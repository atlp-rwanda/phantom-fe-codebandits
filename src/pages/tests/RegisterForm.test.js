import { shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RegisterDriver from '../../forms/RegisterDrivers.js';
import RegisterOperator, {
  LabelComponent
} from '../../forms/RegisterOperator.js';

describe('Registration', () => {
  describe('Operators', () => {
    it('Should render the operator form', () => {
      const elem = renderer
        .create(
          <BrowserRouter>
            <RegisterOperator />
          </BrowserRouter>
        )
        .toJSON();
      expect(elem).toMatchSnapshot();
    });
    it('Should render the driver form', () => {
      const elem = renderer
        .create(
          <BrowserRouter>
            <RegisterDriver />
          </BrowserRouter>
        )
        .toJSON();
      expect(elem).toMatchSnapshot();
    });
  });
  describe('Component', () => {
    const wrapper = shallow(
      <LabelComponent htmlFor={'test'} name={'test'}></LabelComponent>
    );
    it('Should return test', () => {
      expect(wrapper.text()).toEqual('test');
    });
  });
});
