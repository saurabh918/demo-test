import React, { useRef } from 'react'
import ChildRef from './ChildRef'

const ParentRef = () => {
  const parentRef = useRef()

  // const handleFocus = () => {
  //   inputRef.current.focus()
  // }
  return (
    <div>
      <h3>ParentRef</h3>
      <ChildRef ref={parentRef} />
      <button onClick={() => parentRef.current.handleFocus()}>Focus</button>
    </div>
  )
}

export default ParentRef