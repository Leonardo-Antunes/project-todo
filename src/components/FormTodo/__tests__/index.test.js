import React from 'react';
import { shallow } from 'enzyme';
import FormTodo from '../index';


const setup = () => shallow(<FormTodo />)

//const findByTestAttr = (wrapper, val) => wrapper.find(`[label='${val}']`)

test('renders non-empty component without crashing', () => {
  const wrapper = setup(); 
  expect(wrapper.length).toBe(1) 
})

