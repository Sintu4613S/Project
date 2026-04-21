import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, desc, ImgUrl, link } = this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{ width: '18rem' }}>
          <img src={ImgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}.....</h5>
            <p className="card-text">{desc}.....</p>
            <a href={link} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
