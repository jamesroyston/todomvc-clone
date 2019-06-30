import React, { Component } from 'react';
import TodoItem from './TodoItem';
import InputField from './InputField';
import './TodoList.css';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearInputField = this.clearInputField.bind(this);
		this.markDone = this.markDone.bind(this);

		this.state = {
			todos: [
				{ desc: 'do laundry', complete: false, id: 1, classList: '' },
				{ desc: 'budget', complete: true, id: 2, classList: '' },
				{desc: 'water the plants', complete: true, id: 3, classList: '' }
			]
		};
	}

	clearInputField() {
		document.getElementById('input').reset();
		this.setState({newTodo: ''});
	}

	// handleDelete() {
	// 	let todos = [...this.state.todos];
	// 	todos = todos.id.indexOf(this.id).splice();
	// 	this.setState({todos: [...todos]});
	// }
    
	update(id) {
		console.log('update', id);
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
			return <TodoItem 
				markDone={this.markDone.bind(this, todo.id)}
				update={this.update.bind(this, todo.id)} 
				key={todo.id.toString()}
				id={todo.id}
				classList={todo.classList}>
				{todo}
			</TodoItem>;
		});

		return (
			<div>
				<form id="input" className='form' onSubmit={this.handleSubmit}> 
					<InputField handleChange={this.handleChange} />
				</form>
				<table className='TodoList'>
					<tbody>
						<tr>
							{todos}
						</tr>
					</tbody>
				</table>
			</div>
		);

	}
}