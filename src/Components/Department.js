import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Employeedisplay from './Employeedisplay';

export class Politics extends Component {
    articles = [
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
    
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "software",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
        {
          emp_name: "kaja sai vamsi",
          emp_id: "AIPL12345",
          Branch: "Banglore",
          Department: "softwares",
          emp_image:
            "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
          Dateofjoin: "17/12/2021",
        },
      ];
        
    
    constructor(){
        super();
        this.state = {
            articles : this.articles,
        };
    }

    render() {
        return (
          <div className="container my-3">
            <h2 style={{ color: "white" }}>Altimetrik - Software</h2>
            <div className="row">
              {this.state.articles.filter(element => element.Department === "software").map((element) => {
                return (
                  <div className="col-md-4" >
                      <Employeedisplay  name = {element.emp_name}  id = {element.emp_id}  branch = {element.Branch} dept = {element.Department} emp_image = {element.emp_image}    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
}

export default Politics;
