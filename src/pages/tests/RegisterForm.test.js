import RegisterDriver from '@pages/forms/RegisterDrivers.js';
import RegisterOperator from '@pages/forms/RegisterOperator.js';
import ProviderWrapper from '@utils/TestUtil.js';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('Registration', () => {
  describe('Operators', () => {
    it('Should render the operator form', () => {
      const elem = renderer
        .create(
          <ProviderWrapper children={<RegisterOperator />}></ProviderWrapper>
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
});
