import React, { Component } from "react";
import axios from "../axios/axios";
import DropDownComponent from "../DropDownComponent/DropDown";
import 'react-dropdown/style.css';


class ServiceOffering extends Component {
  state = {
    loading: true,
    industries: [],
    functions: [],
    topics: [],
    mentors: [],
    selectedIndustry: "selectIndustry",
    selectedFunction: "selectFunction",
    selectedTopic: "selectTopic",
  };

  async componentDidMount() {
    this.getAllIndustries();
    this.getAllFunctions();
    this.getAllTopics();
    this.getAllMentors();
  }

  render() {
    const {
      industries,
      functions,
      topics,
      mentors,
      selectedIndustry,
      selectedFunction,
      selectedTopic
    } = this.state;
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
                {mentors
                  .filter((mentor) =>
                    mentor.industriesList.includes(selectedIndustry)
                  )
                  .filter((mentor) =>
                    mentor.functionList.includes(selectedFunction)
                  )
                  .filter((mentor) => mentor.topicList.includes(selectedTopic))
                  .map((mentor) => (
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
                            onClick={() =>
                              this.mentorsSelectedForBooking(mentor)
                            }
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
        selectedFunction: event.value,
      });
    } else if (defaultValue === "Select Topics") {
      this.setState({
        selectedTopic: event.value,
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
  };

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
  };

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
  };

  getAllMentors = async () => {
    await axios
      .get("User/GetAllMentors")
      .then((response) => {
        if (response.data.isSuccess) {
          for (let i = 0; i < response.data.data.length; i++) {
            let industries = response.data.data[i].industries;
            let industriesList = [];
            for (let j = 0; j < industries.length; j++) {
              industriesList.push(industries[j].industryName);
            }
            industriesList.push("selectIndustry");

            let functions = response.data.data[i].functions;
            let functionList = [];
            for (let j = 0; j < functions.length; j++) {
              functionList.push(functions[j].functionName);
            }
            functionList.push("selectFunction");

            let topics = response.data.data[i].topics;
            let topicList = [];
            for (let j = 0; j < topics.length; j++) {
              topicList.push(topics[j].topicName);
            }
            topicList.push("selectTopic");

            response.data.data[i].industriesList = industriesList;
            response.data.data[i].functionList = functionList;
            response.data.data[i].topicList = topicList;
          }
          this.setState({
            mentors: response.data.data,
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default ServiceOffering;
