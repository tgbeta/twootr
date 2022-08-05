import React from 'react';
import styled from 'styled-components';

const StyledUserSection=styled.section`
background:url('https://img.freepik.com/premium-photo/panorama-white-marble-texture-background-tiles-floor-decorative-design_42682-513.jpg?w=2000');
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export default function Account(props) {
  const { username, setUsername } = props;
  const { name, setName} = props;
  
  const handleClick=(e)=>{
     setUsername('@'+name.replace(/ /,"-"));
  }

  const name1=(name)=>{
    const username=name.target.value
    setName(username)
  }

  return (

    <StyledUserSection>
    <div>
    <img style={{height:"auto",width:"270px",marginTop:"30px"}} className='avatar' src={`https://avatars.dicebear.com/api/big-smile/${username}.svg`} alt="" />
      <form >
      <div style={{height:"40px",marginTop:"10px"}}><h2 style={{textAlign:"center",fontSize:"35px"}}>{name}</h2></div>
      </form>
      <div style={{display:"flex",justifyContent:'center',alignItems:"center",marginTop:"10px",marginBottom:"20px"}}><h3 style={{color:"#f57171"}}>{username}</h3></div>
      <input maxLength={10} onChange={name1} value={name} type="text" />
      <button type="button" onClick={handleClick} >New Account</button>
    </div>
    </StyledUserSection>
    
  )

}

