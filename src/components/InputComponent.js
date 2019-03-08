import React from 'react';
import { connect } from 'react-redux';
import { handleChange } from '../actions';

const InputComponent = props => {
	return (
		<input
			type='text'
			name='headline'
			value={props.headline}
			onChange={e => props.handleChange(e.target)}
		/>
	);
};

const mapStateToProps = state => {
	return {
		headline: state.basic.headline
	};
};

export default connect(
	mapStateToProps,
	{ handleChange }
)(InputComponent);
