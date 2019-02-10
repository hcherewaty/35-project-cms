import React from 'react';
import { Provider } from 'react-redux';
import renderer from "react-test-renderer";
import CMS from '../../../components/cms/cms';
import Models from '../../../components/cms/models';
import Record from '../../../components/cms/record';
import Records from '../../../components/cms/records';
import createStore from '../../../store/index';


describe('CMS component', () => {
  let store, wrapper;

  beforeEach(() => {
    store = createStore();
    wrapper = mount(<Provider store={store}><CMS/></Provider>);
  });

  it('lives', () => {
    expect(true).toBeTruthy();
  });

  it('contains an h1 element', () => {
    let component = shallow(<CMS/>);
    expect(component.find('h1').exists()).toBeTruthy();
  });

  it('contains an iframe element', () => {
    let component = shallow(<CMS/>);
    expect(component.find('iframe').exists()).toBeTruthy();
  });

  it('contains an iframe element', () => {
    let component = shallow(<CMS/>);
    expect(component.find('footer').exists()).toBeTruthy();
  });
});

// describe('Records component', () => {
//   let store, wrapper;

//   beforeEach(() => {
//     store = createStore();
//     wrapper = mount(<Provider store={store}><Records/></Provider>);
//   });
  
//   it('contains a button', () => {
//     let component = shallow(<Records/>);
//     expect(component.find('button').exists()).toBeTruthy();
//   });
// });

// describe('Record component', () => {
//   let store, wrapper;

//   beforeEach(() => {
//     store = createStore();
//     wrapper = mount(<Provider store={store}><Record/></Provider>);
//   });

//   it('contains a form element', () => {
//     let component = shallow(<Record/>);
//     expect(component.find('form').exists()).toBeTruthy();
//   });

//   it('renders', () => {
//     let component = mount(<Record/>);
//     let formFinder = component.find('form');
//     expect(formFinder.find('find')).toBeTruthy();

//   });
// });