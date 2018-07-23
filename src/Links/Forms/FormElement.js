import React from 'react';

function FormElement(prop){
  return(
    <div>
      <label>{prop.name}</label>
      <input
        type={prop.type}
        placeholder={prop.placeholder}
        name={prop.inputname}
        className={prop.className}
        onChange={prop.changeHandler}
      />
    </div>
  )
}

export default FormElement;