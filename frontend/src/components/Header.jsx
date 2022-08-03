import React from 'react'
import styled from 'styled-components'


export default function Header() {
  const StyledHeader=styled.header`
    display:flex;
    justify-content:space-between;
    background-color:#EB1D36;
    align-items:center;
    height:70px;
  `
  return (
    
    <StyledHeader>
        <div style={{paddingLeft:"40px"}}>
          <p style={{color:"white",fontSize:"40px",fontFamily:"Monoton",letterSpacing:"3px"}}>TWOOTR</p>
        </div>
        <div style={{paddingRight:"40px"}}>
          <p style={{color:"white",fontSize:"20px"}} >Write a new tweet</p>
        </div>
    </StyledHeader>
  )
}
