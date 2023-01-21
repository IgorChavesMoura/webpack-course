import React from 'react';
import './Button.scss';

function Button(props) {
  const { title, remainingProps } = props;

  return <button type="button" {...remainingProps}>{title}</button>;
}

export default Button;
