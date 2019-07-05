import React from 'react';
import './InputForm.css';

const InputForm = props => {
	return <li>
		<form id="input" className='form' onSubmit={props.handleSubmit}>
			<input 
				type='text' 
				placeholder='What needs to be done?'
				className='InputField' 
				onChange={props.handleChange}/>
		</form>
	</li>;
};

export default InputForm;