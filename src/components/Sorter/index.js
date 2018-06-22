import React, {Component} from 'react'

class Sorter extends Component {
	render() {
		return (
			<div className="mb-4">
				<select className="custom-select" onChange={this.props.handleChange} value={this.props.value}>
					<option value="name">Alphabetical</option>
					<option value="age">Newest</option>
				</select>
			</div>
		)
	}
}

export default Sorter