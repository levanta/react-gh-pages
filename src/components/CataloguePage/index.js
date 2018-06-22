import React, {Component} from 'react';
import Catalogue from '../Catalogue'
import Search from '../Search'
import Sorter from '../Sorter'
import PhonesService from '../../services/phones-service.js'
import LoadMoreBtn from '../LoadMoreBtn'


class CataloguePage extends Component {
  componentWillMount() {
    this.loadData(this.state.filter);
  }

  defaultSettings = {
    items: 3,
    step: 4,
    filter: {
      query: '',
      order: 'name'
    },
    externalData: null
  }

  state = this.defaultSettings

  render() { 
    return (
        <div className="row">

          <div className="col-md-3">
            <section>
              <Search handleChange = { this.searchChange }/>
              <Sorter 
                handleChange = { this.sorterChange }
                value = { this.state.filter.order }
              />
            </section>
          </div>

          <div className="col-md-9">
            <Catalogue 
              phones = { this.state.externalData }
              items = { this.state.items }
            />

            { this.state.externalData !== null && 
              this.state.items < (this.state.externalData.length - 1) && 
              <LoadMoreBtn handleClick={this.handleLoadMore.bind(this)}/> }

          </div>

        </div>
    )
  }

  searchChange = (event) => {
    this.loadData({
      order: this.state.filter.order,
      query: event.target.value,
    });
  }

  sorterChange = (event) => {
    this.loadData({
      order: event.target.value,
      query: this.state.filter.query
    });
  }

  loadData = (filter) => {
    PhonesService.loadPhones(filter).then((phones) => {
      this.setState({
        filter: filter,
        externalData: phones,
        items: this.defaultSettings.items,
      })
    });
  }

  handleLoadMore =  (event) => {
    this.setState({
      items: this.state.items + this.state.step
    });
  }

}

export default CataloguePage