import DriversTable from '@components/DriversTable.js';
import { render } from '@testing-library/react';
import ProviderWrapper from '@utils/TestUtil.js';
import React from 'react';

describe('Driver Table', () => {
  const data = [
    {
      id: 2,
      name: 'Muhire Girbert',
      nationalid: '1199721772809249',
      mobileNumber: '0788251891',
      email: 'ctruswell1@histats.com',
      license: '1195510237288508',
      address: 'Kimihurura',
      assigned_bus: 'RAB1000',
      assigned_route: null
    },
    {
      email: 'driver@me.com',
      mobileNumber: '0788498955',
      company: 'roy',
      address: 'Nyamirambo',
      nationalid: '1199780030880040',
      license: '1199780030880040',
      name: 'Fabrice Hategekimana',
      assigned_bus: null,
      assigned_route: null,
      id: 5
    }
  ];
  it('Render the table', () => {
    const elem = render(
      <ProviderWrapper
        children={<DriversTable data={data} />}
      ></ProviderWrapper>
    );
    expect(elem).toMatchSnapshot();
  });
});
