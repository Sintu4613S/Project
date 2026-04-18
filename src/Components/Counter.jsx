import React, { useState } from 'react'
let inc = 0
let dec = 0
export default function Counter(props) {
  const [counter, setCounter] = useState('0');

  return (
    <>
      <div className='container'>
        <h1 style={{ textAlign: 'center', padding: '20px' }}>Score:{counter}</h1>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          className="btn btn-outline-success mx-2"
          onClick={() => setCounter(counter + 1)} >
          Increment
        </button>
        <button
          className="btn btn-outline-success mx-2"
          onClick={() => setCounter(counter - 1)}>
          DecreMent
        </button>
      </div>
    </>
  )
}
