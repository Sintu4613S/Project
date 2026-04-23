import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'

export class News extends Component {
  state = {
    articles: [],
    loading: false,
    page: 1,
    totalResults: 1561
  }
  async componentDidMount() {
    let url = (`https://newsapi.org/v2/everything?q=cricket&from=2026-03-23&sortBy=publishedAt&apiKey=8f5eefadd07341a8ac2f4b3c90a296ac&page=1&pageSize=${this.props.pageSize}`)
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      articles: parseData.articles,
      loading: false,
    })
    console.log(parseData)
  }
  handleNext = async () => {
    // console.log("hi i am next")
    let url = (`https://newsapi.org/v2/everything?q=cricket&from=2026-03-23&sortBy=publishedAt&apiKey=8f5eefadd07341a8ac2f4b3c90a296ac&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      articles: parseData.articles,
      loading: false,
      page: this.state.page + 1,

    })
  }
  handlePrevious = async () => {
    if (this.state.page > 1) {
      // console.log("hi i am previous")
      let url = (`https://newsapi.org/v2/everything?q=cricket&from=2026-03-23&sortBy=publishedAt&apiKey=8f5eefadd07341a8ac2f4b3c90a296ac&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`)
      this.setState({ loading: true })
      let data = await fetch(url)
      let parseData = await data.json()
      this.setState({
        articles: parseData.articles,
        loading: false,
        page: this.state.page - 1,
      })

    }



  }
  render() {
    return (
      <>
        <div className="container">
          <h1 className='my-4 text-center'>News- Top HeadLines</h1>
          {this.state.loading && <Loading />}
          <div className='container my-3'>

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
          </div>
          <div className="d-flex justify-content-around my-3">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>

          </div>
        </div>
      </>
    )
  }
}

export default News
