import '@testing-library/jest-dom';
import { configure as testLibraryConfigure } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import 'regenerator-runtime/runtime';

testLibraryConfigure({ testIdAttribute: 'id' });

jest.mock('react-toastify', () => {
  const actual = jest.requireActual('react-toastify');
  Object.assign(actual, { toast: jest.fn() });
  return actual;
});

configure({ adapter: new Adapter() });
