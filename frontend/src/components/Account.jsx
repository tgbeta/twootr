import React,{useState} from 'react';
import styled from 'styled-components';

const StyledUserSection=styled.section`
background:url('https://img.freepik.com/premium-photo/panorama-white-marble-texture-background-tiles-floor-decorative-design_42682-513.jpg?w=2000');
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export default function Account() {
  const[username,setUsername]=useState('@Nicolas-Mateo');
  const[input1,setInput1]=useState('Nicolas Mateo');
  
  const handleClick=(e)=>{
     setUsername('@'+input1.replace(/ /,"-"));
  }

  const name1=(name)=>{
    const username=name.target.value
    setInput1(username)
  }

  return (

    <StyledUserSection>
    <div>
    <img style={{height:"auto",width:"270px",marginTop:"30px"}} className='avatar' src={`https://avatars.dicebear.com/api/big-smile/${username}.svg`} alt="" />
      <form >
      <div style={{height:"40px",marginTop:"10px"}}><h2 style={{textAlign:"center",fontSize:"35px"}}>{input1}</h2></div>
      </form>
      <div style={{display:"flex",justifyContent:'center',alignItems:"center",marginTop:"10px",marginBottom:"20px"}}><h3 style={{color:"#f57171"}}>{username}</h3></div>
      <input onChange={name1} value={input1} type="text" />
      <button type="button" onClick={handleClick} >New Account</button>
    </div>
    </StyledUserSection>
    
  )
}
