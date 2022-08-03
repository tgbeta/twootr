import React,{useState} from 'react';
import styled from 'styled-components';

const StyledUserSection=styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const StyledForm=styled.form`
  
`
export default function Account(props) {
  const[username,setUsername]=useState('@NicolasM');
  const[input1,setInput1]=useState('');
  
  const handleClick=(e)=>{
     setUsername('@'+input1);
    console.log(username)
  }

  const name1=(name)=>{

    setInput1(name.target.value)
  }

  return (

    <StyledUserSection>
    <div>

      <h2>Create your Avatar</h2>
      <form >
      <h2>{input1}</h2>
      <input onChange={name1} value={input1} type="text" />
      <button type="button" onClick={handleClick} >New Account</button>
      </form>
      <img style={{height:"auto",width:"270px"}} className='avatar' src={`https://avatars.dicebear.com/api/big-smile/${username}.svg`} alt="" />
      <h3>{username}</h3>
    </div>
    </StyledUserSection>
    
  )
}
