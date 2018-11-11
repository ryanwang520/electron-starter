import React, { useState, useEffect } from 'react'

const useCounter = () => {
  const [count, setCount] = useState(0)
  const inc = () => setCount(count + 1)
  return [count, inc]
}

function Example() {
  const [count, inc] = useCounter()
  useEffect(() => {
    document.title = `You clicked ${count} times`
    return () => {}
  })

  return (
    <div>
      <p>You are {count} times</p>
      <button onClick={() => inc()}>Click me</button>
    </div>
  )
}
export default Example
