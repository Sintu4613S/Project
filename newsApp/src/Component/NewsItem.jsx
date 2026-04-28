import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = (props) => {
  let { title, desc, imgUrl, url } = props;
  return (
    <>
      <div className="container">
        <div className="card" style={{ minHeight: '400px' }}>
          <img src={imgUrl} className="card-img-top" alt="img" />
          <div className="card-body text-center" >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <Link to={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark ">Read More</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default NewsItem
