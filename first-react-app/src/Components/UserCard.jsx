import React from 'react'

export default function UserCard(props) {
  return (
    <div>
      <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>My nameis:{props.name} And My age is:{props.age}
      </h1>

    </div>
  )
}
// UserCard.defaultProps = {
//   name: 'nameHere',
//   age: 'ageHere'
// }