import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className="App">
      <Header />
      <TodoList />
      <Footer />
    </div>;
	}
}

export default App;
