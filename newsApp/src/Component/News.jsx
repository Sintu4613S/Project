import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    category: 'general',
    page: 10
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    page: PropTypes.number
  }
  state = {
    articles: [],
    loading: false,
    page: 1,
    totalResults: 0
  }
  async updateNews() {
    let url = (`https://newsapi.org/v2/top-headlines?category=${this.props.category}&from=from=2026-03-25&sortBy=publishedAt&apiKey=8f5eefadd07341a8ac2f4b3c90a296ac&page=${this.state.page}&pageSize=${this.props.pageSize}`)
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    this.setState({
      articles: parseData.articles,
      loading: false,
      totalResults: parseData.totalResults
    })
  }
  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({

      });
    }, 1500);
  };


  async componentDidMount() {
    await this.updateNews()
  }
  // handleNext = async () => {

  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.updateNews()
  // }
  // handlePrevious = async () => {

  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.updateNews()

  render() {
    return (
      <>
        <div className="container">
          <h1 className='my-4 text-center'>News- Top HeadLines</h1>
          {/* {this.state.loading && <Loading />} */}
          <div className='container my-3'>
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Loading />}
            >
              <div className="row">

                {/* {this.state.articles?.map((element) => { */}
                {/* if the articles is exist ,map over them and return a list item for each */}
                {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title}
                        desc={element.description}
                        imgUrl={element.urlToImage}
                        url={element.url}
                      />
                    </div>
                  )
                })}
              </div>
            </InfiniteScroll>
          </div>
          {/* <div className="d-flex justify-content-around my-3">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>

          </div> */}
        </div>
      </>
    )
  }
}

export default News
