import { shallow } from 'enzyme';
import React from 'react'
import { Input_Container } from "./Input-Container";


it('check is Input_Container is loaded', () => {
  const c = shallow(<Input_Container />);
  expect(c).toBeTruthy()
});

it('test to match snapshot', () => {
    const component = shallow(<Input_Container />);
    expect(component.getElements()).toMatchSnapshot();
});