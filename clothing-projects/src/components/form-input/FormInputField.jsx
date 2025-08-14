import React from 'react'
import './FormInputStyleField.style.scss';

const FormInputField = ({label, ...otherProps}) => {
  return (
    <div className='group'>
        <input className='form-input' {...otherProps} />
        {label && (
            <label className=
            {`${otherProps.value.length ? 'shrink' : ''} 
            form-input-label`}>
                {label}
            </label>

        )}
        
    </div>
  )
}

export default FormInputField;