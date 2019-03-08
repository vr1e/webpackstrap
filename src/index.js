import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import BodyComponent from './components/BodyComponent';

const App = () => {
	return <BodyComponent />;
};

/* Without redux developer tools */
const store = createStore(reducers, applyMiddleware(thunk));

/* With redux developer tools */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
// 	reducers,
// 	/* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
// );

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
