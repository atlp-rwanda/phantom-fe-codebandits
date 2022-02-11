import React from "react";
import { shallow } from "enzyme";
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import App from "../src/App";
import { counterReducer } from "../src/redux/reducers/counterReducer";
import reducer from '../src/redux/store'
import { increment } from "../src/redux/reducers/counterReducer";

// import App from '.';



const mockStore = configureStore([]);

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



describe('COunter component', ()=>{
  it('renders the count', ()=>{

    const action = {
      dispatch: jest.fn(),
      value: 3,
    }

    const wrapper = shallow(<App {...action} />)
    expect(wrapper.find('h3')).toEqual(3)
  })

  it('dispatches the right action for incrementing', ()=>{

    const action = {
      dispatch: jest.fn(),
      value: 3,
    }

    const wrapper = shallow(<App {...action} />);
    wrapper.find('button.increment').simulate('click');

    expect(action.dispatch).toHaveBeenCalledWith(counterReducer(action.value))
  })

  it('dispatches the right action for decrementing', ()=>{

    const action = {
      dispatch: jest.fn(),
      value: 3,
    }

    const wrapper = shallow(<App {...action} />);
    wrapper.find('button.decrement').simulate('click');

    expect(action.dispatch).toHaveBeenCalledWith(counterReducer(action.value))
  })

})




// describe('My Connected React-Redux Component', () => {
//   let store;
//   let component;

//   beforeEach(() => {
//     store = mockStore({
//       myState: 'sample text',
//     });

//     component = renderer.create(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//   });

//   it('should render with given state from Redux store', () => {
//     expect(component.toJSON()).toMatchSnapshot();
//   });

//   it('should dispatch an action on button click', () => {

//   });
// });


