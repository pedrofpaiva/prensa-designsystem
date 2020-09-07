import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Button = props => {

  const style = classnames({
    'button': true,
    'bg-color-primary-1': props.style === 'primary' && !props.disabled,
    'fc-color-white': props.style === 'primary' && !props.disabled,
    'secondary': props.style === 'secondary' && !props.disabled,
    'tertiary': props.style === 'tertiary' && !props.disabled,
    'disabled': props.disabled,
    [`${props.custom}`]: props.custom
  });

  return (
    <button className={style} onClick={props.disabled ? null : props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  custom: PropTypes.string, 
  style: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  style: 'primary'
};

export default Button;