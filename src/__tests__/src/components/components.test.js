import React from 'react';
import renderer from "react-test-renderer";
import CMS from '../../../components/cms/cms';
import Models from '../../../components/cms/models';
import createStore from '../../../index';

describe('<App />', () => {

  let store, wrapper;

  beforeEach(() => {
    store = createStore();
    wrapper = mount(<Provider store={store}><BrowserRouter><CMS/></BrowserRouter></Provider>);
  });
});

describe('CMS component', () => {

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

describe('Models component', () => {

  it('containes a div', () => {
    let component = shallow(<Models/>);
    expect(component.find('div').exists()).toBeTruthy();
  });
});