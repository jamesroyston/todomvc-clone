import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
    return (
        <td className='TodoItem'>
            <span className="deleteButton"></span>
            <span className="content">
                {props.children.desc}
            </span>
        </td>
    );
}

export default TodoItem;