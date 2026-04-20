import React from 'react'

export default function Contact(props) {
  return (
    <>
      <div className='container mt-4'>
        <h1 style={{ color: props.mode === 'light' ? 'black' : 'white', textAlign: 'center' }}> Contact Us</h1>
        <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>This is the contact page.</p>
        <div className="card" style={{ width: '18rem' }}>
          {/* <img src="#" className="card-img-top" alt="..."> */}
          <div className="card-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0b2c4f' }}>
            <p className="card-text" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          </div>
        </div>
      </div>
    </>
  )
}
