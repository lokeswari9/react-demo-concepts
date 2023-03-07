import React from 'react';
import PureComponent from '../../components/PureComponent';
//import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
//import Adapter from 'enzyme-adapter-react-15';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// describe('when pure component is given',()=>{
//     it('should render',()=>{
//         const wrapper = renderer.create(<PureComponent/>);
//         let tree=wrapper.toJSON();
//         expect(tree).toMatchSnapshot();
//     })
//     it('should render',()=>{
//         const wrapper = renderer.create(<PureComponent/>);
//         wrapper.toJSON().children[1].props.onClick();
//         expect(wrapper.toJSON()).toMatchSnapshot();
//     })
// })
describe('when pure component is given',()=>{
    it('should render',()=>{
        const wrapper = shallow(<PureComponent/>);
        expect(wrapper).toHaveLength(1);
    })
})