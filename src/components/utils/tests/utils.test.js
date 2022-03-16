import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
import Roles from '../../../pages/dashboard/RolesPage.js';
import CheckRole from '../CheckRoles.js';


let spyOnUseSelector;

const mockUseLocationValue = {
  pathname: '/testroute',
  search: '',
  hash: '',
  state: null
};
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockImplementation(() => {
    return mockUseLocationValue;
  })
}));
describe('Check roles', () => {
  spyOnUseSelector = jest.spyOn(redux, 'useSelector');
  it('Return the element for the admin', () => {
    spyOnUseSelector.mockReturnValue({
      authenticated: true,
      user: {
        id: 2,
        firstName: 'Fabrice',
        email: 'admin@me.com',
        roles: {
          name: 'admin',
          permissions: [
            {
              driver: ['get', 'create', 'update', 'delete'],
              routes: ['get', 'create', 'update', 'delete'],
              buses: ['get', 'create', 'update', 'delete'],
              operator: ['get', 'create', 'update', 'delete'],
              company: ['get', 'create', 'update', 'delete']
            }
          ]
        }
      }
    });
    const elem = shallow(
      <CheckRole role={['admin']} children={<Roles></Roles>} />
    );
    expect(elem).toMatchSnapshot();
  });
  it('Return the element for the operator', () => {
    spyOnUseSelector.mockReturnValue({
      authenticated: true,
      user: {
        id: 2,
        firstName: 'Fabrice',
        email: 'admin@me.com',
        roles: {
          name: 'operator',
          permissions: [
            {
              driver: ['get', 'create', 'update', 'delete'],
              routes: ['get', 'create', 'update', 'delete'],
              buses: ['get', 'create', 'update', 'delete'],
              operator: ['get', 'create', 'update', 'delete'],
              company: ['get', 'create', 'update', 'delete']
            }
          ]
        }
      }
    });
    const elem = shallow(
      <CheckRole role={['operator']} children={<Roles></Roles>} />
    );
    expect(elem).toMatchSnapshot();
  });
  it('Return empty for for the operator', () => {
    spyOnUseSelector.mockReturnValue({
      authenticated: true,
      user: {
        id: 2,
        firstName: 'Fabrice',
        email: 'admin@me.com',
        roles: {
          name: 'operator',
          permissions: [
            {
              driver: ['get', 'create', 'update', 'delete'],
              routes: ['get', 'create', 'update', 'delete'],
              buses: ['get', 'create', 'update', 'delete'],
              operator: ['get', 'create', 'update', 'delete'],
              company: ['get', 'create', 'update', 'delete']
            }
          ]
        }
      }
    });
    const elem = shallow(
      <CheckRole type={'page'} role={['admin']} children={<Roles></Roles>} />
    );
    expect(elem).toMatchSnapshot();
  });
  it('Return empty for for the operator', () => {
    spyOnUseSelector.mockReturnValue({
      authenticated: true,
      user: {
        id: 2,
        firstName: 'Fabrice',
        email: 'admin@me.com',
        roles: {
          name: 'operator',
          permissions: [
            {
              driver: ['get', 'create', 'update', 'delete'],
              routes: ['get', 'create', 'update', 'delete'],
              buses: ['get', 'create', 'update', 'delete'],
              operator: ['get', 'create', 'update', 'delete'],
              company: ['get', 'create', 'update', 'delete']
            }
          ]
        }
      }
    });
    const elem = shallow(
      <CheckRole role={['admin']} children={<Roles></Roles>} />
    );
    expect(elem).toMatchSnapshot();
  });
});
