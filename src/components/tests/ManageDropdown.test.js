import { fireEvent, render, screen } from '@testing-library/react';
import ProviderWrapper from '@utils/TestUtil.js';
import React from 'react';
import * as redux from 'react-redux';
import Swal from 'sweetalert2';
import ManageDropdown from '../ManageDropdown.js';

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

const rowData = {
  original: {
    name: 'Fabrice',
    email: ' test@me.com',
    license: 199700,
    assigned_bus: null,
    id: 1
  }
};

const swalSpy = jest.spyOn(Swal, 'fire');

describe('Manage Dropdown', () => {
  spyOnUseSelector = jest.spyOn(redux, 'useSelector');
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

  it('Should render the dropdown', async () => {
    const elem = render(
      <ProviderWrapper children={<ManageDropdown row={rowData} />} />
    );
    expect(elem).toMatchSnapshot();
  });
  it('Should call the edit', async () => {
    const elem = render(
      <ProviderWrapper children={<ManageDropdown row={rowData} />} />
    );
    fireEvent.change(await screen.getByRole('select'), {
      target: {
        value: 'edit'
      }
    });
    expect(elem).toMatchSnapshot();
  });
  it('Should call the assign', async () => {
    const elem = render(
      <ProviderWrapper children={<ManageDropdown row={rowData} />} />
    );
    fireEvent.change(await screen.getByRole('select'), {
      target: {
        value: 'assign'
      }
    });
    expect(elem).toMatchSnapshot();
  });
  it('Should call the permissions', async () => {
    const elem = render(
      <ProviderWrapper children={<ManageDropdown row={rowData} />} />
    );
    fireEvent.change(await screen.getByRole('select'), {
      target: {
        value: 'perm'
      }
    });
    expect(elem).toMatchSnapshot();
  });
  it('Should call the delete option', async () => {
    const elem = render(
      <ProviderWrapper
        children={
          <>
            <ManageDropdown row={rowData} />
          </>
        }
      />
    );
    fireEvent.change(await screen.getByRole('select'), {
      target: {
        value: 'delete'
      }
    });
    expect(elem).toMatchSnapshot();
  });
  it('Should render the dropdown with change bus', async () => {
    rowData.original['assigned_bus'] = 'fabrice';
    console.log(rowData);
    const elem = render(
      <ProviderWrapper children={<ManageDropdown row={rowData} />} />
    );
    fireEvent.change(await screen.getByRole('select'), {
      target: {
        value: 'nothing'
      }
    });
    expect(elem).toMatchSnapshot();
  });
});
