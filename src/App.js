import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
	// fyi <> is the new <React.Fragment>, which was the new <div> wrapper for a while
	return <>
		<div className="App">
			<div className="TodoListContainer">
				<Header />
				<TodoList />
			</div>
			<Footer />
		</div>
	</>
};