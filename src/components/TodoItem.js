import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
    return (
        <td className='TodoItem'>
            {props.children.desc}
        </td>
    );
}

export default TodoItem;