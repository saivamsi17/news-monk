import React, { Component } from "react";

export class Newsitem extends Component {

  render() {
      let {title,description, imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://c.ndtvimg.com/2022-01/fj3eolhg_virat-kohli-afp_625x300_11_January_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675"} style={{widht : "268px" , height : "200px"}} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href= {newsUrl}  target = "_blank"className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;


