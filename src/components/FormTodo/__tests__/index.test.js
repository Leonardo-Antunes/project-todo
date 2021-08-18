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
    tag: "",
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

  test('Renderiza componente não vazio sem crashar', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1)
  })

  test('deve renderizar um input para o title', () => {
    const wrapper = setup();

    const TextFieldTitle = wrapper.find({ id: 'title' });
    expect(TextFieldTitle).toBeTruthy()

  })

  test('deve renderizar um input para o description', () => {
    const wrapper = setup();

    const TextFieldDescription = wrapper.find({ id: 'description' });
    expect(TextFieldDescription).toBeTruthy()
  })
})