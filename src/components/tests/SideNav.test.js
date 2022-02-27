import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import SideNav from '../SideNav.js';
import { store } from '../../redux/store.js';
import { Provider } from 'react-redux';

describe('SideNav', () => {
  it('should render the SideNav component', () => {
    const elem = renderer
      .create(
        <Provider store={store}>
         <MemoryRouter>
          <SideNav />
        </MemoryRouter> 
        </Provider>
        
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
