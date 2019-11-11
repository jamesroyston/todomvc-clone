/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import InputForm from './InputForm';
import Header from './Header';
import './TodoList.css';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearInputField = this.clearInputField.bind(this);

		this.state = {
			idIncrementer: 1,
			todos: [{ 
				desc: 'write tests :)', 
				complete: false, 
				id: 1
			}]
		};
	}

	clearInputField() {
		document.getElementById('input').reset();
		this.setState({newTodo: ''});
	}
	
	delete(id) {
		let todos = [...this.state.todos];
		todos = todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({
			todos: [...todos]
		});
	}
    
	markDone(id) {
		let todos = [...this.state.todos];
		todos = todos.filter((todo) => {
			if (todo.id === id) {
				todo.complete = !todo.complete;
			}
			return todos;
		});
        
		this.setState({
			todos: [...todos]
		});
	}

	handleChange(e) {
		this.setState({newTodo: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			todos: [
				...this.state.todos,
				{desc: this.state.newTodo, complete: false, id: this.state.idIncrementer++ }
			]
		});
		this.clearInputField();
	}

	render() {
		let todos;
		todos = this.state.todos.map(todo => {
			return <TodoItem 
				markDone={this.markDone.bind(this, todo.id)}
				update={this.update.bind(this, todo.id)}
				delete={this.delete.bind(this, todo.id)}
				key={todo.id.toString()}
				id={todo.id}>
				{todo}
			</TodoItem>;
		});

		return (
			<div className="TodoListContainer">
				<Header />
				<ul className='TodoList'>
					<InputForm  
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange} />

					{todos}
				</ul>

			</div>
		);

	}
}