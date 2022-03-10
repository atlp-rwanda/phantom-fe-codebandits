import { fireEvent, render, screen } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer, { act } from 'react-test-renderer';
import ResetRouterLayout from '../accounts/AccountRouter.js';
import ResetFormPage from '../accounts/EmailForm.js';
import EmailSent from '../accounts/EmailSent.js';
import ResetNewPassword from '../accounts/NewPasswordForm.js';
import PasswordChanged from '../accounts/PasswordChanged.js';
import NotFound from '../NotFound.js';

const mockHandleEmail = jest.fn((email) => {
  return Promise.resolve(email);
});

const wrapper = shallow(
  <BrowserRouter>
    <ResetRouterLayout />
  </BrowserRouter>
);

describe('Reset page layout', () => {
  it('Render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});

describe('Reset password layout', () => {
  it('should render all routes', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <ResetRouterLayout />
        </BrowserRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('should render the new password form', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <ResetNewPassword />
        </BrowserRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('should render the email sent notification', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <EmailSent />
        </BrowserRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('should render the email Form', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <ResetNewPassword />
        </BrowserRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  // it('should render the errors', async () => {
  //   await act(async () => {
  //     const handleSubmitMock = jest.fn();
  //     const elem = mount(
  //       <BrowserRouter>
  //         <ResetFormPage handleSubmit={handleSubmitMock()} />
  //       </BrowserRouter>
  //     );
  //     elem.simulate('change', { target: { name: 'email', value: 'fab' } });
  //     elem.find('form').simulate('submit');
  //     expect(elem).toMatchSnapshot();
  //   });
  // });
  it('should render the success message', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <PasswordChanged />
        </BrowserRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});

// describe('Actions and branches', () => {
//   it('should return errors', async () => {
//     act(async () => {
//       const handleSubmitMock = jest.fn();
//       const elem = mount(
//         <BrowserRouter>
//           <ResetNewPassword handleSubmit={handleSubmitMock()} />
//         </BrowserRouter>
//       );
//       elem.simulate('change', {
//         target: {
//           name: 'password',
//           value: '123'
//         }
//       });
//       elem.simulate('change', {
//         target: {
//           name: 'password2',
//           value: '1234'
//         }
//       });
//       elem.find('form').simulate('submit');
//       expect(elem).toMatchSnapshot();
//     });
//   });
//   it('should return errors', () => {
//     const handleSubmitMock = jest.fn();
//     const elem = mount(
//       <BrowserRouter>
//         <ResetNewPassword handleSubmit={handleSubmitMock()} />
//       </BrowserRouter>
//     );
//     act(() => {
//       elem.simulate('change', {
//         target: {
//           name: 'password',
//           value: '123'
//         }
//       });
//       elem.simulate('change', {
//         target: {
//           name: 'password2',
//           value: '1234'
//         }
//       });
//       elem.find('form').simulate('submit');
//     });
//     expect(elem).toMatchSnapshot();
//     expect(handleSubmitMock).toBeCalled();
//   });
//   it('should return success', async () => {
//     const handleSubmitMock = jest.fn();
//     const onValid = jest.fn();

//     await act(async () => {
//       const elem = mount(
//         <BrowserRouter>
//           <ResetNewPassword
//             onValid={onValid()}
//             handleSubmit={handleSubmitMock()}
//           />
//         </BrowserRouter>
//       );
//       elem.simulate('change', {
//         target: {
//           name: 'password',
//           value: 'Fab123'
//         }
//       });
//       elem.simulate('change', {
//         target: {
//           name: 'password2',
//           value: 'Fab123'
//         }
//       });
//       elem.find('form').simulate('submit');
//       expect(elem).toMatchSnapshot();
//       expect(handleSubmitMock).toBeCalled();
//       expect(onValid).toBeCalled();
//     });
//   });
// });

describe('NotFound', () => {
  it('It renders without', () => {
    const elem = renderer.create(
      <BrowserRouter>
        <NotFound></NotFound>
      </BrowserRouter>
    );
    expect(elem).toMatchSnapshot();
  });
});

describe('Testing Library', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ResetFormPage handleEmail={mockHandleEmail} />
      </BrowserRouter>
    );
  });
  it('Should display required error when email is invalid', async () => {
    fireEvent.submit(screen.getByTestId('form'));
    expect(await screen.getAllByRole('alert')).toHaveLength(1);
    expect(mockHandleEmail).not.toBeCalled();
  });
  it('Should display an invalid email error', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'test'
      }
    });
    fireEvent.submit(screen.getByTestId('form'));
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(await screen.findAllByText('Invalid email')).toHaveLength(1);
  });
  it('Should submit the form when email is valid', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'fab@me.com'
      }
    });
    fireEvent.submit(screen.getByTestId('form'));
    expect(await screen.findAllByText('SENDING...')).toHaveLength(1);
  });
});


describe('function testing', () => {
  let wrapper;

  it('Should return a errors', async () => {
    await act(async () => {
      wrapper = mount(
        <BrowserRouter>
          <ResetFormPage handleEmail={mockHandleEmail} />
        </BrowserRouter>
      );
      wrapper.find('form').simulate('submit');
      expect(await wrapper).toMatchSnapshot();
    });
  });
  it('Should return a errors in new password', async () => {
    await act(async () => {
      wrapper = mount(
        <BrowserRouter>
          <ResetNewPassword handleEmail={mockHandleEmail} />
        </BrowserRouter>
      );
      wrapper.simulate('change', {
        target: {
          name: 'password',
          value: '123'
        }
      });
      wrapper.simulate('change', {
        target: {
          name: 'password2',
          value: '123'
        }
      });
      wrapper.find('form').simulate('submit');
      expect(await wrapper).toMatchSnapshot();
    });
  });
});
