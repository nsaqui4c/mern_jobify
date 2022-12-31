import React from 'react'

const FormRow = ({name,type,value,labelText,handleChange}) => {
  return (
    <div className='form-row'>
        <label htmlFor={name} className='form-label'>{labelText || name}</label>
        <input type={type} name={name} value={value} onChange={handleChange}/>
    </div>
  )
}

export default FormRow