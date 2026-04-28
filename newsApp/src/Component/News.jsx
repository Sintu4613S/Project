import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 10
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }
  state = {
    articles: [],
    loading: true,
    page: 1,
    totalResults: null
  }
  async updateNews() {
    this.setState({ loading: true })
    const url = (`https://newsapi.org/v2/top-headlines?category=${this.props.category}&sortBy=publishedAt&apiKey=8f5eefadd07341a8ac2f4b3c90a296ac&page=${this.state.page}&pageSize=${this.props.pageSize}`)
    try {
      const data = await fetch(url)
      const parseData = await data.json()
      console.log(parseData)
      this.setState({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        loading: false
      })
    } catch (error) {
      console.error('Error fetching news:', error)
      this.setState({ loading: false })
    }
  }

  async componentDidMount() {
    this.updateNews()
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    this.setState({ loading: true })
    const url = (`https://newsapi.org/v2/top-headlines?category=${this.props.category}&sortBy=publishedAt&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`)
    try {
      const data = await fetch(url)
      const parseData = await data.json()
      console.log(parseData)
      this.setState({
        articles: this.state.articles.concat(parseData.articles),
        totalResults: parseData.totalResults,
        page: nextPage,
        loading: false
      })
    } catch (error) {
      console.error('Error loading more news:', error)
      this.setState({ loading: false })
    }
  };

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
  // }

  render() {
    return (
      <>
        <div className="container">
          <h1 className='my-4 text-center'>News- About {this.props.category}</h1>
          {/* {this.state.loading && <Loading />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.totalResults === null || this.state.articles.length < this.state.totalResults}
            loader={<Loading />}
          >

            <div className='container my-3'>
              <div className="row">
                {/* {this.state.articles?.map((element) => { */}
                {/* if the articles is exist ,map over them and return a list item for each */}
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem

                        title={element.title}
                        desc={element.description}
                        imgUrl={element.urlToImage ? element.urlToImage : 'hero.png'}
                        url={element.url}
                      /></div>
                  )
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
        {/* <div className="d-flex justify-content-around my-3">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>

          </div> */}
      </>
    )
  }
}
export default News
