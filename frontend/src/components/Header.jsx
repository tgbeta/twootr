import React from 'react'
import styled from 'styled-components'


export default function Header() {
  const StyledHeader=styled.header`
    display:flex;
    justify-content:space-between;
    background-color:#EB1D36;
    
  `
  return (
    
    <StyledHeader>
        <div>
          <p>TWOOTR</p>
        </div>
        <div>
          <p>Write a new tweet</p>
        </div>
    </StyledHeader>
  )
}
