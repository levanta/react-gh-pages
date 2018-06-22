import React from 'react';

export default class Phone extends React.Component {
  
  render() {
    const {phone} = this.props;
// console.log(phone);
    return (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{ phone.name }</h5>
            <p className="card-text">{ phone.snippet }</p>
            <a href="#" className="btn btn-primary">More...</a>
          </div>
            <img className="card-img-bottom" src={'/' + phone.imageUrl } alt={phone.id}/>
        </div>
    )
  }
}
