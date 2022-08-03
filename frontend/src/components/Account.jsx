import React,{useState} from 'react'
export default function Account(props) {
  const[username,setUsername]=useState('NicolasM');
  const[input1,setInput1]=useState('');
  
  const handleClick=(e)=>{
     setUsername('@'+input1);
    console.log(username)
  }

  const name1=(name)=>{

    setInput1(name.target.value)
  }

  return (
    <div>
      <h2>Create your Avatar</h2>
      <form >
      <h2>{input1}</h2>
      <input onChange={name1} value={input1} type="text" />
      <button type="button" onClick={handleClick} >New Account</button>
      </form>
      <h3>{username}</h3>
      <img src={`https://avatars.dicebear.com/api/big-smile/${username}.svg`} alt="" />
    </div>
  )
}
