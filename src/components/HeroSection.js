
import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}


class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
        "./images/img-11.jpg",
        "./images/img-12.jpg",
        "./images/img-13.jpg",
        "./images/img-14.jpg",
      ],
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 5000);
  }



  render() {
    return (
      <div className="hero-container">
         <img src={this.state.images[this.state.currentImage]} alt="images" />
        <h1>Just Get Out And Go</h1>
        <p>What are you waiting for?</p>
        
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={handleClick}
            
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
    );
  }
}

export default HeroSection;
