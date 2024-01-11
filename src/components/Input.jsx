import React, { forwardRef, useEffect } from "react";

const Input = forwardRef((props, ref) => {
    const { value, onChange } = props;

    useEffect(() => {
        ref.current.focus()
    }, []);
  
    return (
      <textarea
        ref={ref}
        value={value}
        onChange={onChange}
        name="note"
      />
    )
  })

  export default Input;