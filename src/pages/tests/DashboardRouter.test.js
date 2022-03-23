import React from 'react';
import renderer from 'react-test-renderer';
import {  mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import DashRoutes from '../DashboardRouter.js'
import { Provider } from 'react-redux';
import {store} from '../../redux/store.js'

describe('Register Page', () => {
  it('should render the DashboardRouter component', () => {
    const elem = renderer
      .create(
		  <Provider store={store}>
          <MemoryRouter>
            <DashRoutes />
          </MemoryRouter>
		  </Provider>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should not render the Sidebar component', () => {
   const wrapper = mount(
	<Provider store={store}>
	<MemoryRouter>
	  <DashRoutes />
	</MemoryRouter>
	</Provider>
   )
   expect(wrapper.find('Sidebar').length).toEqual(0)
  });
  

});
