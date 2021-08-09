import reducer from "../index";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    inputs: {
      id: -1,
      title: "",
      description: "",
      isChecked: false,
    },
    todos: {
      todos: [],
    },
  });
});
