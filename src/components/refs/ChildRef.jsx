import React, { useImperativeHandle, useRef } from 'react'

const ChildRef = React.forwardRef((props,ref) => {
  const inputRef = useRef()

  const handleFocus = () => {
    inputRef.current.focus()
  }

  useImperativeHandle(ref,() => {
    return {
      handleFocus
    }
  },[])

  return (
    <div>
      <h3>Child Ref</h3>
      <input type="text" ref={inputRef} />
      {/* <button onClick={handleFocus}>Focus</button> */}
    </div>
  )
})

export default ChildRef