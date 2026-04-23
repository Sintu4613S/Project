import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, url } = this.props;
    return (
      <>
        <div className="container">
          <div className="card" style={{ width: '18rem' }}>
            <img src={imgUrl ? imgUrl : 'https://images.indianexpress.com/2026/04/Sooryavanshi-6-1.jpg'} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default NewsItem
