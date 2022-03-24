import React from 'react';
import { mount } from 'enzyme';
import { screen, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TrackingPage from '../TrackingPage.js';

describe('TrackingPage', () => {
  it('should render TrackingPage', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <TrackingPage />
        </MemoryRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('It should test the handleRoute function', () => {
    const handleRoute = jest.fn();
    const event = {
      target: {
        origin: { value: 'some value' },
        destination: { value: 'some value' }
      }
    };
    const component = mount(
      <MemoryRouter>
        <TrackingPage handleRoute={handleRoute()} />
      </MemoryRouter>
    );
    const form = component.find('form');
    form.simulate('submit', event);
    expect(handleRoute).toBeCalledTimes(1);
  });

  it('It should test the handleChange function', () => {
    const handleChange = jest.fn();
    const component = mount(
      <MemoryRouter>
        <TrackingPage handleChange={handleChange()} />
      </MemoryRouter>
    );
    const form = component.find('#origin');
    form.simulate('change');
    expect(handleChange).toBeCalledTimes(1);
  });
  it('It should test the handleChangeDes function', () => {
    const handleChangeDes = jest.fn();
    const component = mount(
      <MemoryRouter>
        <TrackingPage handleChangeDes={handleChangeDes()} />
      </MemoryRouter>
    );
    const button = component.find('#destination');
    button.simulate('change');
    expect(handleChangeDes).toBeCalledTimes(1);
  });
});

describe('Tracking page', () => {
  jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
      Promise.resolve(
        success({
          coords: {
            latitude: 12.5,
            longitude: 30.3
          }
        })
      )
    )
  };
  global.navigator.geolocation = mockGeolocation;
  it('should render the tracking page', () => {
    mount(
      <MemoryRouter>
        <TrackingPage />
      </MemoryRouter>
    );
    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
  });
});

describe('Tracking page', () => {
  it('should test the setOrigin', async () => {
    const elem = render(
      <MemoryRouter>
        <TrackingPage />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByTestId('origin'), {
      target: { value: 'Nyabugogo' }
    });
    fireEvent.change(screen.getByTestId('destination'), {
      target: { value: 'Remera' }
    });
    fireEvent.submit(screen.getByTestId('form'), {
      target: {
        origin: { value: 'Nyabugogo' },
        destination: { value: 'Remera' }
      }
    });

    expect(elem).toMatchSnapshot();
  });
});
