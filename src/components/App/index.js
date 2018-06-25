import React, {Component} from 'react';
import CataloguePage from '../CataloguePage';
import DetailPhonePage from '../DetailPhonePage';
import NoMatch from '../NoMatch';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() { 
    return (
      <Router>
        <div className="container">
          <header className='jumbotron display-3 row'>
            <Link to="/">logo</Link>
          </header>
          <Switch>
            <Route exact path="/" component={CataloguePage}  setPageParams={this.setPageParams}/>
            <Route path="/:id" component={DetailPhonePage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>


    )
  }

}

export default App