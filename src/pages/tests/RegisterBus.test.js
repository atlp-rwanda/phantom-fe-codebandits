import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import RegisterBus from '../RegisterBus.js';

describe('RegisterBus component test', () => {
  it('it should render Register bus page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <RegisterBus />
        </MemoryRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
describe('RegisterBus component test', () => {
  const busInfo = {
    busType: 'Coaster',
    plateNumber: 'RAB1234',
    seats: '30'
  };
  const registerBusToDBMock = jest.fn();

  it('it should register bus to database', () => {
    const elem = render(
      <MemoryRouter>
        <RegisterBus registerBusToDB={registerBusToDBMock(busInfo)} />
      </MemoryRouter>
    );
  });
});
