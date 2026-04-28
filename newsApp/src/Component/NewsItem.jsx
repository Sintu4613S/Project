import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const NewsItem = (props) => {
  return (
    <>
      <div className="container">
        <div className="card" style={{ minHeight: '400px' }}>
          <img src={props.imgUrl} className="card-img-top" alt="img" />
          <div className="card-body text-center" >
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <Link to={props.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark ">Read More</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default NewsItem
