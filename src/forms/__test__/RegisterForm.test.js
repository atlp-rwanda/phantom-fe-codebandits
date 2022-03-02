import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { store } from '../../redux/store.js';
import Driver from '../../pages/dashboard/Driver.js';
import Operator from '../../pages/dashboard/Operator.js';
import RegisterOperator, {
  LabelComponent
} from '../RegisterOperator.js';

describe('Registration', () => {
  describe('Operators', () => {
    it('Should render the operator form', () => {
      const elem = renderer
        .create(
          <BrowserRouter>
            <Operator />
          </BrowserRouter>
        )
        .toJSON();
      expect(elem).toMatchSnapshot();
    });
    it('Should render the driver form', () => {
      const elem = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <Driver />
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
