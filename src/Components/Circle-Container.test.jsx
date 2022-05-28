import { shallow } from 'enzyme';
import React from 'react'
import { Circle_Container } from "./Circle-Container";


it('check is Circle_Container is loaded', () => {
  const component = shallow(<Circle_Container />);
  expect(component).toBeTruthy()
  expect(component.getElements()).toMatchSnapshot();
});

it('test to match snapshot', () => {
    const component = shallow(<Circle_Container />);
    expect(component.getElements()).toMatchSnapshot();
  });
