const initialState = {
	headline: 'React/Redux Boilerplate!'
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'INPUT':
			return {
				...state,
				[action.payload.name]: action.payload.value
			};
		default:
			return state;
	}
};
