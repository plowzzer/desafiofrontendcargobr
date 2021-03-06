import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cart from './components/Cart'
import * as serviceWorker from './serviceWorker';
import {Router,Route,browserHistory} from 'react-router';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';


import { header } from './reducers/header.reducer'
import { shop } from './reducers/shop.reducer'
import { user } from './reducers/user.reducer'
import { cart } from './reducers/cart.reducer'

const reducers = combineReducers({header, shop, user, cart})
const store = createStore(reducers,applyMiddleware(thunkMiddleware))

ReactDOM.render(
	(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={App}></Route>
				<Route path="/user(/:login)" component={App}></Route>
				<Route path="/cart" component={Cart}></Route>
			</Router>
		</Provider>
	), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();