/* eslint-disable linebreak-style */
import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TodoItem(props) {
	return <>
		<li className='TodoItem'>
			<span className="circle-loader" onClick={props.completeTodo}>
				<div 
					className={props.children.complete ? 'checkmark draw' : ''}>
				</div>
			</span>
				
			<span 
				className={props.children.complete ? 'content complete' : 'content'} >
				{props.children.desc}
			</span>

			<span className="delete-circle" 
				onClick={props.deleteTodo}>
				<FontAwesomeIcon icon={faTrash} className="red" />
			</span>
		</li>
	</>
}

