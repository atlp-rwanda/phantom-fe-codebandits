import React from 'react';
import renderer from 'react-test-renderer';
import {  mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RouteTable from '../RouteTable.js'
import { Provider } from 'react-redux';
import {store} from '../../../../redux/store.js'


describe('Route table Page', () => {
  it('should render the Route table component', () => {
    const elem = renderer
      .create(
		  <Provider store={store}>
          <MemoryRouter>
            <RouteTable />
          </MemoryRouter>
		  </Provider>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should render the button component', () => {
   const wrapper = mount(
	  <Provider store={store}>
          <MemoryRouter>
            <RouteTable />
          </MemoryRouter>
		  </Provider>
   )
   
   expect(wrapper.find('SearchFilter').length).toEqual(1)
  });
});
