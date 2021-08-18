import React from "react";
import Card from "../index";
import renderer from "react-test-renderer";

describe("Card", () => {
  it("renderiza corretamente", () => {
    const tree = renderer.create(<Card></Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
