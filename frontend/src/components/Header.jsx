import React from 'react';
import { StyledHeader } from '../styles/Header.styles';


export default function Header() {

  return (
    
    <StyledHeader>
        <div style={{paddingLeft:"40px"}}>
          <p id="logo">TWOOTR</p>
        </div>
        <div>
          <button>Write a new tweet</button>
        </div>
    </StyledHeader>
  )
}
