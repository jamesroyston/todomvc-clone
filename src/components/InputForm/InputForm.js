import React from 'react';
import './InputForm.css';

export default function InputForm(props) {
	return <>
		<li>
			<form id="input" className='form' onSubmit={props.handleSubmit}>
				<input 
					type='text' 
					placeholder='What needs to be done?'
					className='InputField' 
					ref={props.refProps}/>
			</form>
		</li>
	</>
};