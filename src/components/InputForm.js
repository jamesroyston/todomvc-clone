import React from 'react';
import './InputForm.css';

const InputForm = props => {
	return (
		<form id="input" className='form' onSubmit={props.handleSubmit}>
			<input 
				type='text' 
				placeholder='what needs doing?'
				className='InputField' 
				onChange={props.handleChange}/>
		</form>
	);
};

export default InputForm;