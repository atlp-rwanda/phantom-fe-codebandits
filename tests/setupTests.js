import '@testing-library/jest-dom';
import { configure as testLibraryConfigure } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

testLibraryConfigure({ testIdAttribute: 'id' });

configure({ adapter: new Adapter() });
