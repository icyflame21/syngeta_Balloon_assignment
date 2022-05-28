import { shallow } from 'enzyme';
import React from 'react'
import { Empty_Container } from "./Empty-Container";


it('check is Empty_Container is loaded', () => {
  const c = shallow(<Empty_Container />);
  expect(c).toBeTruthy()
});