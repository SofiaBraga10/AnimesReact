import React, { useState } from 'react'
import { Form, Valor } from './style';

function Filtro(props) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value)
    props.onChangeFiltroValue(event.target.value)
  }

  return (
    <Valor>
    <Form type='text' value={inputValue} onChange={handleInputChange} className='form-control' placeholder='Pesquisar'></Form>
    </Valor>
  )
}

export default Filtro;