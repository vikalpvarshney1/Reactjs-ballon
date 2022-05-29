import { shallow } from "enzyme/build";
import React, { Component } from 'react';
import Balllon1 from "./Balllon1";
it('check is Balllon1 is loaded',()=>{
    const component= shallow(<Balllon1/>)
    expect(component).toBeTruthy()
    expect(component.getElements()).toMatchSnapshot();
});
it('test to match snapshot',()=>{
    const component= shallow(<Balllon1/>)
    expect(component.getElements()).toMatchSnapshot();
});