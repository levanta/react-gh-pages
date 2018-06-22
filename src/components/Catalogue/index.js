import React, {Component} from 'react'
import './index.css';
import Phone from '../Phone'

class Catalogue extends Component {

  render() {
    const {phones} = this.props;

    return (
      <div>
        <section className="phones-list">
          {phones === null ?  
            'Loading...' :
            phones.filter((el, i) => i <= this.props.items)
              .map(phone => <Phone id = {phone.id} key={phone.id} phone={phone}/> )}
        </section>
      </div>
    )
  }

}

export default Catalogue