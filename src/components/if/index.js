import React from 'react';
import PropTypes from 'prop-types';

/**
 * @Function render - accepts condition and children as parameters with initial values assigned.  If condition is truthy, children are returned, otherwise null is returned.
 *
 * @param {boolean} [condition=false]
 * @param {*} [children=null]
 * @returns  children if condition is truthy, otherwise null is returned.
 */
const render = (condition = false, children = null) => {
  return !!condition ? children : null;
};

export /**
 * @Function If - accepts props as a parameter and maps over React.Children and clones each child element and condition to be rendered in render function based on condition.
 *
 * @param {*} props
 */
const If = props =>
  React.Children.map(props.children, child =>
    React.cloneElement(child, { condition: props.condition }),
  );

export /**
 *@Function Then - accepts props as a parameter and sends props.condition and props.children to render function.
 *
 * @param {*} props
 */
const Then = props => render(props.condition, props.children);

export /**
 * @Function Else - accepts props as a parameter and sends !props.condition and props.children to render function.
 *
 * @param {*} props
 */
const Else = props => render(!props.condition, props.children);
export /**
 * @Function When - calls render function with props of condition and children.
 *
 * @param {*} props
 */
const When = props => render(props.condition, props.children);

export /**
 * @Function Unless - calls render function with props of condition and children.
 *
 * @param {*} props
 */
const Unless = props => render(!props.condition, props.children);
