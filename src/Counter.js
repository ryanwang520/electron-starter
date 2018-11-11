import React, { useState } from 'react'

setTimeout(() => {
  document.body.appendChild(document.createTextNode('wtf'))
}, 1000)
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You are {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
export default Example
