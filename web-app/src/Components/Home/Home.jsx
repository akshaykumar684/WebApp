import React, { Component } from "react";
import photo1 from "./Images/photo1.jfif";
import photo2 from "./Images/photo2.jfif";
import photo3 from "./Images/photo3.jfif";
import PBCImage from "./Images/PBCImage.png";
import FlowDiagram from "./Images/FlowDiagram.png";
import FlowDiagram2 from "./Images/FlowDiagram2.png";
import Mentoring from "./Images/Mentoring.png";
import history from "../../history"
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={photo1} className="d-block w-100 img-fluid" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Knoweldge is Power</h5>
                <p>
                  Without knowledge action is useless and knowledge without
                  action is futile.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={photo2} className="d-block w-100 img-fluid" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  If you have knowledge, let others light their candles in it.
                </h5>
                <p>We are drowning in information but starved for knowledge.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={photo3} className="d-block w-100 img-fluid" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Risk comes from not knowing what you're doing.</h5>
                <p>
                  Human behavior flows from three main sources: desire, emotion,
                  and knowledge.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-4">
              <img
                src="https://source.unsplash.com/140x140/?Coder"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                alt="..."
              />
              <h2>Individual</h2>
              <p>Solutions for individual.</p>
              {/* <p>
                <a className="btn btn-secondary" href="/home" role="button">
                  View details »
                </a>
              </p> */}
              <button type="button" className="btn btn-secondary" onClick={this.loadIndividualDetailsComponent}> View details »</button>
            </div>
            <div className="col-lg-4">
              <img
                src="https://source.unsplash.com/140x140/?Computer"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                alt="..."
              />
              <h2>College</h2>
              <p>Solution for colleges.</p>
              <p>
                <a className="btn btn-secondary" href="/home" role="button">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://source.unsplash.com/140x140/?Books"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                alt="..."
              />
              <h2>Corporate</h2>
              <p>Solution for Corporate.</p>
              <p>
                <a className="btn btn-secondary" href="/home" role="button">
                  View details »
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <img
                  src="https://source.unsplash.com/1024x1024/?Cosmos"
                  className="bd-placeholder-img"
                  width="540"
                  height="340"
                  alt="..."
                />
                {/* <img
                  src="https://source.unsplash.com/1024x1024/?Coder"
                  className="bd-placeholder-img"
                  width="540"
                  height="340"
                  alt="..."
                /> */}
              </div>
            </div>
            <div className="col">
              <div className="row-sm-4">
                <br />
                <br />
              </div>
              <div>
                <h3>MySocialCapital</h3>
                <p>
                  MySocialCapital (MSC) is a platform connecting students and
                  professionals, who are looking for career development through
                  mentorship, to a vibrant community of industry leaders acting
                  as mentors, sponsors, connectors and informational powerhouse.
                  Connect to these leaders from the industries on MSC Platform
                  and create your own support network in form of a Personal
                  Board of Directors (PBD), which is a group of mentors that you
                  choose to advise, guide, coach, advocate and sponsor.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="row-sm-4">
                <br />
              </div>
              <div>
                <h3>Why Build Your PBD</h3>
                <p>
                  Unwritten Rules of Career – It takes more than just “doing
                  good job” for career growth.
                </p>
                <p>
                  You need to plan your career goals, increase competency,
                  increase visibility in industry, promote yourself and gain
                  access to opportunities for career progression.{" "}
                </p>
                <p>
                  Your Social Capital can be your competitive advantage. The
                  best way to navigate these unwritten rules is to get yourself
                  a network of individuals who can act as your Mentor,
                  Connector, Sponsor and informational Powerhouse – your own
                  “Personal Board of Directors (PBD)”.{" "}
                </p>
                <p>
                  “Personal Board of Directors” (PBD) help you develop overall
                  professional perspective for your next level of career by:
                </p>
                <ul>
                  <li>
                    Accelerating your experience by shortening the learning
                    curve and extending diversified perspective on your
                    challenges
                  </li>
                  <li>
                    Expanding your practical industry knowledge and help
                    increasing competency{" "}
                  </li>
                  <li>
                    Broadening your network for providing access to key
                    resources & opportunities and increasing visibility across
                    the industry
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div>
                <img
                  src="https://source.unsplash.com/1024x1024/?Coder"
                  className="bd-placeholder-img"
                  width="540"
                  height="340"
                  alt="..."
                />
                <img
                  src={PBCImage}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="row">
            <h3>What We Do?</h3>
            <img
              src={FlowDiagram}
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <img
              src={FlowDiagram2}
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="row">
            <h3>How it Works?</h3>
            <img
              src={Mentoring}
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
        </div>
      </div>
    );
  }
  loadIndividualDetailsComponent = () => {
    history.push("/service");
  }
}

export default Home;
