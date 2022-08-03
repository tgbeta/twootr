import React from 'react';
import { StyledHeader } from '../styles/Header.styles';


export default function Header() {

  return (
    
    <StyledHeader>
        <div style={{paddingLeft:"40px"}}>
          <p style={{color:"white",fontSize:"40px",fontFamily:"Monoton",letterSpacing:"3px"}}>TWOOTR</p>
        </div>
        <div>
          <button style={{color:"white",paddingRight:"30px",fontSize:"20px"}} >Write a new tweet</button>
        </div>
    </StyledHeader>
  )
}
