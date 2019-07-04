import React, { Component } from 'react';
import TodoItem from './TodoItem';
import InputForm from './InputForm';
import './TodoList.css';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearInputField = this.clearInputField.bind(this);

		this.state = {
			todos: [
				{ desc: 'do laundry', complete: false, id: 1, classList: '', edit: true },
				{ desc: 'budget', complete: true, id: 2, classList: '', edit: false },
				{desc: 'water the plants', complete: true, id: 3, classList: '', edit: false },
				{desc: 'code', complete: false, id: 4, classList: '', edit: false },
				{desc: 'call Mom', complete: false, id: 5, classList: '', edit: false }
			]
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
    
	update(id) {
		alert('update', id);
		
		let todos = [...this.state.todos];
		todos = todos.filter((todo) => {
			if (todo.edit === false) {
				return [
					<InputForm  
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange} />,
					...todos];
			}
		});
		// this.setState({
		// 	todos: [...todos]
		// });
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
		let idIncrementer = this.state.todos.length;
		this.setState({
			todos: [
				...this.state.todos,
				{desc: this.state.newTodo, complete: false, id: idIncrementer+1 }
			]
		});
		this.clearInputField();
	}

	render() {
		let todos;
		todos = this.state.todos.map(todo => {
			return <tr>
				<TodoItem 
					markDone={this.markDone.bind(this, todo.id)}
					update={this.update.bind(this, todo.id)}
					delete={this.delete.bind(this, todo.id)}
					key={todo.id.toString()}
					id={todo.id}>
					{todo}
				</TodoItem>
			</tr>;
		});

		return (
			<table className='TodoList'>
				<tbody>
					<InputForm  
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange} />

					{todos}
				</tbody>
			</table>
		);

	}
}