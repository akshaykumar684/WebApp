import React, { Component } from 'react';
import photo1 from './Images/photo1.jfif'
import photo2 from './Images/photo2.jfif'
import photo3 from './Images/photo3.jfif'
class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={photo1} className="d-block w-100 img-fluid" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Knoweldge is Power</h5>
                                <p>Without knowledge action is useless and knowledge without action is futile.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={photo2} className="d-block w-100 img-fluid" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>If you have knowledge, let others light their candles in it.</h5>
                                <p>We are drowning in information but starved for knowledge.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={photo3} className="d-block w-100 img-fluid" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Risk comes from not knowing what you're doing.</h5>
                                <p>Human behavior flows from three main sources: desire, emotion, and knowledge.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="https://source.unsplash.com/140x140/?Coder" className="bd-placeholder-img rounded-circle"
                                width="140" height="140" alt="..." />
                            <h2>Mentor</h2>
                            <p>“A mentor is someone who allows you to see the hope inside yourself.” — Oprah Winfrey.</p>
                            <p><a className="btn btn-secondary" href="/home" role="button">View details »</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img src="https://source.unsplash.com/140x140/?Computer" className="bd-placeholder-img rounded-circle"
                                width="140" height="140" alt="..." />
                            <h2>Student</h2>
                            <p>“Don’t let what you cannot do interfere with what you can do.” – John Wooden</p>
                            <p><a className="btn btn-secondary" href="/home" role="button">View details »</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img src="https://source.unsplash.com/140x140/?Books" className="bd-placeholder-img rounded-circle"
                                width="140" height="140" alt="..." />
                            <h2>Guest</h2>
                            <p>“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.” – Thomas A. Edison.</p>
                            <p><a className="btn btn-secondary" href="/home" role="button">View details »</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;