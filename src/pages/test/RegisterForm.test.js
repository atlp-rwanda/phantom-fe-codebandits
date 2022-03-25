import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RegisterOperator from "../../forms/RegisterOperator.js"
import RegisterDriver from '../../forms/RegisterDrivers.js';
import { store } from '../../redux/store.js';
import LabelComponent from "../../components/LabelComponent.js"

describe('Registration', () => {
  describe('Operators', () => {
    it('Should render the operator form', () => {
      const elem = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <RegisterOperator />
            </BrowserRouter>
          </Provider>
        )
        .toJSON();
      expect(elem).toMatchSnapshot();
    });
    it('Should render the driver form', () => {
      const elem = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <RegisterDriver />
            </BrowserRouter>
          </Provider>
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
