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
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            todos: [
                { desc: 'do laundry', complete: false, id: 3 },
                { desc: 'budget', complete: false, id: 2 },
                { desc: 'water the plants', complete: false, id: 1 }
            ]
        }
    }

    clearInputField() {
        document.getElementById('input').reset();
        this.setState({newTodo: ''})
    }

    handleDelete() {
        let todos = [...this.state.todos];
        todos = todos.id.indexOf(this.id).splice();
        this.setState({todos: [...todos]})
    }

    handleChange(e) {
        this.setState({newTodo: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let idIncrementer = this.state.todos.length;
        this.setState(
            {todos: [{desc: this.state.newTodo, complete: false, id: idIncrementer+1 }, ...this.state.todos]}
        )
        this.clearInputField();
    }

    render() {
        let todos;
        todos = this.state.todos.map(todo => {
            return <TodoItem onClick={this.handleDelete} key={todo.id.toString()}>{todo}</TodoItem>
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
};