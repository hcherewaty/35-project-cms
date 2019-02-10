import React from 'react';
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import App from '../../../index';

import Record from '../../../src/components/cms/record';

describe('<App />', () => {

  let store, wrapper;

  beforeEach(() => {
    store = createStore();
    wrapper = mount(<Provider store={store}><CMS/></Provider>);
  });
  
    // it("proof of life", () => {
    //   let component = shallow(<CMS />);
    //   expect(component.find("nav").exists()).toBeTruthy();
    // });

});

// describe('<Record />', () => {

  // it("proof of life", () => {
  //   let component = shallow(<Record />);
  //   expect(component.find("form").exists()).toBeTruthy();
  // });

  // it("changes state on submit", () => {
  //   let component = mount(<Record />);
  //   let submitter = component.find("button.btn.btn-info");
  //   submitter.simulate("click");
  //   expect(component.find("span").text()).toBe(true);
  // });

  // it("changes state on click to -1", () => {
  //   let component = mount(<Counter />);
  //   let clickerDown = component.find("a.downClick");
  //   clickerDown.simulate("click");
  //   expect(component.state("count")).toBe(-1);
  //   expect(component.find("span").text()).toContain(-1);
  // });

  // it('renders correctly', () => {
  //   const tree = renderer.create(<Record />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
// })