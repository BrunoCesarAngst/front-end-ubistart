import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

// import {  } from './styles';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label htmlFor={fieldName}>
        {label}
        <br />
        <input ref={inputRef} {...rest} />
      </label>
    </>
  );
}
