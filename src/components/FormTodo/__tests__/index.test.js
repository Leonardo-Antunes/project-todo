import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import FormTodo from '../index';


const middlewares = [];
const mockStore = configureStore(middlewares)
const state = {
  inputs: {
    id: -1,
    title: "",
    description: "",
    isChecked: false,
  }
}

const store = mockStore(state)

const setup = () => shallow(
  <Provider store={store}>
    <FormTodo />
  </Provider>
)


describe('testing FormTodo Component', () => {

  test('renders non-empty component without crashing', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1)
  })

  test('should be render a title input', () => {
    const wrapper = setup();

    const TextFieldTitle = wrapper.find({ id: 'title' });
    expect(TextFieldTitle).toBeTruthy()

  })

  test('should be render a description input', () => {
    const wrapper = setup();

    const TextFieldDescription = wrapper.find({ id: 'description' });
    expect(TextFieldDescription).toBeTruthy()
  })
/* 
  test('should call addItem method when click on the submit button', () => {
    const wrapper = setup();

    const spy = jest.spyOn(wrapper.instance, "addItem");
    wrapper.find("Button").simulate("click");
    expect(spy).toHaveBeenCalled();

  }) */

})