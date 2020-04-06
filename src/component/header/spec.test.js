import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';


const setUp =(props={})=>{
    const component = shallow(<Header {...props} />);
    return component;
}

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('Header Component', () => {

    //    it('It should render without errors', () => {
    //        const component = shallow(<Header />);
    //         const wrapper = component.find('.headerComponent');
    //         expect(wrapper.length).toBe(1);
    //     });

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('should render without errors', () => {
        // const component = setUp();
        //  const wrapper = component.find(`[data-test='headerComponent']`);
        const wrapper = findByTestAtrr(component, 'headerComponent');
         expect(wrapper.length).toBe(1);
     });
        it('should render a logo', ()=>{
            const wrapper = findByTestAtrr(component, 'logoImg');
            expect(wrapper.length).toBe(1);
        });
});