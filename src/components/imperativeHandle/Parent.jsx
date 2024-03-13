import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {
  const parentRef = useRef()
  return (
    <div>
      <h3>parent</h3>
      <Child ref={parentRef} />
      <button onClick={()=> parentRef.current.handleFocus()}>parent focus</button>
    </div>
  )
}

export default Parent