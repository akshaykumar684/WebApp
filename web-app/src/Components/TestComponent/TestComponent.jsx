import React, { Component } from "react";
import axios from "../axios/axios";
import DropDownComponent from "../DropDownComponent/DropDown";
import 'react-dropdown/style.css';


class Test extends Component {
  state = {
    loading: true,
    industries: [],
    functions: [],
    topics: [],
    mentors: [],
    selectedIndustry: "",
    selectedFunction: "",
    selectedTopic: "",
  };

  async componentDidMount() {
   this.getAllIndustries();
   this.getAllFunctions();
   this.getAllTopics();
   this.getAllMentors();
  }

  render() {
    const {industries,functions,topics,mentors} = this.state
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <DropDownComponent
            dataList={industries}
            dataChange={this.dropDownDataChange}
            defaultValue="Select Industries"
          />
          <DropDownComponent
            dataList={functions}
            dataChange={this.dropDownDataChange}
            defaultValue="Select Function"
          />
          <DropDownComponent
            dataList={topics}
            dataChange={this.dropDownDataChange}
            defaultValue="Select Topics"
          />
        </div>
        <div>
          {this.state.loading ? (
            <p>Loading</p>
          ) : (
            <div className="container my-3">
              <div className="card-deck mb-3 text-center">
                {mentors.map((mentor) => (
                  <div>
                    <div className="card mb-3 shadow-sm">
                      <div className="card-header">
                        <i class="fa fa-book" aria-hidden="true"></i>
                        <h4 className="my-0 font-weight-normal">
                          {mentor.name}
                        </h4>
                      </div>
                      <div className="card-body">
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => this.mentorsSelectedForBooking(mentor)}
                        >
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
      </div>
    );
  }

  dropDownDataChange = (event, defaultValue) => {
    if (defaultValue === "Select Industries") {
      this.setState({
        selectedIndustry: event.value,
      });
    } else if (defaultValue === "Select Function") {
      this.setState({
        selectedIndustry: event.value,
      });
    } else if (defaultValue === "Select Topics") {
      this.setState({
        selectedIndustry: event.value,
      });
    }
  };

  mentorsSelectedForBooking = (mentor) => {
    console.log(mentor);
  };

  getAllIndustries = async () => {
    await axios
      .get("Industry/GetAllIndutries")
      .then((response) => {
        if (response.data.isSuccess) {
          let industryList = [];
          for (let i = 0; i < response.data.data.length; i++) {
            industryList.push(response.data.data[i].industryName);
          }
          this.setState({
            industries: industryList,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAllFunctions = async () => {
    await axios
      .get("Function/GetAllFunctions")
      .then((response) => {
        if (response.data.isSuccess) {
          let functionList = [];
          for (let i = 0; i < response.data.data.length; i++) {
            functionList.push(response.data.data[i].functionName);
          }
          this.setState({
            functions: functionList,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAllTopics = async () => {
    await axios
    .get("Topic/GetAllTopics")
    .then((response) => {
      if (response.data.isSuccess) {
        let topicList = [];
        for (let i = 0; i < response.data.data.length; i++) {
          topicList.push(response.data.data[i].topicName);
        }
        this.setState({
          topics: topicList,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getAllMentors = async () => {
    await axios
    .get("User/GetAllMentors")
    .then((response) => {
      if (response.data.isSuccess) {
        console.log(response.data.data);
        this.setState({
          mentors: response.data.data,
          loading: false,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export default Test;
