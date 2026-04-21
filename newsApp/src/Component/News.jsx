import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  //  It used manually data to display the news but in future it will be used API to fetch the data and display it on the website.
  // data =
  //   [

  //     {
  //       "id": "674773b14f7d9e399befbb4ab999df9c",
  //       "url": "https://economictimes.indiatimes.com/news/new-updates/there-isnt-just-fan-following-of-dhoni-there-is-sycophancy-sanjay-manjrekar-blasts-csk-management-for-poor-ipl-2026-performance/articleshow/130405743.cms",
  //       "title": "'There isn’t just fan following of Dhoni, there is sycophancy': Sanjay Manjrekar blasts CSK management for poor IPL 2026 performance",
  //       "description": "IPL 2026: Chennai Super Kings has endured a poor start to IPL 2026, winning just two of its first six matches. Amid the franchise's poor performance ex Indian cricketer Sanjay Manjrekar has blamed the CSK management and said there isn’t just a fan following of Dhoni, there is sycophancy around it.",

  //       "language": "english",
  //       "country": [
  //         "india"
  //       ],
  //       "datatype": "news",
  //       "fetched_at": "2026-04-21 03:03:50",
  //       "image_url": "https://img.etimg.com/thumb/msid-130405773,resizemode-4,width-1200,height-900,imgsize-45516,overlay-economictimes/articleshow.jpg",
  //       "source_name": "The Economic Times",
  //       "source_url": "https://economictimes.indiatimes.com",
  //       "source_icon": "https://n.bytvi.com/economictimes_indiatimes.png",
  //       "duplicate": false
  //     },
  //     {
  //       "id": "3fd394516084e18fa8ee553440324c44",
  //       "url": "https://gyanhigyan.com/sports/ipl/dasun-shanaka-faces-one-season-ban-from-psl-after-ipl-move/cid18545082.htm",
  //       "title": "Dasun Shanaka Faces One-Season Ban from PSL After IPL Move",
  //       "description": "The Pakistan Cricket Board has imposed a one-season ban on Dasun Shanaka from the Pakistan Super League after he opted out to join the Rajasthan Royals in the IPL. This decision follows a breach of contractual agreements, leading to his ineligibility for the 2027 PSL season. Shanaka has expressed regret over his actions and hopes to return to the PSL in the future. This ban comes shortly after a similar penalty was imposed on another player, highlighting the PCB's strict stance on contractual obligations. Read on to learn more about the implications of this decision for Shanaka's career.",
  //       "language": "english",
  //       "country": [
  //         "india"
  //       ],
  //       "datatype": "news",

  //       "fetched_at": "2026-04-20 21:08:26",
  //       "image_url": "https://gyanhigyan.com/static/c1e/static/themes/12/99589/3072/images/gyanhegyanlogo1.webp?width=1280&height=720&resizemode=4",
  //       "source_name": "Gyanhigyan",
  //       "source_url": "https://gyanhigyan.com",
  //       "source_icon": "https://n.bytvi.com/gyanhigyan.png",
  //       "duplicate": false
  //     },
  //     {
  //       "id": "0ee4d2f6ff2912e3bdef286bc44dd125",
  //       "url": "https://newsable.asianetnews.com/sports/cricket-ipl-2026-mi-pacer-ashwani-kumar-4-24-spell-vs-gt-draws-massive-praise-online-articleshow-zu0kk7o",
  //       "title": "IPL 2026: MI Pacer Ashwani Kumar's 4/24 Spell vs GT Draws Massive Praise Online",
  //       "description": "In the IPL 2026 clash, the Mumbai Indians defeated the Gujarat Titans by 99 runs, ending a four-match losing streak. Left-arm pacer Ashwani Kumar was the star, taking a match-winning 4/24 in his first game of the season, while Tilak Varma scored an unbeaten 101.",
  //       "language": "english",
  //       "country": [
  //         "india"
  //       ],
  //       "datatype": "news",
  //       "fetched_at": "2026-04-20 20:32:07",
  //       "image_url": "https://static.asianetnews.com/images/w-1280,h-720,format-jpg,imgid-01kpp7q61xjk9bm13xgtw6690y,imgname-20260420590l-1776715274300.jpg",
  //       "source_name": "Asianet Newsable",
  //       "source_url": "https://newsable.asianetnews.com",
  //       "source_icon": "https://n.bytvi.com/newsable_asianetnews.jpg",
  //       "duplicate": false
  //     },
  //   ]
  // state = {
  //   articles: this.data,
  //   loading: false,
  // }

  render() {
    return (
      <div className='container'>
        <h1> News-Top HeadLines</h1>
        <div className="row" >
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.id}>
                <NewsItem title={element.title ? element.title.slice(0, 50) : ""} desc={element.description ? element.description.slice(0, 80) : ""} ImgUrl={element.image_url} link={element.url} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News
