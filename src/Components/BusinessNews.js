import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class BusinessNews extends Component {
    articles = [];
    
      
    //     {
    //       source: { id: "news24", name: "News24" },
    //       author: null,
    //       title:
    //         "Businessinsider.co.za | Sars is hiring 250 new call centre operators, with just matric and a touch of experience",
    //       description:
    //         "Most of the positions are in Gauteng, but there are lots of posts in the Western Cape and KwaZulu-Natal too.",
    //       url: "https://www.businessinsider.co.za/sars-is-hiring-250-call-centre-operators-with-senior-certificates-2022-1",
    //       urlToImage:
    //         "http://cdn.24.co.za/files/Cms/General/d/9960/9848748f4d1a4516b22111ad5727583d.jpg",
    //       publishedAt: "2022-01-12T06:26:52+00:00",
    //       content:
    //         "<ul><li>The SA Revenue Service is hiring 250 new call centre service agents.</li><li>It is looking for a senior certificate, two years of customer-service experience, great English, and energy. </li>… [+2171 chars]",
    //     },
    //     {
    //       source: { id: "breitbart-news", name: "Breitbart News" },
    //       author: "John Binder",
    //       title:
    //         "Ron DeSantis Agenda: Blacklist Companies Facilitating Illegal Immigration",
    //       description:
    //         "Gov. Ron DeSantis is laying an ambitious agenda, one that couples a populist approach to business with immigration enforcement.",
    //       url: "https://www.breitbart.com/politics/2022/01/11/ron-desantis-agenda-blacklist-companies-facilitating-illegal-immigration-to-florida/",
    //       urlToImage:
    //         "https://media.breitbart.com/media/2021/12/GettyImages-1328546869-640x335.jpg",
    //       publishedAt: "2022-01-12T01:23:07Z",
    //       content:
    //         "Gov. Ron DeSantis (R) is laying out an ambitious agenda in the Florida state legislature, one that couples a populist approach to business with immigration enforcement.\r\nLast month, DeSantis set fort… [+1654 chars]",
    //     },
    //     {
    //       source: { id: "abc-news-au", name: "ABC News (AU)" },
    //       author: "Keira Proust, Emily Doak",
    //       title:
    //         "COVID-19 puts future of live music in doubt as more events are cancelled, but hope is left for some",
    //       description:
    //         "Businesses and festival organisers relying on the live music industry in NSW hope their events will not be lost forever as more events are cancelled.",
    //       url: "http://www.abc.net.au/news/2022-01-12/music-festivals-cancelled-as-nsw-grapples-with-covid/100748410",
    //       urlToImage:
    //         "https://live-production.wcms.abc-cdn.net.au/f1a5b27cfa77b7f184d88660aa65f718?impolicy=wcms_crop_resize&cropH=635&cropW=1128&xPos=0&yPos=0&width=862&height=485",
    //       publishedAt: "2022-01-12T00:15:28Z",
    //       content:
    //         "The future of live music remains uncertain for those who rely on it in NSW, as more music festivals and live gigs are cancelled due to the ongoing pandemic. \r\nKey points:\r\n<ul><li>Organisers of music… [+3753 chars]",
    //     },
    //     {
    //       source: {
    //         id: "the-wall-street-journal",
    //         name: "The Wall Street Journal",
    //       },
    //       author: "David Benoit",
    //       title: "Citigroup to Exit Mexico Consumer Banking Business",
    //       description:
    //         "CEO Jane Fraser has been trying to simplify the bank, concentrating on wealthy consumers and companies",
    //       url: "https://www.wsj.com/articles/citigroup-to-exit-mexico-consumer-banking-business-11641936135?mod=hp_lead_pos7",
    //       urlToImage: "https://images.wsj.net/im-465933/social",
    //       publishedAt: "2022-01-11T21:22:00Z",
    //       content:
    //         "Citigroup Inc. will exit its Mexico consumer banking business, the latest strategic shift by Chief Executive Jane Fraser.\r\nThe bank said Tuesday it would exit consumer, small-business and middle-mark… [+126 chars]",
    //     },
    //     {
    //       source: { id: "google-news-uk", name: "Google News (UK)" },
    //       author: "Sebastian Payne",
    //       title:
    //         "Whitehall’s inquisitor in chief  prepares to give verdict on No 10 parties",
    //       description:
    //         "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
    //       url: "https://news.google.com/__i/rss/rd/articles/CBMiP2h0dHBzOi8vd3d3LmZ0LmNvbS9jb250ZW50L2E4MjJmNDBlLTE3OTAtNGRiNS1iYWRkLWJmMTA2OTRjM2IxZNIBAA?oc=5",
    //       urlToImage: null,
    //       publishedAt: "2022-01-11T19:37:12+00:00",
    //       content:
    //         "Keep abreast of significant corporate, financial and political developments around the world.\r\nStay informed and spot emerging risks and opportunities with independent global reporting, expert\r\ncomme… [+32 chars]",
    //     },
    //     {
    //       source: { id: "nbc-news", name: "NBC News" },
    //       author: "Daniel Arkin",
    //       title:
    //         "Inside the lasting friendship between Bob Saget and Norm Macdonald",
    //       description:
    //         "In a business where rivalries run deep, Bob Saget and Norm Macdonald — who died within four months of each other — enjoyed a lasting friendship.",
    //       url: "https://www.nbcnews.com/pop-culture/pop-culture-news/lasting-friendship-bob-saget-norm-macdonald-rcna11778",
    //       urlToImage:
    //         "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-01/220111-saget-macdonald-ONETIMEUSEmn-1030-93eaa9.jpg",
    //       publishedAt: "2022-01-11T17:53:00Z",
    //       content:
    //         "The celebrity roasts that air on Comedy Central are usually bawdy affairs where insults zip around the room like poisoned darts. Nobody is spared.\r\nBut when Norm Macdonald took the stage in 2008 at t… [+4211 chars]",
    //     },
    //     {
    //       source: { id: "fortune", name: "Fortune" },
    //       author: "Jeremy Kahn",
    //       title:
    //         "At Google Cloud, A.I. ethics requires ‘Iced Tea’ and ‘Lemonaid’",
    //       description:
    //         'At Google\'s Cloud business, "Iced Tea" and "Lemonaid" are the key to avoiding ethical pitfalls.',
    //       url: "https://fortune.com/2022/01/11/google-cloud-andrew-moore-ai-ethics-lemonade-iced-tea/",
    //       urlToImage:
    //         "https://content.fortune.com/wp-content/uploads/2022/01/GettyImages-1361466393-e1641816486414.jpg?resize=1200,600",
    //       publishedAt: "2022-01-11T17:43:27Z",
    //       content: "Skip to Content",
    //     },
    //     {
    //       source: { id: "financial-times", name: "Financial Times" },
    //       author: null,
    //       title:
    //         "‘Money is no object’: Ghislaine Maxwell trial shines light on class divide",
    //       description:
    //         "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
    //       url: "https://www.ft.com/content/0b9d93da-1687-4eb1-bd53-0a84a1b40dff",
    //       urlToImage: null,
    //       publishedAt: "2021-12-14T06:22:29.1165883Z",
    //       content:
    //         "Keep abreast of significant corporate, financial and political developments around the world.\r\nStay informed and spot emerging risks and opportunities with independent global reporting, expert\r\ncomme… [+32 chars]",
    //     },
    //     {
    //       source: { id: "financial-times", name: "Financial Times" },
    //       author: null,
    //       title:
    //         "Need relief from the stress of screen time? There’s an app for that",
    //       description:
    //         "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
    //       url: "https://www.ft.com/content/221cf7c4-56e7-4c7e-b6c0-cc3737da0330",
    //       urlToImage: null,
    //       publishedAt: "2021-12-14T06:22:27.4295096Z",
    //       content:
    //         "Let our global subject matter experts broaden your perspective with timely insights and opinions you\r\ncant find anywhere else.",
    //     },
    //     {
    //       source: { id: "financial-post", name: "Financial Post" },
    //       author: "Financial Post",
    //       title: "Business Essentials",
    //       description:
    //         "Stay up-to-date with the latest business trends and information on the Canadian economy, stock market and personal finance. Learn to save money, invest in the market, grow your wealth and advance your career with new skills.",
    //       url: "http://business.financialpost.com/category/personal-finance/business-essentials/",
    //       urlToImage: null,
    //       publishedAt: "2021-11-17T17:22:19.8301159Z",
    //       content:
    //         "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2021 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]",
    //     },
    //     {
    //       source: { id: "financial-post", name: "Financial Post" },
    //       author: "Financial Post",
    //       title: "FP Comment",
    //       description:
    //         "Read through unique Editorials and Business &amp; Finance columns from our top editors covering current events.",
    //       url: "http://business.financialpost.com/category/opinion/",
    //       urlToImage: null,
    //       publishedAt: "2021-10-25T14:22:51.3470632Z",
    //       content:
    //         "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2021 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]",
    //     },
    //     {
    //       source: { id: "financial-post", name: "Financial Post" },
    //       author: "Financial Post",
    //       title: "Business Essentials",
    //       description:
    //         "Stay up-to-date with the latest business trends and information on the Canadian economy, stock market and personal finance. Learn to save money, invest in the market, grow your wealth and advance your career with new skills.",
    //       url: "https://financialpost.com/category/personal-finance/business-essentials/",
    //       urlToImage: null,
    //       publishedAt: "2021-10-25T14:22:31.3051754Z",
    //       content:
    //         "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2021 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]",
    //     },
    //     {
    //       source: { id: "financial-post", name: "Financial Post" },
    //       author: "Financial Post",
    //       title: "News",
    //       description:
    //         "Latest breaking business news &amp; headlines. Stay in touch with the latest happenings in Local and International organizations and financial sector.",
    //       url: "http://business.financialpost.com/category/news/",
    //       urlToImage: null,
    //       publishedAt: "2020-07-09T18:37:17.5638279Z",
    //       content:
    //         "Visit the Postmedia Brands page\r\n365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n© 2020 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmis… [+41 chars]",
    //     },
    //   ];
    
  
  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  async componentDidMount() {
    let url ="https://newsapi.org/v2/top-headlines?apiKey=69bef30723a84d7d8346b67d6cad64e5&q=business";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles:parseData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2 style={{ color: "white" }}>News Monk - Business</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : " "
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BusinessNews;
