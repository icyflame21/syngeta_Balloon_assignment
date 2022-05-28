import App from './App';

import { shallow } from 'enzyme';
import React from 'react'


it('renders without crashing', () => {
  const div = document.createElement('div');
  const c = shallow(<App />);
  expect(c).toBeTruthy()
});
