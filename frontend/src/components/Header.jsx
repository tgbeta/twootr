import React from 'react';
import { StyledHeader } from '../styles/Header.styles';


export default function Header() {


  return (
    
    <StyledHeader>
        <div>
          <p style={{color:"white",paddingLeft:"30px",fontSize:"20px"}}>TWOOTR</p>
        </div>
        <div>
          <button style={{color:"white",paddingRight:"30px",fontSize:"20px"}} >Write a new tweet</button>
        </div>
    </StyledHeader>
  )
}
