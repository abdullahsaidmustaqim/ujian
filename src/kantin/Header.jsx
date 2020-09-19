import React, { Component } from 'react';
import image1 from './img/perutkenyang.png'
import image2 from './img/diskon.png'
import image3 from './img/cangcimen.png'

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide rounded-lg pr-5 pl-5" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner slider-radius">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 slider-radius" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100 slider-radius" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 slider-radius" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default Header;