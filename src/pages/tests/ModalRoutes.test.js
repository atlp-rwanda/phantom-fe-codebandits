import React from 'react';
import renderer from 'react-test-renderer';
import {  mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ModalRoutes from '../ModalRoutes.js'
import { Provider } from 'react-redux';
import {store} from '../../redux/store.js'

describe('Modal Routes', () => {
  it('should render the ModalRoutes component', () => {
    const elem = renderer
      .create(
		  <Provider store={store}>
          <MemoryRouter>
            <ModalRoutes />
          </MemoryRouter>
		  </Provider>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should not render the Routes component', () => {
   const wrapper = mount(
	<Provider store={store}>
	<MemoryRouter>
	  <ModalRoutes />
	</MemoryRouter>
	</Provider>
   )
   expect(wrapper.find('Routes').length).toEqual(1)
  });

  it('should not render the Route component', () => {
	const wrapper = mount(
	 <Provider store={store}>
	 <MemoryRouter>
	   <ModalRoutes />
	 </MemoryRouter>
	 </Provider>
	)
	expect(wrapper.find('Route').length).toEqual(0)
   });
  

});
