import React from "react";
import Card from "../index";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";

describe("Component: Card", () => {
  const action = {
    title: "",
    description: "",
    tag: "",
  };

  // it("deve renderizar os três textos inseridos sem props", () => {
  //   const component = shallow(<Card />);

  //   expect(component).toMatchSnapshot();
  // });

  it("deve renderizar os três textos vindos de props", () => {
    const component = shallow(
      <Card
        {...action}
        title="Lavar a casa"
        description="Pegar o balde e lavar o teto da casa"
        tag="trabalho de casa"
      />
    );

    expect(component.prop("title")).toBe("Lavar a casa");
    expect(component.prop("description")).toBe(
      "Pegar o balde e lavar o teto da casa"
    );
    expect(component.prop("tag")).toBe("trabalho de casa");
  });
});
