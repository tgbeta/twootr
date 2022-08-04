import React from 'react';

export default function Account(props) {

  const { username, setUsername } = props;
  const { name, setName} = props;
    
  const handleClick=(e)=>{
     setUsername('@'+name);
    console.log(username)
  }

  const name1=(name)=>{
    setName(name.target.value)
  }

  return (
     
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h2>Create your Avatar</h2>
      <form>
        <input onChange={name1} value={name} type="text" />
        <button type="button" onClick={handleClick} >New Account</button>
      </form>
      <img className='avatar' src={`https://avatars.dicebear.com/api/big-smile/${username}.svg`} alt="" />
      <h3>{username}</h3>  
    </div>
    
  )

}

