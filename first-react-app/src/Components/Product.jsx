import React from 'react'

const Product = ({ title, price }) => {

  return (
    <div>
      <h2>Title:{title}</h2>
      <p>Price:{price === 0 ? 'Free' : price}</p>
    </div>
  )
}

export default Product
