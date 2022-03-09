import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import renderer, { act } from 'react-test-renderer';
import Login from '../Login.js';

const navigateMock = () => {
  return jest.fn();
};
const wrapper = renderer.create(
  <BrowserRouter>
    <Login />
  </BrowserRouter>
);
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  register: jest.fn(),
  handleSubmit: jest.fn()
}));

describe('Render the errors', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login navigate={navigateMock} onValid={jest.fn()} />
      </BrowserRouter>
    );
  });
  it('Render email error', async () => {
    fireEvent.submit(screen.getByTestId('loginForm'));
    expect(await screen.findAllByText(/Email is required/i)).toHaveLength(1);
  });
  it('Should not display errors when the form is valid', async () => {
    fireEvent.input(screen.getByTestId('email'), {
      target: {
        value: 'test@gmail.com'
      }
    });
    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: 'Test@123'
      }
    });
    fireEvent.submit(screen.getByTestId('loginForm'));
    await waitFor(() => {
      expect(screen.queryAllByText(/Enter a valid email/i)).toHaveLength(0);
    });
  });
});

describe('Login snapshot test', () => {
  it('should render Login', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('test the onValid function', () => {
    const onValid = jest.fn(wrapper.getInstance(), 'onValid');
    expect(onValid).toMatchSnapshot();
  });
});

describe('Login page tests', () => {
  const wrapper = shallow(<Login />);
  it('renders without errors', () => {
    wrapper;
  });
  it('has one child element', () => {
    expect(wrapper.children().length).toEqual(1);
  });
  it('has one form element', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });
  it('has the image of a bus', () => {
    expect(wrapper.find('img').prop('alt')).toEqual(
      'vector image of a bus on map'
    );
  });
  it('has a h2 with text login', () => {
    expect(wrapper.find('h2').text()).toEqual('Login');
  });
  it('has one button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
  it('has a button with text Login', () => {
    expect(wrapper.find('button').text()).toEqual('Login');
  });
  it('has two input elements', () => {
    expect(wrapper.find('input').length).toEqual(2);
  });
  it('has input for email', () => {
    expect(wrapper.find('input[name="email"]').length).toBe(1);
  });
  it('has input for password', () => {
    expect(wrapper.find('input[name="password"]').length).toBe(1);
  });
  it('has one h4 element', () => {
    expect(wrapper.find('h4').length).toEqual(1);
  });
  it('has forgot password heading', () => {
    expect(wrapper.find('h4').text()).toEqual('Forgot password?');
  });
});

describe('Attempts', () => {
  it('Should return an attempts error', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Login navigate={navigateMock} onValid={jest.fn()} />
        </BrowserRouter>
      );
      fireEvent.submit(screen.getByTestId('loginForm'));
      expect(await screen.findAllByText(/Email is required/i)).toHaveLength(1);
      fireEvent.submit(screen.getByTestId('loginForm'));
      expect(await screen.findAllByText(/Email is required/i)).toHaveLength(1);
      fireEvent.submit(screen.getByTestId('loginForm'));
      expect(await screen.findAllByText(/Email is required/i)).toHaveLength(1);
      fireEvent.submit(screen.getByTestId('loginForm'));
      expect(
        await screen.findAllByText(/Wrong attempts of more than 3 times./i)
      ).toHaveLength(1);
      fireEvent.submit(screen.getByTestId('loginForm'));
      expect(
        await screen.findAllByText(/Wrong attempts of more than 3 times./i)
      ).toHaveLength(1);
      fireEvent.submit(screen.getByTestId('loginForm'));
      expect(await screen.findAllByText(/Unlock in 5 minutes/i)).toHaveLength(
        1
      );
      fireEvent.submit(screen.getByTestId('loginForm'));
      expect(
        await screen.findAllByText(/Try again in 5 minutes/i)
      ).toHaveLength(1);
    });
  });
});

describe('Login page functionality tests', () => {
  const handleSubmitMock = jest.fn();
  const wrapper = mount(
    <MemoryRouter>
      <Login handleSubmit={handleSubmitMock()} />)
    </MemoryRouter>
  );
  const simulateOnChangeInput = (wrapper, inputSelector, newValue) => {
    const input = wrapper.find(inputSelector);
    input.simulate('change', {
      target: { value: newValue }
    });
  };
  const loginBtn = wrapper.find('#login-btn');
  it('calls handleSubmit function on form submit', () => {
    act(() => {
      loginBtn.simulate('click');
      expect(handleSubmitMock).toBeCalledTimes(1);
    });
  });
});
