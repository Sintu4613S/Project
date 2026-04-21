import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title='title' desc='mydesc' ImgUrl='https://admin.dainikamadershomoy.com/images/large/2026/04/20/news_1776700554311.webp' />
          </div>
          <div className="col-md-4">
            <NewsItem title='title' desc='mydesc' />
          </div> <div className="col-md-4">
            <NewsItem title='title' desc='mydesc' />
          </div> <div className="col-md-4">
            <NewsItem title='title' desc='mydesc' />
          </div>
        </div>
      </div>
    )
  }
}

export default News
