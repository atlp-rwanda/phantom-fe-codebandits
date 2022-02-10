import React from "react";
import { shallow } from "enzyme";

import App from "../src/App";

describe("Test App Entry Point", () => {
  it("Should have a header tag with Phantom", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("h1").text()).toEqual("Phantom");
  });

  it("Should have a p tag with powered by CodeBandits", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("p").text()).toEqual("powered by CodeBandits");
  });
});
