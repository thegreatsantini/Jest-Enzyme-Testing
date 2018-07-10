import React from 'react';
import App from './App';
import Enzyme, {
  shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

/**
 * Factory Function to create a shallow wrapper for the App component.
 * @function setup
 * @param { object } props - Component props specific to this setup
 * @param { object } state - Initial state for the setup
 * @returns { ShallowWrapper }
*/

const setup = (props={}, state=null) => {
  const wrapper = shallow( <App {...props} /> );
  if (state) wrapper.setState(state);
  return wrapper;
}

/**
 * Retun Shallow Wrapper containing Node(s) with the given data-test value.
 * @function findByDataAtr
 * @param { ShallowWrapper } wrapper - Enzyme shallow wrapper to search within
 * @param { string } val -Value of the data-set attibute for search
 * @return { ShallowWrapper }
*/

const findByDataAtr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByDataAtr( wrapper,'component-app' );
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByDataAtr( wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByDataAtr( wrapper, 'counter-display' );
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)
});

test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup( null, { counter } );

  // locate and click button
  const button = findByDataAtr( wrapper, 'increment-button' );
  button.simulate('click');
  wrapper.update();

  // Find display and check Value
  const counterDisplay = findByDataAtr( wrapper, 'counter-display' );
  expect(counterDisplay.text()).toContain(counter + 1);
});

// challange one
// create a new button with the text decriment counter
// when the button is clicked decriment the counter

test('decrement button renders', () => {
  const wrapper = setup();
  const decrementButton = findByDataAtr( wrapper, 'decrement-button' );
  expect(decrementButton.length).toBe(1);
})

test('clicking the decrement counter decrements counter by one', () => {
  const counter = 7;
  const wrapper = setup( null , { counter } );

  // find and click decrementButton
  const decrementButton = findByDataAtr(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  wrapper.update();

  // check that it decrements
  const counterDisplay = findByDataAtr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter-1);
})

// challange 2
// if the counter is at 0 and the decrement button is clicked
//  1) dont decrement the counterDisplay
//  2) display and error message saying that the counter cant go below 0
