import React, {Component} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import './index.css';

class ProductGallery extends Component {

  state = {
    nav1: null,
    nav2: null
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() { 
    const {images} = this.props
    return (
      <div className="prod-gallery">

          <Slider 
            arrows={false}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            fade= {true}
          >
          { images.map(img => <div key={img}> <img src={'https://raw.githubusercontent.com/levanta/react-gh-pages/gh-pages/' + img }/></div>) }
          </Slider>

          <Slider 
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
          { images.map(img => <div key={img}> <img src={'https://raw.githubusercontent.com/levanta/react-gh-pages/gh-pages/' + img }/></div>) }
          </Slider>
      </div>
    )
  }
}

export default ProductGallery