import React from 'react'

const Input = ({ type, onKeyDown, placeholder }, ref) => (
  <input ref={ref} type={type} onKeyDown={onKeyDown} placeholder={placeholder} />
)

const forwardedInput = React.forwardRef(Input)

export default forwardedInput
