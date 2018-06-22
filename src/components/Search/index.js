import React, {Component} from 'react'

class Search extends Component {

	render() {
		return (
			<div className="mb-4">
				<input type="search"  onChange={this.props.handleChange} className="form-control" placeholder="Search..." />
			</div>
		)
	}

}

export default Search