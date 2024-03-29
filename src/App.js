import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return <div className="App">
			<TodoList />
			<Footer />
		</div>;
	}
}

export default App;
