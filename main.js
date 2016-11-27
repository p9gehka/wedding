import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Game from './components/Game/Game'
import store from './core/store';


ReactDOM.render(
	(<Provider store={store}>
		<Game />
	</Provider>)
	, document.getElementById('game'));