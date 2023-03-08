import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Navbar/>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
