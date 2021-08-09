import React from "react";
import Card from "../index";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import { Wrapper } from "../style";

describe("Card", () => {

  it("renders correctly", () => {
    const tree = renderer.create(<Card></Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with 3 props", () => {
    
  });
});
