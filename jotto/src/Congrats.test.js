import React from 'react';
import { shallow } from 'enzyme';
import { findDataAttr, checkProps } from '../Test/testUtils';
import Congrats from './Congrats';

const defaultProps = { success: false }

/**
 * @function
 * @param { Object } props -Component props specific to the congrats Component
 * @return { ShallowWrapper }
*/

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats { ...setupProps } />);
};

test('renders without error', ()=> {
  const wrapper = setup();
  const component = findDataAttr( wrapper, 'component-congrats' );
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findDataAttr( wrapper, 'component-congrats' );
  expect( component.text() ).toBe('');
});

test('renders non-empty congrats message when `success` is true', () => {
  const wrapper = setup({ success: true });
  const component = findDataAttr( wrapper, 'congrats-message');
  expect( component.text().length ).not.toBe(0);
});

test('Does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps( Congrats, expectedProps );
});
