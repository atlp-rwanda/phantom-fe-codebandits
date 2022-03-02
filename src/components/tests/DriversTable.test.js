import DriversTable from '@components/DriversTable.js';
import { render } from '@testing-library/react';
import ProviderWrapper from '@utils/TestUtil.js';
import React from 'react';

describe('Driver Table', () => {
  it('Render the table', () => {
    const elem = render(
      <ProviderWrapper children={<DriversTable />}></ProviderWrapper>
    );
    expect(elem).toMatchSnapshot();
  });
});
