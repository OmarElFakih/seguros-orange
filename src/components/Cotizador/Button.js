import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  wide: PropTypes.bool,
  wideMobile: PropTypes.bool,
  disabled: PropTypes.bool
}

const defaultProps = {
  tag: 'button',
  color: '',
  size: '',
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false
}

const Button = ({
  className,
  tag,
  color,
  size,
  loading,
  wide,
  wideMobile,
  disabled,
  ...props
}) => {

  const classes = classNames(
    'button', 'btn_get', 'btn_hover', 
    color && `button-${color}`,
    size && `button-${size}`,
    loading && 'is-loading',
    wide && 'button-block',
    wideMobile && 'button-wide-mobile',
    className
  );

  const Component = tag;
  return (
    <>
    <Component
      {...props}
      className={classes}
      disabled={disabled}
    />
    {/*<a className={`btn_get btn_hover button`}>Cotizar</a>*/}
    </>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;