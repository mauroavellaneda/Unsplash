import React from "react";
import { shallow } from "enzyme";
import LandingPage from "../components/landing/LandingPage";

describe("Landing page", () => {
  it("should render correctly on load", () => {
    const component = shallow(<LandingPage />);
    expect(component).toMatchSnapshot();
  });
});
