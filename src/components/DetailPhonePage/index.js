import React, {Component} from 'react';
import NoMatch from '../NoMatch';
import PhonesService from '../../services/phones-service.js'
import ProductGallery from '../ProductGallery'
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
    if (!phone) return (<div>Loading...</div>)
    return (

      <Router>

        {this.state.phoneNotFound ? <Route component={NoMatch} /> :
          <div className="row">
            <div className="col-md-6">
              <ProductGallery images={phone.images}/>
            </div>
            <div className="col-md-6">
              <h1>{phone.name}</h1>
              {phone.description}
            </div>
          </div>
        }
   
      </Router>
    )
  }
}

export default DetailPhonePage
