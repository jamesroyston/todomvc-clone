import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
	return (
		<div className='TodoItem'>
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
				<div class="x-button">
					x
				</div>
			</span>
		</div>
	);
};

export default TodoItem;