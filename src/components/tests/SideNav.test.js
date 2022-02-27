import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { store } from '../../redux/store.js';
import SideNav from '../SideNav.js';
import { store } from '../../redux/store.js';
import { Provider } from 'react-redux';

describe('SideNav', () => {
  it('should render the SideNav component', () => {
    const elem = renderer
      .create(
        <Provider store={store}>
<<<<<<< HEAD
          <MemoryRouter>
            <SideNav />
          </MemoryRouter>
        </Provider>
=======
         <MemoryRouter>
          <SideNav />
        </MemoryRouter> 
        </Provider>
        
>>>>>>> 753acfa (adds crud operations for buses)
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
