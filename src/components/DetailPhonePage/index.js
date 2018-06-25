import React, {Component} from 'react';
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

    return (
      <Router>

        {this.state.phoneNotFound ? 
          <Route component={NoMatch} /> :
          <div className="test">{match.params.id}</div>
        }
   
      </Router>
    )
  }
}

export default DetailPhonePage