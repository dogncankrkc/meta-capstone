import React from 'react';

export default function Button({ text, onClick, children, className = '', type = 'button', disabled = false, ...rest }) {
  return (
    <button
      className={`btn ${className}`.trim()}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {text ?? children}
    </button>
  );
}
