import React from "react";
import { shallow } from "enzyme";
import { App } from "../src/App";


describe('Test App Entry Point', function (){
    it('Should have a header tag with Phantom', function () {
        const wrapper = shallow(<App/>);
        expect(wrapper.find("h1").text()).toEqual("Phantom");
    });

    it('Should have a p tag with powered by CodeBandits', function () {
        const wrapper = shallow(<App/>);
        expect(wrapper.find("p").text()).toEqual("powered by CodeBandits");
    });
});