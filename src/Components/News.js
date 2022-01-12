import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
    articles =  [];
    //     {
    //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //       "author": null,
    //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //       "publishedAt": "2020-04-27T11:41:47Z",
    //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //       "author": null,
    //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //       "publishedAt": "2020-03-30T15:26:05Z",
    //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     },
    
    //     {
    //       "source": {
    //         "id": "the-washington-times",
    //         "name": "The Washington Times"
    //       },
    //       "author": "The Washington Times https://www.washingtontimes.com",
    //       "title": "Special Section: The Unregulated Podcast",
    //       "description": "The Unregulated Podcast is hosted by Washington Times columnist, Mike McKenna and Tom Pyle, President of the American Energy Alliance. Each week they dig into the latest in energy, politics, and anything else that is on their minds.",
    //       "url": "https://www.washingtontimes.com/specials/unregulated-podcast/",
    //       "urlToImage": "https://media.washtimes.com/media/specials/thumbnails/UnregulatedThumbnail.jpg",
    //       "publishedAt": "2022-01-10T15:52:42.3401982Z",
    //       "content": "The Unregulated Podcast is hosted by Washington Times columnist, Mike McKenna and Tom Pyle, President of the American Energy Alliance. Each week they dig into the latest in energy, politics, and anyt… [+1048 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": "the-washington-times",
    //         "name": "The Washington Times"
    //       },
    //       "author": "The Washington Times http://www.washingtontimes.com",
    //       "title": "Latest Quizzes",
    //       "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
    //       "url": "https://www.washingtontimes.com/quiz/",
    //       "urlToImage": null,
    //       "publishedAt": "2021-02-10T03:52:37.2719772Z",
    //       "content": "Featured Quizzes\r\nAttention all William Shakespeare experts. Pinpoint the prose's origin plucked from one of his many famous plays in this multiple-choice challenge.\r\n Shares \r\nName these legendary c… [+32652 chars]"
    //     },
    //     {
    //       "source": { "id": "the-jerusalem-post", "name": "The Jerusalem Post" },
    //       "author": null,
    //       "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
    //       "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
    //       "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
    //       "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
    //       "publishedAt": "2019-11-13T04:41:00Z",
    //       "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
    //     }
    //   ];
    
    constructor(){
        super();
        this.state = {
            articles : this.articles,
        };
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=69bef30723a84d7d8346b67d6cad64e5";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles:parseData.articles});

    }


    render() {
        return (
            <div className="container my-3">
                <h2 style={{color:  "white" }}>News Monk - Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key = {element.url}>
                    <Newsitem  title = {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):" "} imageUrl = {element.urlToImage}  newsUrl = {element.url}/>
                </div>;
                })}
                </div>              
            </div>
        );
    }
}

export default News;
