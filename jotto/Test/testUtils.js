import checkPropTypes from 'check-prop-types';

/**
 * return nodes with spefic data attribute
 * @function
 * @param { ShallowWrapper } wrapper -root enzyme wrapper Component
 * @param { String } value -data attribute for spefic item to be tested
 * @return { ShallowWrapper }
*/

export const findDataAttr = (wrapper, val) => {
  return wrapper.find( `[data-test='${val}']` )
}

export const checkProps = ( component, conformingProp ) => {
  const propError = checkPropTypes(
    component.PropTypes,
    conformingProp,
    'prop',
    component.name
   )
   expect(propError).toBeUndefined();
};
