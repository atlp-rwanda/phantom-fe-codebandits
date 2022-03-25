import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import Routes from '../Routes.js';
import {store } from '../../../redux/store.js'

describe("Route component", ()=>{
	describe('Should render the Routes components', () => {
		const elem = renderer
		  .create(
			  <Provider store={store}>
			<MemoryRouter>
			  <Routes />
			</MemoryRouter>
			</Provider>
		  )
		  .toJSON();
		expect(elem).toMatchSnapshot();
	  });

	  it('should render the RouteTable component', () => {
		const wrapper = mount(
		  <Provider store={store}>
			<MemoryRouter>
			  <Routes />
			</MemoryRouter>
		  </Provider>
		);
	
		expect(wrapper.find('RouteTable').length).toEqual(1);
	  });
})

