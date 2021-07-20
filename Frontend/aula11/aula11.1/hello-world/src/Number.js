import React, { useState } from 'react'

export default function Number() {
  const [number, setNumber] = useState(0)

  return (
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber((Math.random() * 10).toFixed(2))}>RandomNumber</button>
    </div>
  )
}
