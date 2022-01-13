import React, { Component } from "react";

export default class Employeedisplay extends Component {
  render() {
    let { name , id, branch ,dept , emp_image } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              emp_image
                ? emp_image
                : "https://c.ndtvimg.com/2022-01/fj3eolhg_virat-kohli-afp_625x300_11_January_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675"
            }
            style={{ widht: "268px", height: "200px" }}
          />
          <div className="card-body">
            <h4>Name :- {name}</h4>
            <h5>Emp_id :- {id}</h5>
            <h5>Dept :- {dept}</h5>
            <p>{branch}</p>
          </div>
        </div>
      </div>
    );
  }
}
