import { ButtonContainer } from "./styles";


import React from 'react'

 const Button = ({label, onClick}) => {
  return (
   <ButtonContainer onClick={onClick}>
   {label}
   </ButtonContainer>
  )
}

export default Button