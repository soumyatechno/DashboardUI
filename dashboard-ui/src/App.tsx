import './App.css';
import React from 'react'
import Router from './router/router';
import Card from './components/card/card';
const App: React.FC = () => {
	return (
		<div>
			<h1>Userdata</h1>
			<Router/>
			
		</div>
	);
}

export default App;
