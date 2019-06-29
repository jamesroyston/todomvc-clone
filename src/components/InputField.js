import React from 'react';
import './InputField.css';

const InputField = props => {
    return (
        <React.Fragment>
            <input type='text' placeholder='what needs doing?'className='InputField' onChange={props.handleChange}/>
        </React.Fragment>
    );
}

export default InputField;