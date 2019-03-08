import React from 'react';
import { connect } from 'react-redux';
import InputComponent from './InputComponent';

const BodyComponent = props => {
	const randomColor = () => {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	};
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>
				{props.headline.split('').map((letter, index) => {
					return (
						<span key={index} style={{ color: randomColor() }}>
							{letter}
						</span>
					);
				})}
			</h1>
			<InputComponent />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		headline: state.basic.headline
	};
};

export default connect(mapStateToProps)(BodyComponent);
