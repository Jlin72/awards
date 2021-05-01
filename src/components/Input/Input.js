import React from 'react';

const Input = ({inputId, inputClassName, inputOnChangeCb, inputPlaceholder, inputRef, inputAriaLabel, inputAriaDescribedby}) => {
  return <input id={inputId} className={inputClassName} onChange={inputOnChangeCb} placeholder={inputPlaceholder} ref={inputRef} aria-label={inputAriaLabel} aria-describedby={inputAriaDescribedby} />
}

export default Input;