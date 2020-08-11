import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

it('should display a h3 with label "Messenger App"', () => {
  expect(wrapper.containsMatchingElement(<h3>Messenger App</h3>)).toBe(true);
});
