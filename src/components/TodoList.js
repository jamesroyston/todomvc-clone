import React, { Component } from 'react';
import TodoItem from './TodoItem';
import InputField from './InputField';
import './TodoList.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            todos: [
                { desc: 'water the plants' },
                { desc: 'budget' },
                { desc: 'do laundry' }
            ]
        }
    }

    handleChange(e) {
        this.setState({newTodo: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(
            {todos: [...this.state.todos, {desc: this.state.newTodo}]}
        )
        alert('hey, a todo was added');
    }

    render() {
        let todos;
        todos = this.state.todos.map(todo => {
            return <TodoItem>{todo}</TodoItem>
        });

        return (
            <div>
            <form className='form' onSubmit={this.handleSubmit}> 
                <InputField handleChange={this.handleChange} />
            </form>
              <table className='TodoList'>
                  <tbody>
                  {todos}
                  </tbody>
              </table>
          </div>
        );

    }
};