import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = (props) => {
	return <li 
		className='TodoItem'>
		<span className="circle-loader" onClick={props.markDone}>
			<div 
				className={props.children.complete ? 'checkmark draw' : ''}>
			</div>
		</span>
			
		<span 
			className={props.children.complete ? 'content complete' : 'content'} 
			onDoubleClick={props.update}>
			{props.children.desc}
		</span>

		<span className="delete-circle" 
			onClick={props.delete}>
			<FontAwesomeIcon icon={faTrash} className="red" />
		</span>
	</li>;
};

export default TodoItem;