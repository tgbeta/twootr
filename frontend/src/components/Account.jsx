import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

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
  const [input,setInput]=useState(false);
  
  const handleClick=(e)=>{
     setUsername('@'+name.replace(/ /,"-"));
     setInput(current=>!current)
  }

  const name1=(name)=>{
    const username=name.target.value
    setName(username)
  }
function handleInput(e){
  setInput(current=>!current)
}
  return (

    <StyledUserSection>
    <div>
    <img style={{height:"auto",width:"270px",marginTop:"30px"}} className='avatar' src={`https://avatars.dicebear.com/api/big-smile/${username}.svg`} alt="" />
      <form >
      <div style={{height:"40px",marginTop:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h2 style={{textAlign:"center",fontSize:"35px"}}>{name}</h2>
      <button type="button" onClick={handleInput} className="btn-nostyle"> <i style={{marginLeft:"10px",color:"#ca7900ff"}} class="fa-solid fa-file-pen fa-xl" ></i></button>
      </div>
      </form>
      <div style={{display:"flex",justifyContent:'center',alignItems:"center",marginTop:"10px",marginBottom:"20px"}}>
      <h3 style={{color:"#f57171"}}>{username}</h3>
      </div>
      <div className={input ? "" : "hide"} id={input?"popup":""}>
      <div className='popup-inner'>
      <input style={{marginLeft:"60px",height:"30px", fontSize:"25px"}} maxLength={10} onChange={name1} value={name} type="text" />
      <button style={{fontSize:"22px"}} className='popup-btn' type="button" onClick={handleClick} >New Account</button>
      </div>
      </div>
      
    </div>
    </StyledUserSection>
    
  )

}

