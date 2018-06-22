import React, {Component} from 'react';
import CataloguePage from '../CataloguePage';


class App extends Component {
  render() { 
    return (
      <div className="container">
        <header className='jumbotron display-3 row'>Catalogue</header>
        <CataloguePage setPageParams={this.setPageParams}/>
      </div>
    )
  }
}

export default App