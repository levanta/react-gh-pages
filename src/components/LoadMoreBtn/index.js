import React from 'react'
import './index.css'

export default function LoadMoreBtn(props) {
	return (
		<span className="btn btn-primary load-more-btn" onClick={props.handleClick}>Load more...</span>
	)
}