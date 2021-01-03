import React, { Component } from 'react';
import axios from '../axios/axios'
class Course extends Component {
  state = {
    data: [],
    isLoading: true,
  };
  async componentDidMount() {
    await axios
      .get("Course/2")
      .then((response) => {
        this.setState({
          data: response.data.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("data");

    console.log(this.state.data);
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <p>loading</p>
        ) : (
          <div className="container my-3">
            <div className="card-deck mb-3 text-center">
              {this.state.data.map((item) => (
                <div>
                  <div className="card mb-3 shadow-sm">
                    <div className="card-header">
                      <i class="fa fa-book" aria-hidden="true"></i>
                      <h4 className="my-0 font-weight-normal">
                        {item.courseName}
                      </h4>
                    </div>
                    <div className="card-body">
                      <button type="button" class="btn btn-primary" onClick = {() => this.courseOnClick(item.courseId)}>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  courseOnClick = (courseId) => {
      console.log(courseId);
  }
}
 
export default Course;