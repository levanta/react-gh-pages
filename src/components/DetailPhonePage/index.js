import React, {Component} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import NoMatch from '../NoMatch';
import PhonesService from '../../services/phones-service.js'
import { BrowserRouter as Router, Route } from "react-router-dom";

class DetailPhonePage extends Component {

  componentWillMount() {
    PhonesService.loadPhone(this.props.match.params.id).then(
        (phone) => this.setState({ externalData: phone }), 
        (error) => this.setState({phoneNotFound: true })
    );
  }

  state = {
    externalData: null,
    phoneNotFound: false
  }

  render() { 
    const {match} = this.props
    const phone = this.state.externalData;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    if (!phone) return (<div>Loading...</div>)

console.log(phone.images);
    return (

      <Router>

        {this.state.phoneNotFound ? <Route component={NoMatch} /> :
          <div>
            <h1>{phone.name}</h1>

              <Slider {...settings}>
                <div>
                  <img src="https://raw.githubusercontent.com/levanta/react-gh-pages/gh-pages/{phone.images[0]}"/>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
          </div>
        }
   
      </Router>
    )
  }
}

export default DetailPhonePage
