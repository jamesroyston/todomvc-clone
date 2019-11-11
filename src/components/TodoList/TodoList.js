import React, { useState, useRef, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import InputForm from '../InputForm/InputForm';
import magicNumbers from '../../constants/magicNumbers';
import './TodoList.css';

const magicNumberTwo = magicNumbers.two;

export default function TodoList() {
    // 2 is a magic number here, because we have a starting state of one todo with an id of 1
    let [idIncrementer, setIdIncrementer] = useState(magicNumberTwo);
    let [todos, setTodos] = useState([
        {
            desc: 'write tests :)',
            complete: false,
            id: 1
        }
    ]);
    let [documentTitle] = useState('TodoMVC');
    let inputRef = useRef();

    // hook to change document title on render woo
    useEffect(() => {
        document.title = documentTitle;
    }, [documentTitle]);

    useEffect(() => {
        console.log('the todo list as a table-- after render');
        console.table(todos);
    }, [todos]);

    const clearInputField = () => {
        document.getElementById('input').reset();
    };

    const deleteTodo = (id) => {
        const result = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(result);
    };

    const completeTodo = (id) => {
        let result = todos.filter((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
            return todos;
        });
        setTodos(result);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todos.length >= 0) {
            setIdIncrementer(idIncrementer + 1);
            setTodos(
                [
                    ...todos,
                    {
                        desc: inputRef.current.value,
                        complete: false,
                        id: idIncrementer
                    }
                ]
            );
        }
        clearInputField();
    };

    return (
        <>
            <ul className='TodoList'>
                <InputForm
                    handleSubmit={handleSubmit}
                    refProps={inputRef}
                />
                {todos.length >= 1
                    ? todos.map(todo => <TodoItem
                        completeTodo={() => completeTodo(todo.id)}
                        deleteTodo={() => deleteTodo(todo.id)}
                        key={todo.id}
                        id={todo.id}>
                        {todo}
                    </TodoItem>
                    )
                    : ''
                }
            </ul>
        </>
    );
}