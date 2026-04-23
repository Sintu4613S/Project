import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src="loading.gif" alt="Loading....." style={{ width: '80px' }} />
      </div>
    )
  }
}

export default Loading
