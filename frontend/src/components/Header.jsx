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
          <p style={{color:"white",paddingLeft:"30px",fontSize:"20px"}}>TWOOTR</p>
        </div>
        <div>
          <p style={{color:"white",paddingRight:"30px",fontSize:"20px"}} >Write a new tweet</p>
        </div>
    </StyledHeader>
  )
}
