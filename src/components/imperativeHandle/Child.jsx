import React, { useImperativeHandle, useRef } from 'react'

const Child = (props,ref) => {
  const inputRef = useRef()
  const handleFocus = () => {
    inputRef.current.focus()
  }

  useImperativeHandle(ref, () => {
    return {
      handleFocus
    }
  })

  return (
    <div>
      <h3>Child</h3>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default React.forwardRef(Child)